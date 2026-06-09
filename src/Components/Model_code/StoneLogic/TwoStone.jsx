import React, { useMemo } from 'react'
import DiamondByType from './DiamondByType'
import { interpolateStone, stoneHalfWidth, TWO_STONE_GAP } from './Stoneutils'

export { stoneHalfWidth, TWO_STONE_GAP }

// Must match RING_TOP_Y inside each SubCode diamond component
const RING_TOP_Y = 2.361

// How much the band drops (Y) as stones spread along Z
const BAND_CURVE_DROP = 0.10

// Toi et Moi tilt — stones lean away from each other (radians)
const TWO_TILT_LEFT = {
  0.5:  -0.28,
  1.0: - 0.36,
  1.5: - 0.30,
  2.0:  -0.27,
  2.5:  -0.24,
}

const TWO_TILT_RIGHT = {
  0.5: 0.34,
  1.0: 0.36,
  1.5: 0.30,
  2.0: 0.27,
  2.5: 0.24,
}

// StoneUtils.js — replace getTwoStoneSlot with this version
export function getTwoStoneSlot({ side, visualCarat, partnerVisualCarat, rawCarat, diamondType, partnerDiamondType, gap = TWO_STONE_GAP }) {
  const myHalf      = stoneHalfWidth(visualCarat, diamondType)
  const partnerHalf = stoneHalfWidth(partnerVisualCarat ?? visualCarat, partnerDiamondType ?? diamondType)

  // Each stone is offset by its OWN half plus gap/2, but anchored from a shared midpoint
  // The shared midpoint is the average of both half-widths
  const sharedCenter = (myHalf + partnerHalf) / 2
  const zSpread = side === 'left'
    ? -(myHalf + gap / 2)
    :  (myHalf + gap / 2)

  const tiltTable = side === 'left' ? TWO_TILT_LEFT : TWO_TILT_RIGHT
  const rx = interpolateStone(tiltTable, rawCarat)
  const pivotY = RING_TOP_Y - Math.abs(zSpread) * BAND_CURVE_DROP

  return { zSpread, pivotY, rx }
}
// ─── Single stone mounted on band with pivot rotation ─────────────────────────

function TwoStoneSlot({
  side,
  diamondType,
  partnerDiamondType,   // ← add
  visualCarat,
  partnerVisualCarat,   // ← add
  rawCarat,
  gap,
  sharedDiamondProps,
}) {
 const { zSpread, pivotY, rx } = useMemo(
    () => getTwoStoneSlot({ side, visualCarat, partnerVisualCarat, rawCarat, diamondType, partnerDiamondType, gap }),
    [side, visualCarat, partnerVisualCarat, rawCarat, diamondType, partnerDiamondType, gap],
  )

  return (
  // 1. Move along band arc (Z)
  // 2. Pivot on band top surface (Y) and tilt outward (rx)
  // 3. Shift diamond so its internal origin aligns with band top at center
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
