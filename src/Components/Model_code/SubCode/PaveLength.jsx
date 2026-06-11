import React from 'react'

const getVisibleGroups = (paveLength) => {
  switch (paveLength) {
    case 'OneThird':      return { start: 1, end: 5,  rStart: 34, rEnd: 38 }
    case 'Half':          return { start: 1, end: 8,  rStart: 31, rEnd: 38 }
    case 'TwoThird':      return { start: 1, end: 12, rStart: 27, rEnd: 38 }
    case 'ThreeQuarters': return { start: 1, end: 13, rStart: 26, rEnd: 38 }
    case 'Eternity':
    default:              return { start: 1, end: 38, rStart: 1,  rEnd: 38 }
  }
}

const isVisible = (num, { start, end, rStart, rEnd }) =>
  (num >= start && num <= end) || (num >= rStart && num <= rEnd)

const getStoneExclusions = (stoneCount) => {
  if (stoneCount === 'ThreeStone') {
    // exclude 1–5 and 34–38
    return new Set([1, 2, 3, 4, 34, 35, 36, 37, 38])
  }
  if (stoneCount === 'TwoStone') {
    // exclude 1–6 and 34–38
    return new Set([1, 2, 3,   36, 37, 38])
  }
  return new Set()
}

const PaveLength = ({
  nodes, materials, paveStyle, paveLength, stoneCount,
  TransitionMaterial, metalProps, RefractionMaterial, showStandardSquare
}) => {
  if (paveStyle !== 'PetiteFrench') return null

  const visibilityRange = getVisibleGroups(paveLength)
  const exclusions      = getStoneExclusions(stoneCount)

  const groupData = [
    { name: 'Eternity001', num: 1,  pos: [0.131, showStandardSquare ? 2.42  : 2.4,    -0.197], meshBase: 'Diamondmesh434001' },
    { name: 'Eternity002', num: 2,  pos: [0.132, showStandardSquare ? 2.38  : 2.354,  -0.384], meshBase: 'Diamondmesh434002' },
    { name: 'Eternity003', num: 3,  pos: [0.133, showStandardSquare ? 2.285 : 2.275,  -0.562], meshBase: 'Diamondmesh434003' },
    { name: 'Eternity004', num: 4,  pos: [0.133, showStandardSquare ? 2.179 : 2.169,  -0.727], meshBase: 'Diamondmesh434004' },
    { name: 'Eternity005', num: 5,  pos: [0.134, showStandardSquare ? 2.049 : 2.039,  -0.875], meshBase: 'Diamondmesh434005' },
    { name: 'Eternity006', num: 6,  pos: [0.135, showStandardSquare ? 1.899 : 1.889,  -1.002], meshBase: 'Diamondmesh434006' },
    { name: 'Eternity007', num: 7,  pos: [0.136, showStandardSquare ? 1.732 : 1.722,  -1.106], meshBase: 'Diamondmesh434007' },
    { name: 'Eternity008', num: 8,  pos: [0.136, showStandardSquare ? 1.552 : 1.542,  -1.18 ], meshBase: 'Diamondmesh434008' },
    { name: 'Eternity009', num: 9,  pos: [0.136, showStandardSquare ? 1.365 : 1.354,  -1.225], meshBase: 'Diamondmesh434009' },
    { name: 'Eternity010', num: 10, pos: [0.136, showStandardSquare ? 1.122 : 1.161,  -1.238], meshBase: 'Diamondmesh434010' },
    { name: 'Eternity011', num: 11, pos: [0.137, showStandardSquare ? 0.934 : 0.969,  -1.212], meshBase: 'Diamondmesh434012' },
    { name: 'Eternity012', num: 12, pos: [0.137, showStandardSquare ? 0.744 : 0.784,  -1.153], meshBase: 'Diamondmesh434013' },
    { name: 'Eternity013', num: 13, pos: [0.137, showStandardSquare ? 0.60  : 0.61,   -1.067], meshBase: 'Diamondmesh434014' },
    { name: 'Eternity014', num: 14, pos: [0.137, showStandardSquare ? 0.461 : 0.448,  -0.955], meshBase: 'Diamondmesh434015' },
    { name: 'Eternity015', num: 15, pos: [0.138, showStandardSquare ? 0.309 : 0.305,  -0.82 ], meshBase: 'Diamondmesh434016' },
    { name: 'Eternity016', num: 16, pos: [0.139, showStandardSquare ? 0.164 : 0.183,  -0.664], meshBase: 'Diamondmesh434017' },
    { name: 'Eternity017', num: 17, pos: [0.139, showStandardSquare ? 0.078 : 0.089,  -0.493], meshBase: 'Diamondmesh434018' },
    { name: 'Eternity018', num: 18, pos: [0.14,  showStandardSquare ? 0.013 : 0.023,  -0.311], meshBase: 'Diamondmesh434019' },
    { name: 'Eternity019', num: 19, pos: [0.141, showStandardSquare ? -0.018: -0.014, -0.122], meshBase: 'Diamondmesh434020' },
    { name: 'Eternity020', num: 20, pos: [0.141, showStandardSquare ? -0.018: -0.015,  0.087], meshBase: 'Diamondmesh434021' },
    { name: 'Eternity021', num: 21, pos: [0.14,  showStandardSquare ? 0.013 : 0.023,   0.276], meshBase: 'Diamondmesh434022' },
    { name: 'Eternity022', num: 22, pos: [0.139, showStandardSquare ? 0.072 : 0.089,   0.458], meshBase: 'Diamondmesh434023' },
    { name: 'Eternity023', num: 23, pos: [0.139, showStandardSquare ? 0.175 : 0.183,   0.629], meshBase: 'Diamondmesh434024' },
    { name: 'Eternity024', num: 24, pos: [0.138, showStandardSquare ? 0.290 : 0.305,   0.786], meshBase: 'Diamondmesh434025' },
    { name: 'Eternity025', num: 25, pos: [0.137, showStandardSquare ? 0.438 : 0.448,   0.921], meshBase: 'Diamondmesh434026' },
    { name: 'Eternity026', num: 26, pos: [0.137, showStandardSquare ? 0.56  : 0.61,    1.032], meshBase: 'Diamondmesh434027' },
    { name: 'Eternity027', num: 27, pos: [0.137, showStandardSquare ? 0.775 : 0.784,   1.118], meshBase: 'Diamondmesh434028' },
    { name: 'Eternity028', num: 28, pos: [0.137, showStandardSquare ? 0.979 : 0.969,   1.177], meshBase: 'Diamondmesh434029' },
    { name: 'Eternity029', num: 29, pos: [0.136, showStandardSquare ? 1.178 : 1.161,   1.204], meshBase: 'Diamondmesh434030' },
    { name: 'Eternity030', num: 30, pos: [0.136, showStandardSquare ? 1.362 : 1.354,   1.191], meshBase: 'Diamondmesh434032' },
    { name: 'Eternity031', num: 31, pos: [0.136, showStandardSquare ? 1.552 : 1.542,   1.146], meshBase: 'Diamondmesh434036' },
    { name: 'Eternity032', num: 32, pos: [0.136, showStandardSquare ? 1.755 : 1.722,   1.072], meshBase: 'Diamondmesh434038' },
    { name: 'Eternity033', num: 33, pos: [0.135, showStandardSquare ? 1.925 : 1.889,   0.968], meshBase: 'Diamondmesh434040' },
    { name: 'Eternity034', num: 34, pos: [0.134, showStandardSquare ? 2.057 : 2.039,   0.841], meshBase: 'Diamondmesh434041' },
    { name: 'Eternity036', num: 35, pos: [0.133, showStandardSquare ? 2.179 : 2.169,   0.693], meshBase: 'Diamondmesh434043' },
    { name: 'Eternity035', num: 36, pos: [0.133, showStandardSquare ? 2.288 : 2.275,   0.528], meshBase: 'Diamondmesh434044' },
    { name: 'Eternity037', num: 37, pos: [0.132, showStandardSquare ? 2.368 : 2.354,   0.35 ], meshBase: 'Diamondmesh434045' },
    { name: 'Eternity038', num: 38, pos: [0.131, showStandardSquare ? 2.42  : 2.4,     0.163], meshBase: 'Diamondmesh434046' },
  ]

  return (
    <group>
      {groupData
        .filter(({ num }) => isVisible(num, visibilityRange) && !exclusions.has(num))
        .map(({ name, pos, meshBase }) => (
          <group
            key={name}
            name={name}
            position={pos}
            rotation={[1.57, 0.262, -Math.PI / 2]}
            scale={[14.756, 17.456, 13.61]}
          >
            <mesh castShadow receiveShadow geometry={nodes[meshBase].geometry} material={materials['Diamond.007']}>
              <RefractionMaterial />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes[`${meshBase}_1`].geometry} material={materials['Metal.007']}>
              <TransitionMaterial {...metalProps} />
            </mesh>
          </group>
        ))}
    </group>
  )
}

export default PaveLength