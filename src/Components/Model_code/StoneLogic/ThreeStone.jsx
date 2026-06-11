import React, { useEffect, useState } from 'react'
import { useControls, folder } from 'leva'
import DiamondByType from './DiamondByType'
import { interpolateStone } from './Stoneutils'

// ─── Three Stone transform tables (keyed by SIDE carat, max 1.5) ──────────────

const THREE_OFFSET_LEFT = {
  0.2: { x:  0.00, y:  0.16, z: -0.59 },
  0.5: { x:  0.00, y:  0.14, z: -0.49 },
  1.0: { x:  0.00, y:  0.09, z: -0.46 },
  1.5: { x:  0.00, y:0.14, z: 0.49 },
}

const THREE_ROTATION_LEFT = {
  0.2: { rx:  0.47 },
  0.5: { rx:  0.47 },
  1.0: { rx:  0.47 },
  1.5: { rx: -0.56 },
}

const THREE_OFFSET_RIGHT = {
  0.2: { x:  0.00, y: 0.11, z: 0.45 },
  0.5: { x:  0.00, y:  0.09, z:  0.37 },
  1.0: { x:  0.00, y:  0.06, z:  0.34 },
  1.5: { x:  0.00, y:  0.12, z:-0.56 },
}

const THREE_ROTATION_RIGHT = {
  0.2: { rx: -0.44 },
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

const THREE_CENTER_OFFSET = 0

// ─── Transform helper ─────────────────────────────────────────────────────────

export function getThreeStoneTransform(side, sideCarat) {
  const offsetTable   = side === 'left' ? THREE_OFFSET_LEFT    : THREE_OFFSET_RIGHT
  const rotationTable = side === 'left' ? THREE_ROTATION_LEFT  : THREE_ROTATION_RIGHT

  const offset   = interpolateStone(offsetTable,          sideCarat)
  const rotation = interpolateStone(rotationTable,        sideCarat)
  const gap      = interpolateStone(THREE_CENTER_EXTRA_GAP, sideCarat)

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

// ─── Leva debug panel ─────────────────────────────────────────────────────────

function ThreeStoneLevaPanel({ caratSize, sideCaratSize, onUpdate }) {
  const leftSeed  = getThreeStoneTransform('left',  sideCaratSize)
  const rightSeed = getThreeStoneTransform('right', sideCaratSize)

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
      `  THREE_OFFSET_LEFT[${sideCaratSize.toFixed(3)}]     = { x: ${th_left_x.toFixed(4)}, y: ${th_left_y.toFixed(4)}, z: ${th_left_z.toFixed(4)} }\n` +
      `  THREE_ROTATION_LEFT[${sideCaratSize.toFixed(3)}]   = { rx: ${th_left_rx.toFixed(4)} }\n` +
      `  THREE_OFFSET_RIGHT[${sideCaratSize.toFixed(3)}]    = { x: ${th_right_x.toFixed(4)}, y: ${th_right_y.toFixed(4)}, z: ${th_right_z.toFixed(4)} }\n` +
      `  THREE_ROTATION_RIGHT[${sideCaratSize.toFixed(3)}]  = { rx: ${th_right_rx.toFixed(4)} }\n` +
      `  THREE_CENTER_EXTRA_GAP[${sideCaratSize.toFixed(3)}] = { gapX: ${th_gap_x.toFixed(4)} }`
    )
  }, [th_left_x, th_left_y, th_left_z, th_left_rx,
      th_right_x, th_right_y, th_right_z, th_right_rx,
      th_gap_x])

  return null
}

// ─── ThreeStone component ─────────────────────────────────────────────────────

export default function ThreeStone({
  diamondType,
  sideDiamondType,
  caratSize,
  visualCarat,
  visualSideCarat,
  effectiveSideCarat,
  sharedDiamondProps,
}) {
  const [transforms, setTransforms] = useState(() => ({
    left:  getThreeStoneTransform('left',  effectiveSideCarat),
    right: getThreeStoneTransform('right', effectiveSideCarat),
  }))

  useEffect(() => {
    setTransforms({
      left:  getThreeStoneTransform('left',  effectiveSideCarat),
      right: getThreeStoneTransform('right', effectiveSideCarat),
    })
  }, [effectiveSideCarat])

  return (
    <>
   
      {/* <ThreeStoneLevaPanel
        key={`th-${caratSize}-${effectiveSideCarat.toFixed(3)}`}
        caratSize={caratSize}
        sideCaratSize={effectiveSideCarat}
        onUpdate={setTransforms}
      /> */}

  
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
        offsetOverride={transforms.left}
        rotationOverride={transforms.left}
        {...sharedDiamondProps}
      />

      {/* Right side stone */}
      <DiamondByType
        diamondType={sideDiamondType}
        orientationZ={0}
        caratSize={visualSideCarat}
        xOffset={0}
        prongCount="Classic"
        offsetOverride={transforms.right}
        rotationOverride={transforms.right}
        {...sharedDiamondProps}
      />
    </>
  )
}