import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations, MeshRefractionMaterial } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useControls, folder } from 'leva'
import Emerald          from './SubCode/Emerald'
import CusihonElong     from './SubCode/CusihonElong'
import CushionSquare    from './SubCode/CushionSquare'
import Asscher          from './SubCode/Asscher'
import Marqusie         from './SubCode/Marqusie'
import Oval             from './SubCode/Oval'
import Princess         from './SubCode/Princess'
import RadiantSquare    from './SubCode/RadiantSquare'
import Pear             from './SubCode/Pear'
import Round            from './SubCode/Round'
import RadiantElong     from './SubCode/RadiantElong'

const BW_DEFAULT = 2.7

// ─── Carat → visual scale compression ────────────────────────────────────────
const CARAT_RANGE_MIN  = 1.0
const CARAT_RANGE_MAX  = 2.5
const CARAT_SCALE_MIN  = 0.88
const CARAT_SCALE_MAX  = 1.12

function compressCarat(rawCarat) {
  const t = (rawCarat - CARAT_RANGE_MIN) / (CARAT_RANGE_MAX - CARAT_RANGE_MIN)
  return CARAT_SCALE_MIN + t * (CARAT_SCALE_MAX - CARAT_SCALE_MIN)
}

function toVisualCarat(rawCarat) {
  return compressCarat(rawCarat) * 1.5
}

// ─── Auto-derive side stone carat from center carat (Three Stone) ─────────────
// Mapping:
//   center <= 1.0  → side = 0.2
//   center  = 1.5  → side = 0.5
//   center  = 2.0  → side = 1.0
//   center  = 2.5  → side = 1.5
function autoSideCarat(centerCarat) {
  if (centerCarat <= 1.0) return 0.2
  if (centerCarat < 1.5)  return 0.2 + (centerCarat - 1.0) / 0.5 * (0.5 - 0.2)
  if (centerCarat < 2.0)  return 0.5 + (centerCarat - 1.5) / 0.5 * (1.0 - 0.5)
  if (centerCarat < 2.5)  return 1.0 + (centerCarat - 2.0) / 0.5 * (1.5 - 1.0)
  return 1.5
}

// ─── Transform tables ─────────────────────────────────────────────────────────

const TWO_OFFSET_LEFT = {
  0.5: { x:  -0.01, y:  0.02, z:  0.01  },
  1.0: { x:  -0.00, y:  0.01, z: 0.02 },
  1.5: { x:  0.00, y:  0.00, z:  0.00 },
  2.0: { x:  0.00, y:  0.00, z:  0.00 },
  2.5: { x:  0.00, y:  0.00, z:  0.00 },
}

const TWO_ROTATION_LEFT = {
  0.5: { rx: 0.12   },
  1.0: { rx:  0.15 },
  1.5: { rx:  0.00 },
  2.0: { rx:  0.00 },
  2.5: { rx:  0.00 },
}

const TWO_OFFSET_RIGHT = {
  0.5: {x: 0.01, y:  -0.03, z:-0.04 },
  1.0: { x: -0.00, y:  0.00, z:  0.07 },
  1.5: { x:  0.00, y:  0.00, z:  0.00 },
  2.0: { x:  0.00, y:  0.00, z:  0.00 },
  2.5: { x:  0.00, y:  0.00, z:  0.00 },
}

const TWO_ROTATION_RIGHT = {
  0.5: { rx: -0.13},
  1.0: { rx: -0.18 },
  1.5: { rx:  0.00 },
  2.0: { rx:  0.00 },
  2.5: { rx:  0.00 },
}

const TWO_CENTER_EXTRA_GAP = {
  0.5: { gapX: 0.00 },
  1.0: { gapX: 0.00 },
  1.5: { gapX: 0.00 },
  2.0: { gapX: 0.00 },
  2.5: { gapX: 0.00 },
}

// ─── FIX: THREE tables now keyed by SIDE carat (max 1.5, matching autoSideCarat output)
// Dead keys 2.0 and 2.5 removed — side carat never exceeds 1.5

