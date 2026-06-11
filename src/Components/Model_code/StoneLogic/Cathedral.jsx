import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useControls, folder, button } from 'leva'

// ─────────────────────────────────────────────────────────────────────────────
// PRESET TABLE  (split left / right)
// Each preset has a `left` and `right` sub-object so both sides can be tuned
// independently. When you're done with Leva:
//   1. Hit "Copy values to console" for each side and paste below
//   2. Set activePreset="YourPresetName" on <CathedralPair>
//   3. Set levaEnabled={false} on <CathedralPair> to strip Leva out entirely
// ─────────────────────────────────────────────────────────────────────────────
export const CATHEDRAL_PRESETS = {

  Default: {
    left: {
      posX: -0.128,  posY: 2.342,  posZ: -0.546,
      rotX:  0.016,  rotY: -1.571, rotZ: 0,
      scaleX: 0.548, scaleY: 0.548, scaleZ: 0.467,
      leanX: 1.5,    leanZ: 0.0,   totalLength: 4.0,
      bottomRadiusX: 0.6,  bottomRadiusY: 0.6,
      topRadiusX:    0.15, topRadiusY:    0.15,
      bottomDomeDepth: 0.4, topDomeDepth: 0.5,
      curveSeg: 32,  radialSeg: 16,
    },
    right: {
      posX:  0.128,  posY: 2.342,  posZ: -0.546,
      rotX:  0.016,  rotY:  1.571, rotZ: 0,
      scaleX: 0.548, scaleY: 0.548, scaleZ: 0.467,
      leanX: 1.5,    leanZ: 0.0,   totalLength: 4.0,
      bottomRadiusX: 0.6,  bottomRadiusY: 0.6,
      topRadiusX:    0.15, topRadiusY:    0.15,
      bottomDomeDepth: 0.4, topDomeDepth: 0.5,
      curveSeg: 32,  radialSeg: 16,
    },
  },

  // ── Paste your tuned values as new rows ────────────────────────────────
  // Slim: {
  //   left:  { posX: -0.128, posY: 2.5, ... },
  //   right: { posX:  0.128, posY: 2.5, ... },
  // },

}

