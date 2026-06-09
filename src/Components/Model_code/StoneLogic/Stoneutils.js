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

// ─── Two-stone spacing (matches diamond render scale: visualCarat / 1.5) ───────

const CARAT_REFERENCE = 3
export const TWO_STONE_GAP = 0.05

// Half-width of full setting (stone + prongs) at 1.5ct visual, per shape
const SETTING_HALF_WIDTH = {
  RoundDiamond:            0.42,
  OvalDiamond:             0.52,
  PrincessDiamond:         0.44,
  EmeraldDiamond:          0.50,
  CushionDiamond:          0.44,
  RadiantDiamond:          0.46,
  PearDiamond:             0.48,
  MarquiseDiamond:         0.54,
  AsscherDiamond:          0.44,
  CushionElongatedDiamond: 0.50,
  RadiantElongatedDiamond: 0.52,
}

/**
 * Half-width along X (side-by-side across the finger on a Toi et Moi ring).
 * Uses visualCarat so spacing matches the rendered mesh scale.
 */
export function stoneHalfWidth(visualCarat, diamondType) {
  const scale = visualCarat / CARAT_REFERENCE
  const base = SETTING_HALF_WIDTH[diamondType] ?? 0.42
  const prongPadding = 0.08 * scale
  return base * scale + prongPadding
}