const THREE_OFFSET_LEFT = {
  0.2: { x:  0.00, y:  0.16, z:  -0.59 },
  0.5: { x:  0.00, y:  0.14, z:  -0.49 },
  1.0: { x:  0.00, y:  0.09, z:  -0.46 },
  1.5: { x:  0.00, y:  -0.03, z:  0.19 },
}

const THREE_ROTATION_LEFT = {
  0.2: { rx:  0.47 },
  0.5: { rx:  0.47 },
  1.0: { rx:  0.47 },
  1.5: {rx:  -0.41 },
}

const THREE_OFFSET_RIGHT = {
  0.2: { x:  0.00, y:  -0.07, z:  -0.02 },
  0.5: { x:  0.00, y:  0.09,  z:   0.37 },
  1.0: { x:  0.00, y:  0.06,  z:   0.34 },
  1.5: { x:  0.00, y:  0.22, z: -0.67 },
}

const THREE_ROTATION_RIGHT = {
  0.2: { rx: -0.29 },
  0.5: { rx: -0.46 },
  1.0: { rx: -0.46 },
  1.5: { rx:  0.59 },
}

const THREE_CENTER_EXTRA_GAP = {
  0.2: { gapX: 0.00 },
  0.5: { gapX: 0.00 },
  1.0: { gapX: 0.00 },
  1.5: { gapX: 0.00 },
}

// ─── Interpolation helper ─────────────────────────────────────────────────────

function interpolateStone(table, caratSize) {
  const keys = Object.keys(table).map(Number).sort((a, b) => a - b)
  if (table[caratSize] !== undefined) return table[caratSize]
  if (caratSize <= keys[0])               return table[keys[0]]
  if (caratSize >= keys[keys.length - 1]) return table[keys[keys.length - 1]]
  let lo = keys[0], hi = keys[keys.length - 1]
  for (let i = 0; i < keys.length - 1; i++) {
    if (caratSize >= keys[i] && caratSize <= keys[i + 1]) {
      lo = keys[i]; hi = keys[i + 1]; break
    }
  }
  const t = (caratSize - lo) / (hi - lo)
  const a = table[lo], b = table[hi]
  const result = {}
  Object.keys(a).forEach(k => { result[k] = a[k] + (b[k] - a[k]) * t })
  return result
}

function getStoneTransform(layout, side, ownCarat, centerCarat = 0) {
  const isTwo = layout === 'two'

  const offsetTable = isTwo
    ? (side === 'left' ? TWO_OFFSET_LEFT    : TWO_OFFSET_RIGHT)
    : (side === 'left' ? THREE_OFFSET_LEFT  : THREE_OFFSET_RIGHT)

  const rotationTable = isTwo
    ? (side === 'left' ? TWO_ROTATION_LEFT   : TWO_ROTATION_RIGHT)
    : (side === 'left' ? THREE_ROTATION_LEFT : THREE_ROTATION_RIGHT)

  const gapTable = isTwo ? TWO_CENTER_EXTRA_GAP : THREE_CENTER_EXTRA_GAP

  const offset   = interpolateStone(offsetTable,   ownCarat)
  const rotation = interpolateStone(rotationTable, ownCarat)
  // ─── FIX: THREE gap table is now keyed by side carat too, pass ownCarat
  const gap      = isTwo
    ? interpolateStone(gapTable, centerCarat)
    : interpolateStone(gapTable, ownCarat)

  const gapX = side === 'left' ? -gap.gapX : gap.gapX

  return {
    x:  offset.x + gapX,
    y:  offset.y,
    z:  offset.z,
    rx: rotation.rx,
    ry: 0,
    rz: 0,
  }
}

// ─── Materials ────────────────────────────────────────────────────────────────

function TransitionMaterial({
  transitionColor    = '#f2f3f7',
  metalness          = 1,
  roughness          = 0.16,
  clearcoat          = 0.9,
  clearcoatRoughness = 0.1,
  ...rest
}) {
  return (
    <meshPhysicalMaterial
      color={transitionColor}
      metalness={metalness}
      roughness={roughness}
      clearcoat={clearcoat}
      clearcoatRoughness={clearcoatRoughness}
      {...rest}
    />
  )
}