// ─────────────────────────────────────────────────────────────────────────────
// Geometry builder — tapered ellipse tube with rounded dome end caps
// ─────────────────────────────────────────────────────────────────────────────
function buildArmGeometry({
  leanX, leanZ, totalLength,
  bottomRadiusX, bottomRadiusY,
  topRadiusX,    topRadiusY,
  bottomDomeDepth, topDomeDepth,
  curveSeg, radialSeg,
  side,
}) {
  const sx = side === 'left' ? -1 : 1

  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0,                  0,                   0),
    new THREE.Vector3(sx * leanX * 0.30,  totalLength * 0.35,  leanZ * 0.2),
    new THREE.Vector3(sx * leanX * 0.75,  totalLength * 0.65,  leanZ * 0.5),
    new THREE.Vector3(sx * leanX,         totalLength,         leanZ),
  ])

  const positions = [], normals = [], uvs = [], indices = []
  const up0 = new THREE.Vector3(0, 1, 0)

  // ── helpers ───────────────────────────────────────────────────────────────
  function getFrame(t) {
    const pt    = curve.getPoint(t)
    const tan   = curve.getTangent(t).normalize()
    const blend = Math.pow(t, 1.5)
    const cw    = bottomRadiusX + (topRadiusX - bottomRadiusX) * blend
    const ch    = bottomRadiusY + (topRadiusY - bottomRadiusY) * blend
    const up    = Math.abs(tan.dot(up0)) > 0.99
                    ? new THREE.Vector3(0, 0, 1)
                    : up0.clone()
    const right  = new THREE.Vector3().crossVectors(tan, up).normalize()
    const realUp = new THREE.Vector3().crossVectors(right, tan).normalize()
    return { pt, tan, cw, ch, right, realUp }
  }

  // ── tube rings ────────────────────────────────────────────────────────────
  for (let i = 0; i <= curveSeg; i++) {
    const t = i / curveSeg
    const { pt, cw, ch, right, realUp } = getFrame(t)

    for (let j = 0; j <= radialSeg; j++) {
      const a  = (j / radialSeg) * Math.PI * 2
      const ca = Math.cos(a), sa = Math.sin(a)
      const pos = pt.clone()
        .addScaledVector(right,  ca * cw)
        .addScaledVector(realUp, sa * ch)
      positions.push(pos.x, pos.y, pos.z)
      normals.push(
        right.x * ca + realUp.x * sa,
        right.y * ca + realUp.y * sa,
        right.z * ca + realUp.z * sa,
      )
      uvs.push(j / radialSeg, t)
    }
  }

  // ── tube faces ────────────────────────────────────────────────────────────
  for (let i = 0; i < curveSeg; i++) {
    for (let j = 0; j < radialSeg; j++) {
      const a = i * (radialSeg + 1) + j
      const b = a + 1
      const c = a + radialSeg + 1
      const d = c + 1
      indices.push(a, c, b, b, c, d)
    }
  }

  // ── rounded dome cap ──────────────────────────────────────────────────────
  // Instead of a flat disc fan we build latitudinal rings that arc from the
  // tube rim inward to a pole, giving a smooth hemispherical closure.
  //
  //   capT         – curve parameter (0 = bottom, 1 = top)
  //   flipWinding  – true for the bottom cap so normals point away correctly
  //   domeDepth    – how far the pole sits along the tube axis (≈ avg radius)
  // ─────────────────────────────────────────────────────────────────────────
  const domeLat = 10   // latitude rings — higher = smoother dome

  function addDomeCap(capT, flipWinding, domeDepth) {
    const { pt, cw, ch, right, realUp, tan } = getFrame(capT)
    const axDir = flipWinding ? tan.clone().negate() : tan.clone()
    const depth = domeDepth ?? (cw + ch) * 0.5

    const ringStart = positions.length / 3

    for (let lat = 0; lat <= domeLat; lat++) {
      // phi goes from 0 (equator / tube rim) to PI/2 (pole)
      const phi  = (lat / domeLat) * (Math.PI * 0.5)
      const sinP = Math.sin(phi)
      const cosP = Math.cos(phi)

      // centre of this latitude ring, offset along axis toward pole
      const centre = pt.clone().addScaledVector(axDir, sinP * depth)

      for (let j = 0; j <= radialSeg; j++) {
        const a   = (j / radialSeg) * Math.PI * 2
        const ca  = Math.cos(a), sa = Math.sin(a)

        // ellipse radii shrink to zero at the pole
        const rw  = cw * cosP
        const rh  = ch * cosP

        const pos = centre.clone()
          .addScaledVector(right,  ca * rw)
          .addScaledVector(realUp, sa * rh)
        positions.push(pos.x, pos.y, pos.z)

        // normal = blend of outward-radial and axis direction
        const nx = right.x * ca + realUp.x * sa
        const ny = right.y * ca + realUp.y * sa
        const nz = right.z * ca + realUp.z * sa
        const norm = new THREE.Vector3(
          nx * cosP + axDir.x * sinP,
          ny * cosP + axDir.y * sinP,
          nz * cosP + axDir.z * sinP,
        ).normalize()
        normals.push(norm.x, norm.y, norm.z)
        uvs.push(0.5 + ca * cosP * 0.5, 0.5 + sa * cosP * 0.5)
      }
    }

    // stitch latitude rings into quads / triangles
    for (let lat = 0; lat < domeLat; lat++) {
      for (let j = 0; j < radialSeg; j++) {
        const a = ringStart + lat * (radialSeg + 1) + j
        const b = a + 1
        const c = a + radialSeg + 1
        const d = c + 1
        if (lat === domeLat - 1) {
          // last ring collapses to the pole — use triangles
          flipWinding
            ? indices.push(a, b, c)
            : indices.push(a, c, b)
        } else {
          flipWinding
            ? indices.push(a, b, c, b, d, c)
            : indices.push(a, c, b, b, c, d)
        }
      }
    }
  }

  addDomeCap(0, true,  bottomDomeDepth)  // bottom — domes toward shank
  addDomeCap(1, false, topDomeDepth)     // top    — domes away from shank

  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  geo.setAttribute('normal',   new THREE.Float32BufferAttribute(normals,   3))
  geo.setAttribute('uv',       new THREE.Float32BufferAttribute(uvs,       2))
  geo.setIndex(indices)
  geo.computeVertexNormals()
  return geo
}

