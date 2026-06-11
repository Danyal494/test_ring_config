export function interpolateStone(table, caratSize) {
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

const CARAT_REFERENCE = 3
export const TWO_STONE_GAP = 0.05

const SETTING_HALF_DEPTH = {
  RoundDiamond:            0.46,
  OvalDiamond:             0.40,
  PrincessDiamond:         0.36,
  EmeraldDiamond:          0.38,
  CushionDiamond:          0.36,
  RadiantDiamond:          0.38,
  PearDiamond:             0.40,
  MarquiseDiamond:         0.34,
  AsscherDiamond:          0.36,
  CushionElongatedDiamond: 0.38,
  RadiantElongatedDiamond: 0.40,
}

// Default rim padding (applies up to ~1.5ct)
const BASKET_PADDING_FIXED = {
  Bezel:      0.22,
  Halo:       0.18,
  HiddenHalo: 0.04,
  Basket:     0.00,
  None:       0.00,
}

// Override rim padding at 2.5ct — tune these values to fix the large bezel overlap
const BASKET_PADDING_FIXED_2_5 = {
  Bezel:      0.38,
  Halo:       0.38,
  HiddenHalo: 0.06,
  Basket:     0.00,
  None:       0.23,
}

// Interpolate basket padding between the two tables based on visualCarat
function getBasketPadding(visualCarat, basket) {
  const lo = BASKET_PADDING_FIXED[basket]     ?? 0
  const hi = BASKET_PADDING_FIXED_2_5[basket] ?? 0
  // Blend from 0.5ct → 2.5ct
  const t = Math.max(0, Math.min(1, (visualCarat - 0.5) / (2.5 - 0.5)))
  return lo + (hi - lo) * t
}

export function stoneHalfWidth(visualCarat, diamondType, basket = 'None') {
  const scale = visualCarat / CARAT_REFERENCE
  const base = SETTING_HALF_DEPTH[diamondType] ?? 0.46
  const prongPadding = 0.08 * scale
  const rimPadding = getBasketPadding(visualCarat, basket)
  return base * scale + prongPadding + rimPadding
}