function RefractionMaterial({ envMap, color = '#ffffff' }) {
  if (!envMap) return <meshStandardMaterial color={color} transparent opacity={0} />
  return (
    <MeshRefractionMaterial
      envMap={envMap}
      color={color}
      bounces={3}
      ior={2.4}
      aberrationStrength={0.01}
      fresnel={1}
      fastChroma={false}
      resolution={256}
      toneMapped={false}
      thickness={5}
    />
  )
}

// ─── DiamondByType ────────────────────────────────────────────────────────────

function DiamondByType({
  diamondType,
  nodes,
  materials,
  metalProps,
  basket,
  tipVisible,
  TransitionMaterial: TM,
  RefractionMaterial: RM,
  prongCount,
  prongTips,
  orientationZ     = 0,
  caratSize        = 1.5,
  envMap,
  xOffset          = 0,
  offsetOverride   = null,
  rotationOverride = null,
}) {
  const commonProps = {
    orientationZ, nodes, materials, prongCount, prongTips, basket,
    tipVisible, TransitionMaterial: TM, RefractionMaterial: RM,
    metalProps, caratSize, envMap,
  }

  const inner = (() => {
    switch (diamondType) {
      case 'EmeraldDiamond':          return <Emerald       {...commonProps} />
      case 'AsscherDiamond':          return <Asscher       {...commonProps} />
      case 'MarquiseDiamond':         return <Marqusie      {...commonProps} />
      case 'RoundDiamond':            return <Round         {...commonProps} />
      case 'CushionElongatedDiamond': return <CusihonElong  {...commonProps} />
      case 'CushionDiamond':          return <CushionSquare {...commonProps} />
      case 'OvalDiamond':             return <Oval          {...commonProps} />
      case 'PearDiamond':             return <Pear          {...commonProps} />
      case 'PrincessDiamond':         return <Princess      {...commonProps} />
      case 'RadiantDiamond':          return <RadiantSquare {...commonProps} />
      case 'RadiantElongatedDiamond': return <RadiantElong  {...commonProps} />
      default:                        return null
    }
  })()

  if (!inner) return null

  if (offsetOverride || rotationOverride) {
    const pos = [
      (offsetOverride?.x ?? 0) + xOffset,
       offsetOverride?.y ?? 0,
       offsetOverride?.z ?? 0,
    ]
    const rot = [
      rotationOverride?.rx ?? 0,
      rotationOverride?.ry ?? 0,
      rotationOverride?.rz ?? 0,
    ]
    return <group position={pos} rotation={rot}>{inner}</group>
  }

  return <group position={[xOffset, 0, 0]}>{inner}</group>
}

// ─── Leva panels ──────────────────────────────────────────────────────────────

