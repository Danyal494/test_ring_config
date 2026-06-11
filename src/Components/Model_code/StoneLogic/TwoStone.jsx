// TwoStone.jsx

import React, { useMemo } from 'react'
import DiamondByType from './DiamondByType'
import { interpolateStone, stoneHalfWidth, TWO_STONE_GAP } from './Stoneutils'

export { stoneHalfWidth, TWO_STONE_GAP }

const RING_TOP_Y = 2.55
const BAND_CURVE_DROP = 0.22

const TWO_TILT_LEFT = {
  0.5:  -0.28,
  1.0:  -0.36,
  1.5:  -0.30,
  2.0:  -0.27,
  2.5:  -0.24,
}

const TWO_TILT_RIGHT = {
  0.5:  0.34,
  1.0:  0.36,
  1.5:  0.30,
  2.0:  0.27,
  2.5:  0.34,
}

export function getTwoStoneSlot({
  side, visualCarat, partnerVisualCarat, rawCarat,
  diamondType, partnerDiamondType,
  gap = TWO_STONE_GAP,
  basket = 'None',
}) {
  const myHalf      = stoneHalfWidth(visualCarat,                       diamondType,                       basket)
  const partnerHalf = stoneHalfWidth(partnerVisualCarat ?? visualCarat, partnerDiamondType ?? diamondType, basket)

  // Always spread both stones symmetrically from center using the larger of the two.
  // This prevents the small stone from being placed too close to center
  // when paired with a much larger stone.
  const outerHalf = Math.max(myHalf, partnerHalf)

  const zSpread = side === 'left'
    ? -(outerHalf + gap / 2)
    :  (outerHalf + gap / 2)

  const tiltTable = side === 'left' ? TWO_TILT_LEFT : TWO_TILT_RIGHT
  const rx = interpolateStone(tiltTable, rawCarat)
  const pivotY = RING_TOP_Y - Math.abs(zSpread) * BAND_CURVE_DROP

  return { zSpread, pivotY, rx }
}

// ─── Single stone slot ────────────────────────────────────────────────────────

function TwoStoneSlot({
  side, diamondType, partnerDiamondType,
  visualCarat, partnerVisualCarat, rawCarat, gap,
  sharedDiamondProps,
}) {
  const basket = sharedDiamondProps.basket ?? 'None'

  const { zSpread, pivotY, rx } = useMemo(
    () => getTwoStoneSlot({
      side, visualCarat, partnerVisualCarat, rawCarat,
      diamondType, partnerDiamondType, gap,
      basket,
    }),
    [side, visualCarat, partnerVisualCarat, rawCarat, diamondType, partnerDiamondType, gap, basket],
  )

  return (
    <group position={[0, pivotY, zSpread]} rotation={[rx, 0, 0]}>
      <group position={[0, -RING_TOP_Y, 0]}>
        <DiamondByType
          key={`two-${side}-${diamondType}-${visualCarat}`}
          diamondType={diamondType}
          orientationZ={0}
          caratSize={visualCarat}
          xOffset={0}
          prongCount="Classic"
          {...sharedDiamondProps}
        />
      </group>
    </group>
  )
}

// ─── TwoStone component ───────────────────────────────────────────────────────

export default function TwoStone({
  diamondType,
  rightDiamondType,
  caratSize,
  visualCarat,
  visualRightCarat,
  rightCaratSize,
  sharedDiamondProps,
}) {
  return (
    <>
      <TwoStoneSlot
        side="left"
        diamondType={diamondType}
        partnerDiamondType={rightDiamondType}
        visualCarat={visualCarat}
        partnerVisualCarat={visualRightCarat}
        rawCarat={caratSize}
        gap={TWO_STONE_GAP}
        sharedDiamondProps={sharedDiamondProps}
      />
      <TwoStoneSlot
        side="right"
        diamondType={rightDiamondType}
        partnerDiamondType={diamondType}
        visualCarat={visualRightCarat}
        partnerVisualCarat={visualCarat}
        rawCarat={rightCaratSize}
        gap={TWO_STONE_GAP}
        sharedDiamondProps={sharedDiamondProps}
      />
    </>
  )
}