// ─────────────────────────────────────────────────────────────────────────────
// CathedralArm
// ─────────────────────────────────────────────────────────────────────────────
export function CathedralArm({
  side          = 'left',
  material      = null,
  levaPrefix    = 'Cathedral Arm',
  castShadow    = true,
  receiveShadow = true,
  activePreset  = 'Default',
  levaEnabled   = true,
}) {
  // Resolve preset for this specific side
  const preset = (
    CATHEDRAL_PRESETS[activePreset]?.[side] ??
    CATHEDRAL_PRESETS.Default[side]
  )

  // ── Leva controls ─────────────────────────────────────────────────────────
  const levaCtrl = useControls(levaEnabled ? levaPrefix : `__disabled_${side}`, {

    '⚡ Active Preset': { value: activePreset, editable: false, label: 'Preset' },

    Position: folder({
      posX: { value: preset.posX, min: -5,   max: 5,   step: 0.001, label: 'X' },
      posY: { value: preset.posY, min: -5,   max: 10,  step: 0.001, label: 'Y' },
      posZ: { value: preset.posZ, min: -5,   max: 5,   step: 0.001, label: 'Z' },
    }, { collapsed: false }),

    Rotation: folder({
      rotX: { value: preset.rotX, min: -Math.PI, max: Math.PI, step: 0.001, label: 'X (rad)' },
      rotY: { value: preset.rotY, min: -Math.PI, max: Math.PI, step: 0.001, label: 'Y (rad)' },
      rotZ: { value: preset.rotZ, min: -Math.PI, max: Math.PI, step: 0.001, label: 'Z (rad)' },
    }, { collapsed: false }),

    Scale: folder({
      scaleX: { value: preset.scaleX, min: 0.001, max: 5, step: 0.001, label: 'X' },
      scaleY: { value: preset.scaleY, min: 0.001, max: 5, step: 0.001, label: 'Y' },
      scaleZ: { value: preset.scaleZ, min: 0.001, max: 5, step: 0.001, label: 'Z' },
    }, { collapsed: false }),

    Curve: folder({
      leanX:       { value: preset.leanX,       min: -3,  max: 3,  step: 0.01, label: 'Lean X'  },
      leanZ:       { value: preset.leanZ,        min: -3,  max: 3,  step: 0.01, label: 'Lean Z'  },
      totalLength: { value: preset.totalLength,  min: 0.5, max: 10, step: 0.05, label: 'Length'  },
    }, { collapsed: false }),

    Bottom: folder({
      bottomRadiusX: { value: preset.bottomRadiusX, min: 0.01, max: 2, step: 0.01, label: 'Radius X' },
      bottomRadiusY: { value: preset.bottomRadiusY, min: 0.01, max: 2, step: 0.01, label: 'Radius Y' },
    }, { collapsed: false }),

    Top: folder({
      topRadiusX: { value: preset.topRadiusX, min: 0.01, max: 2, step: 0.01, label: 'Radius X' },
      topRadiusY: { value: preset.topRadiusY, min: 0.01, max: 2, step: 0.01, label: 'Radius Y' },
    }, { collapsed: false }),

    Caps: folder({
      bottomDomeDepth: { value: preset.bottomDomeDepth ?? 0.4, min: 0, max: 2, step: 0.01, label: 'Bottom dome depth' },
      topDomeDepth:    { value: preset.topDomeDepth    ?? 0.5, min: 0, max: 2, step: 0.01, label: 'Top dome depth'    },
    }, { collapsed: false }),

    Resolution: folder({
      curveSeg:  { value: preset.curveSeg,  min: 8,  max: 128, step: 1, label: 'Curve segs'  },
      radialSeg: { value: preset.radialSeg, min: 6,  max: 64,  step: 1, label: 'Radial segs' },
    }, { collapsed: true }),

    // ── Copy current values to console ──────────────────────────────────────
    'Copy values to console': button(() => {
      const v = ctrlRef.current
      const out = {
        posX: v.posX, posY: v.posY, posZ: v.posZ,
        rotX: v.rotX, rotY: v.rotY, rotZ: v.rotZ,
        scaleX: v.scaleX, scaleY: v.scaleY, scaleZ: v.scaleZ,
        leanX: v.leanX, leanZ: v.leanZ, totalLength: v.totalLength,
        bottomRadiusX: v.bottomRadiusX, bottomRadiusY: v.bottomRadiusY,
        topRadiusX: v.topRadiusX, topRadiusY: v.topRadiusY,
        bottomDomeDepth: v.bottomDomeDepth, topDomeDepth: v.topDomeDepth,
        curveSeg: v.curveSeg, radialSeg: v.radialSeg,
      }
      const label = prompt('Preset name?', `MyPreset`) ?? 'MyPreset'
      const snippet =
        `  ${label}: {\n` +
        `    ${side}: {\n` +
        Object.entries(out).map(([k, val]) =>
          `      ${k}: ${typeof val === 'number' ? +val.toFixed(4) : val},`
        ).join('\n') +
        '\n    },\n  },'
      console.log('\n// ── Paste into CATHEDRAL_PRESETS in Cathedral.jsx ──')
      console.log(snippet)
      navigator.clipboard?.writeText(snippet)
        .then(() => console.log('✅ Copied to clipboard!'))
        .catch(() => console.log('(clipboard write failed — copy manually above)'))
    }),

  })

  // Keep a ref so the button closure always reads fresh values
  const ctrlRef = useRef(levaCtrl)
  ctrlRef.current = levaCtrl

  // ── Final values: Leva when enabled, preset when disabled ────────────────
  const ctrl = levaEnabled ? levaCtrl : preset

  const geometry = useMemo(() => buildArmGeometry({
    leanX:           ctrl.leanX,
    leanZ:           ctrl.leanZ,
    totalLength:     ctrl.totalLength,
    bottomRadiusX:   ctrl.bottomRadiusX,
    bottomRadiusY:   ctrl.bottomRadiusY,
    topRadiusX:      ctrl.topRadiusX,
    topRadiusY:      ctrl.topRadiusY,
    bottomDomeDepth: ctrl.bottomDomeDepth,
    topDomeDepth:    ctrl.topDomeDepth,
    curveSeg:        ctrl.curveSeg,
    radialSeg:       ctrl.radialSeg,
    side,
  }), [
    ctrl.leanX,           ctrl.leanZ,     ctrl.totalLength,
    ctrl.bottomRadiusX,   ctrl.bottomRadiusY,
    ctrl.topRadiusX,      ctrl.topRadiusY,
    ctrl.bottomDomeDepth, ctrl.topDomeDepth,
    ctrl.curveSeg,        ctrl.radialSeg,
    side,
  ])

  return (
    <mesh
      ref={useRef()}
      name={`Cathedral_${side}`}
      castShadow={castShadow}
      receiveShadow={receiveShadow}
      geometry={geometry}
      position={[ctrl.posX,   ctrl.posY,   ctrl.posZ  ]}
      rotation={[ctrl.rotX,   ctrl.rotY,   ctrl.rotZ  ]}
      scale={   [ctrl.scaleX, ctrl.scaleY, ctrl.scaleZ]}
    >
      {material ?? <meshStandardMaterial color="#cccccc" roughness={0.5} metalness={0.1} />}
    </mesh>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// CathedralPair — renders left + right arms
//
// Usage while tuning:
//   <CathedralPair material={...} activePreset="Default" levaEnabled={true} />
//
// Usage after hardcoding (no Leva):
//   <CathedralPair material={...} activePreset="Default" levaEnabled={false} />
// ─────────────────────────────────────────────────────────────────────────────
export function CathedralPair({ material, activePreset = 'Default', levaEnabled = true, ...props }) {
  return (
    <>
      <CathedralArm
        side="left"
        material={material}
        levaPrefix="Cathedral / Left"
        activePreset={activePreset}
        levaEnabled={levaEnabled}
        {...props}
      />
      <CathedralArm
        side="right"
        material={material}
        levaPrefix="Cathedral / Right"
        activePreset={activePreset}
        levaEnabled={levaEnabled}
        {...props}
      />
    </>
  )
}