function TwoStoneLevaPanel({ caratSize, rightCaratSize, onUpdate }) {
  const leftSeed  = getStoneTransform('two', 'left',  caratSize,      caratSize)
  const rightSeed = getStoneTransform('two', 'right', rightCaratSize, caratSize)

  const {
    ts_left_x,  ts_left_y,  ts_left_z,  ts_left_rx,
    ts_right_x, ts_right_y, ts_right_z, ts_right_rx,
    ts_gap_x,
  } = useControls('Two Stone Debug', {
    [`Left  (caratSize ${caratSize})`]: folder({
      ts_left_x:  { value: leftSeed.x,  min: -2, max: 2, step: 0.001 },
      ts_left_y:  { value: leftSeed.y,  min: -2, max: 2, step: 0.001 },
      ts_left_z:  { value: leftSeed.z,  min: -2, max: 2, step: 0.001 },
      ts_left_rx: { value: leftSeed.rx, min: -Math.PI, max: Math.PI, step: 0.001 },
    }),
    [`Right (rightCaratSize ${rightCaratSize})`]: folder({
      ts_right_x:  { value: rightSeed.x,  min: -2, max: 2, step: 0.001 },
      ts_right_y:  { value: rightSeed.y,  min: -2, max: 2, step: 0.001 },
      ts_right_z:  { value: rightSeed.z,  min: -2, max: 2, step: 0.001 },
      ts_right_rx: { value: rightSeed.rx, min: -Math.PI, max: Math.PI, step: 0.001 },
    }),
    'Gap (center size drives spacing)': folder({
      ts_gap_x: {
        value: interpolateStone(TWO_CENTER_EXTRA_GAP, caratSize).gapX,
        min: 0, max: 2, step: 0.001,
        label: `gapX (center ${caratSize}ct)`,
      },
    }),
  })

  useEffect(() => {
    const left  = { x: ts_left_x  - ts_gap_x, y: ts_left_y,  z: ts_left_z,  rx: ts_left_rx,  ry: 0, rz: 0 }
    const right = { x: ts_right_x + ts_gap_x, y: ts_right_y, z: ts_right_z, rx: ts_right_rx, ry: 0, rz: 0 }
    onUpdate({ left, right })
    console.log(
      `[TWO STONE | caratSize=${caratSize} rightCaratSize=${rightCaratSize}]\n` +
      `  TWO_OFFSET_LEFT[${caratSize}]        = { x: ${ts_left_x.toFixed(4)}, y: ${ts_left_y.toFixed(4)}, z: ${ts_left_z.toFixed(4)} }\n` +
      `  TWO_ROTATION_LEFT[${caratSize}]      = { rx: ${ts_left_rx.toFixed(4)} }\n` +
      `  TWO_OFFSET_RIGHT[${rightCaratSize}]  = { x: ${ts_right_x.toFixed(4)}, y: ${ts_right_y.toFixed(4)}, z: ${ts_right_z.toFixed(4)} }\n` +
      `  TWO_ROTATION_RIGHT[${rightCaratSize}]= { rx: ${ts_right_rx.toFixed(4)} }\n` +
      `  TWO_CENTER_EXTRA_GAP[${caratSize}]   = { gapX: ${ts_gap_x.toFixed(4)} }`
    )
  }, [ts_left_x, ts_left_y, ts_left_z, ts_left_rx,
      ts_right_x, ts_right_y, ts_right_z, ts_right_rx,
      ts_gap_x])

  return null
}

function ThreeStoneLevaPanel({ caratSize, sideCaratSize, onUpdate }) {
  const leftSeed  = getStoneTransform('three', 'left',  sideCaratSize, caratSize)
  const rightSeed = getStoneTransform('three', 'right', sideCaratSize, caratSize)

  const {
    th_left_x,  th_left_y,  th_left_z,  th_left_rx,
    th_right_x, th_right_y, th_right_z, th_right_rx,
    th_gap_x,
  } = useControls('Three Stone Debug', {
    [`Left side  (sideCaratSize ${sideCaratSize.toFixed(3)})`]: folder({
      th_left_x:  { value: leftSeed.x,  min: -2, max: 2, step: 0.001 },
      th_left_y:  { value: leftSeed.y,  min: -2, max: 2, step: 0.001 },
      th_left_z:  { value: leftSeed.z,  min: -2, max: 2, step: 0.001 },
      th_left_rx: { value: leftSeed.rx, min: -Math.PI, max: Math.PI, step: 0.001 },
    }),
    [`Right side (sideCaratSize ${sideCaratSize.toFixed(3)})`]: folder({
      th_right_x:  { value: rightSeed.x,  min: -2, max: 2, step: 0.001 },
      th_right_y:  { value: rightSeed.y,  min: -2, max: 2, step: 0.001 },
      th_right_z:  { value: rightSeed.z,  min: -2, max: 2, step: 0.001 },
      th_right_rx: { value: rightSeed.rx, min: -Math.PI, max: Math.PI, step: 0.001 },
    }),
    'Gap (side carat drives spacing)': folder({
      th_gap_x: {
        value: interpolateStone(THREE_CENTER_EXTRA_GAP, sideCaratSize).gapX,
        min: 0, max: 2, step: 0.001,
        label: `gapX (side ${sideCaratSize.toFixed(3)}ct)`,
      },
    }),
  })

  useEffect(() => {
    const left  = { x: th_left_x  - th_gap_x, y: th_left_y,  z: th_left_z,  rx: th_left_rx,  ry: 0, rz: 0 }
    const right = { x: th_right_x + th_gap_x, y: th_right_y, z: th_right_z, rx: th_right_rx, ry: 0, rz: 0 }
    onUpdate({ left, right })
    console.log(
      `[THREE STONE | center=${caratSize} sideCaratSize=${sideCaratSize.toFixed(3)}]\n` +
      `  THREE_OFFSET_LEFT[${sideCaratSize.toFixed(3)}]    = { x: ${th_left_x.toFixed(4)}, y: ${th_left_y.toFixed(4)}, z: ${th_left_z.toFixed(4)} }\n` +
      `  THREE_ROTATION_LEFT[${sideCaratSize.toFixed(3)}]  = { rx: ${th_left_rx.toFixed(4)} }\n` +
      `  THREE_OFFSET_RIGHT[${sideCaratSize.toFixed(3)}]   = { x: ${th_right_x.toFixed(4)}, y: ${th_right_y.toFixed(4)}, z: ${th_right_z.toFixed(4)} }\n` +
      `  THREE_ROTATION_RIGHT[${sideCaratSize.toFixed(3)}] = { rx: ${th_right_rx.toFixed(4)} }\n` +
      `  THREE_CENTER_EXTRA_GAP[${sideCaratSize.toFixed(3)}] = { gapX: ${th_gap_x.toFixed(4)} }`
    )
  }, [th_left_x, th_left_y, th_left_z, th_left_rx,
      th_right_x, th_right_y, th_right_z, th_right_rx,
      th_gap_x])

  return null
}

// ─── Spacing constants ────────────────────────────────────────────────────────

const THREE_CENTER_OFFSET = 0

// ─── BaseRing ─────────────────────────────────────────────────────────────────

export function BaseRing({
  bandShape     = 'square',
  bandComfort: bandComfortProp,
  bandFit,
  metalColor    = '#f2f3f7',
  ringSize      = 3,
  caratSize     = 1.5,
  bandWidth     = 4,
  diamondType   = 'AsscherDiamond',
  prongCount    = 'Classic',
  prongTips     = 'Rounded',
  surpriseStone = 'None',
  orientation   = 'Classic',
  basket        = 'None',
  stoneCount       = 'OneStone',
  rightDiamondType = 'RoundDiamond',
  sideDiamondType  = 'RoundDiamond',
  rightCaratSize   = 1.2,
  sideCaratSize    = 1.0,  // only used when stoneCount !== 'ThreeStone'
  ...props
}) {
  const bandComfort = bandComfortProp ?? bandFit ?? 'standard'

  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Ring Update REV6.glb')
  const { actions } = useAnimations(animations, group)
  const { scene }   = useThree()
  const [envMap, setEnvMap] = useState(scene.environment)

  useEffect(() => {
    if (scene.environment) { setEnvMap(scene.environment); return }
    const interval = setInterval(() => {
      if (scene.environment) { setEnvMap(scene.environment); clearInterval(interval) }
    }, 100)
    return () => clearInterval(interval)
  }, [scene])

  const isTwoStone   = stoneCount === 'TwoStone'
  const isThreeStone = stoneCount === 'ThreeStone'

  // ─── FIX: effectiveSideCarat is always autoSideCarat for ThreeStone,
  // otherwise use the prop. This value drives table lookups and panel keys.
  const effectiveSideCarat = isThreeStone ? autoSideCarat(caratSize) : sideCaratSize

  const orientationZ =
    orientation === 'EastWest' ? Math.PI / 2 :
    orientation === 'Kite'     ? Math.PI / 4.2 : 0

  const bwRatio = bandWidth / BW_DEFAULT

  const metalProps = {
    transitionColor: metalColor,
    metalness: 1, roughness: 0.16, clearcoat: 0.9, clearcoatRoughness: 0.1,
  }

  const RefractionMat = ({ color = '#ffffff' }) => (
    <RefractionMaterial envMap={envMap} color={color} />
  )

  // ── Prong / tip helpers ────────────────────────────────────────────────────

  const isProng3         = prongCount === 'Prong3'
  const isProng5         = prongCount === 'Prong5'
  const isProng          = prongCount.startsWith('Prong')
  const isCompass        = prongCount === 'Compass4'
  const isClassic        = prongCount === 'Classic'
  const isCompassOrProng = isCompass || isProng

  const showTab        = prongTips === 'Tab'
  const showRounded    = prongTips === 'Rounded'
  const showClaw       = prongTips === 'Claw'
  const showPetiteClaw = prongTips === 'PetiteClaw'

  const tipVisible = (name) => {
    const n = name.toLowerCase()
    const isPetiteClaw = n.includes('petiteclaw') || (n.includes('petite') && n.includes('claw'))
    const isClaw       = n.includes('claw') && !isPetiteClaw
    const isTabTip     = n.includes('tab')
    const isRoundedTip = !isPetiteClaw && !isClaw && !isTabTip && n.includes('round') && n.includes('tip')
    if (isTabTip     && !showTab)        return false
    if (isPetiteClaw && !showPetiteClaw) return false
    if (isClaw       && !showClaw)       return false
    if (isRoundedTip && !showRounded)    return false
    if (n.includes('compassprong')) return isCompassOrProng
    if (n.includes('extra')) {
      if (isProng3) return false
      if (isProng5) return true
      return isProng
    }
    if (n.includes('prong'))   return isProng
    if (n.includes('compass')) return isCompass
    if (n.includes('classic')) return isClassic
    return true
  }

  const TipMesh = ({ name, ...meshProps }) => {
    if (!tipVisible(name)) return null
    const node = nodes[name]
    if (!node) return null
    return (
      <mesh name={name} castShadow receiveShadow
        geometry={node.geometry}
        morphTargetDictionary={node.morphTargetDictionary}
        morphTargetInfluences={node.morphTargetInfluences}
        {...meshProps}
      >
        <TransitionMaterial {...metalProps} />
      </mesh>
    )
  }

  const isComfortBand      = bandComfort === 'comfort'
  const showStandardSquare = bandShape === 'square' && !isComfortBand

  const sharedDiamondProps = {
    nodes, materials, metalProps, basket, tipVisible,
    TransitionMaterial, RefractionMaterial: RefractionMat,
    prongCount, prongTips, envMap,
  }

  const effectiveProng = (isTwoStone || isThreeStone) ? 'Classic' : prongCount

  // ── Compressed visual carat sizes ─────────────────────────────────────────
  const visualCarat      = toVisualCarat(caratSize)
  const visualRightCarat = toVisualCarat(rightCaratSize)
  const visualSideCarat  = toVisualCarat(effectiveSideCarat)

  // ── Live transform state ───────────────────────────────────────────────────

  const [twoStoneTransforms, setTwoStoneTransforms] = useState(() => ({
    left:  getStoneTransform('two', 'left',  caratSize,           caratSize),
    right: getStoneTransform('two', 'right', rightCaratSize,      caratSize),
  }))

  const [threeStoneTransforms, setThreeStoneTransforms] = useState(() => ({
    left:  getStoneTransform('three', 'left',  effectiveSideCarat, caratSize),
    right: getStoneTransform('three', 'right', effectiveSideCarat, caratSize),
  }))

  // ─── FIX: Re-sync transforms whenever carat sizes change so the 3D scene
  // updates immediately, independent of whether Leva has remounted yet.
  useEffect(() => {
    if (!isTwoStone) return
    setTwoStoneTransforms({
      left:  getStoneTransform('two', 'left',  caratSize,      caratSize),
      right: getStoneTransform('two', 'right', rightCaratSize, caratSize),
    })
  }, [caratSize, rightCaratSize, isTwoStone])

  useEffect(() => {
    if (!isThreeStone) return
    setThreeStoneTransforms({
      left:  getStoneTransform('three', 'left',  effectiveSideCarat, caratSize),
      right: getStoneTransform('three', 'right', effectiveSideCarat, caratSize),
    })
  }, [caratSize, effectiveSideCarat, isThreeStone])

  return (
    <group {...props} dispose={null}>

      {/* Leva panels —
          key uses toFixed(3) so any floating-point change in effectiveSideCarat
          forces a full remount and reseeds the Leva sliders correctly.        */}
      {isTwoStone && (
        <TwoStoneLevaPanel
          key={`ts-${caratSize}-${rightCaratSize}`}
          caratSize={caratSize}
          rightCaratSize={rightCaratSize}
          onUpdate={setTwoStoneTransforms}
        />
      )}
      {isThreeStone && (
        <ThreeStoneLevaPanel
          key={`th-${caratSize}-${effectiveSideCarat.toFixed(3)}`}
          caratSize={caratSize}
          sideCaratSize={effectiveSideCarat}
          onUpdate={setThreeStoneTransforms}
        />
      )}

      <group ref={group} scale={ringSize} name="Scene">

        {/* ── Band ── */}
        {showStandardSquare && (
          <mesh
            name="Cylinder002"
            castShadow receiveShadow
            geometry={nodes.Cylinder002.geometry}
            position={[0.134, 1.205, -0.014]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[0.138, 0.055 * bwRatio, 0.138]}
          >
            <TransitionMaterial {...metalProps} />
          </mesh>
        )}

        {/* ══ ONE STONE ══ */}
        {!isTwoStone && !isThreeStone && (
          <DiamondByType
            diamondType={diamondType}
            orientationZ={orientationZ}
            caratSize={visualCarat}
            xOffset={0}
            prongCount={effectiveProng}
            {...sharedDiamondProps}
          />
        )}

        {/* ══ TWO STONE ══ */}
        {isTwoStone && (
          <>
            <DiamondByType
              diamondType={diamondType}
              orientationZ={0}
              caratSize={visualCarat}
              xOffset={0}
              prongCount="Classic"
              offsetOverride={twoStoneTransforms.left}
              rotationOverride={twoStoneTransforms.left}
              {...sharedDiamondProps}
            />
            <DiamondByType
              diamondType={rightDiamondType}
              orientationZ={0}
              caratSize={visualRightCarat}
              xOffset={0}
              prongCount="Classic"
              offsetOverride={twoStoneTransforms.right}
              rotationOverride={twoStoneTransforms.right}
              {...sharedDiamondProps}
            />
          </>
        )}

        {/* ══ THREE STONE ══ */}
        {isThreeStone && (
          <>
            {/* Center stone — no offset, always origin */}
            <DiamondByType
              diamondType={diamondType}
               orientationZ={0}
              caratSize={visualCarat}
              xOffset={THREE_CENTER_OFFSET}
              prongCount="Classic"
              {...sharedDiamondProps}
            />
            {/* Left side stone */}
            <DiamondByType
              diamondType={sideDiamondType}
              orientationZ={0}
              caratSize={visualSideCarat}
              xOffset={0}
              prongCount="Classic"
              offsetOverride={threeStoneTransforms.left}
              rotationOverride={threeStoneTransforms.left}
              {...sharedDiamondProps}
            />
            {/* Right side stone */}
            <DiamondByType
              diamondType={sideDiamondType}
              orientationZ={0}
              caratSize={visualSideCarat}
              xOffset={0}
              prongCount="Classic"
              offsetOverride={threeStoneTransforms.right}
              rotationOverride={threeStoneTransforms.right}
              {...sharedDiamondProps}
            />
          </>
        )}

      </group>
    </group>
  )
}

useGLTF.preload('/Ring Update REV6.glb')