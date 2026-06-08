import React from 'react'

const RadiantSquare = ({ nodes, materials, orientationZ, basket, tipVisible, caratSize, TransitionMaterial, metalProps, RefractionMaterial }) => {
  const isNone       = !basket || basket === 'None'
  const isBasket     = basket === 'Basket'
  const isHiddenHalo = basket === 'HiddenHalo'
  const isBezel      = basket === 'Bezel'
  const isHalo       = basket === 'Halo'

  const showCLP  = !isHalo                // None, Basket, HiddenHalo
  const showCT   = isNone || isBasket || isHiddenHalo // None, Basket, HiddenHalo
  const showSB   = isBasket || isHiddenHalo           // Basket, HiddenHalo
  const showHHD  = isHiddenHalo                       // HiddenHalo only
  const showHalo = isHalo                             // Halo only (RAHB + RAHD + RAHCT + RAHCLP)

  const cx = 0.135
  const cy = 2.626
  const cz = -0.01

  const CARAT_DEFAULT = 1.5
  const scale = caratSize / CARAT_DEFAULT

  const RING_TOP_Y = 2.361
  const stoneHalfHeight = cy - RING_TOP_Y
  const newCY = RING_TOP_Y + stoneHalfHeight * scale

  const offsetX = cx * (1 - scale)
  const offsetY = newCY - cy * scale
  const offsetZ = cz * (1 - scale)

  return (
    <group position={[offsetX, offsetY, offsetZ]}>
      <group scale={scale}>
        <group rotation={[0, orientationZ, 0]} position={[cx, cy, cz]}>
          <group position={[-cx, -cy, -cz]}>

            {/* Always visible */}
            <mesh
              name="Radiant_Final_1Carat"
              castShadow
              receiveShadow
              geometry={nodes.Radiant_Final_1Carat.geometry}
              position={[0.125, showHalo ? 2.596 :2.451, 0]}
              scale={17.687}
            >
              <RefractionMaterial />
            </mesh>

            {/* None, Basket, HiddenHalo */}
            {showCT && (
              <mesh
                name="RACT"
                castShadow
                receiveShadow
                geometry={nodes.RACT.geometry}
                position={[-0.307, 2.986, 0.464]}
                rotation={[-1.812, -0.501, 1.687]}
                scale={12.631}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* None, Basket, HiddenHalo */}
            {showCLP && (
              <mesh
                name="RACLP"
                castShadow
                receiveShadow
                geometry={nodes.RACLP.geometry}
                position={[0.039, 2.701, 0.084]}
                rotation={[0, -1.318, -Math.PI / 2]}
                scale={0.153}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* Basket, HiddenHalo */}
            {showSB && (
              <mesh
                name="RASB"
                castShadow
                receiveShadow
                geometry={nodes.RASB.geometry}
             position={[-0.171, 2.71, 0.05]}
        rotation={[0.415, -0.343, 0.782]}
        scale={[0.097, 0.119, 0.118]}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* HiddenHalo only */}
            {showHHD && (
              <group
                name="RAHHD"
                position={[-0.245, 2.7, 0.214]}
                rotation={[-1.563, -0.591, 1.585]}
                scale={12.219}
              >
                <mesh
                  name="Diamondmesh434185"
                  castShadow
                  receiveShadow
                  geometry={nodes.Diamondmesh434185.geometry}
                >
                  <RefractionMaterial />
                </mesh>
                <mesh
                  name="Diamondmesh434185_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Diamondmesh434185_1.geometry}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>
              </group>
            )}

            {/* Bezel only */}
            {isBezel && (
              <mesh
                name="RABB"
                castShadow
                receiveShadow
                geometry={nodes.RABB.geometry}
                position={[0.169, 2.893, -0.122]}
                scale={[0.357, 0.082, 0.357]}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* Halo only */}
            {showHalo && (
              <>
                <mesh
                  name="RAHB"
                  castShadow
                  receiveShadow
                  geometry={nodes.RAHB.geometry}
                  position={[0.138, 2.862, -0.014]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                  scale={[-0.529, -0.053, -0.529]}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>

                <group
                  name="RAHD"
                  position={[0.315, 2.913, 0.506]}
                  rotation={[-2.772, 0.005, -3.138]}
                  scale={14.386}
                >
                  <mesh
                    name="Diamondmesh434261"
                    castShadow
                    receiveShadow
                    geometry={nodes.Diamondmesh434261.geometry}
                  >
                    <RefractionMaterial />
                  </mesh>
                  <mesh
                    name="Diamondmesh434261_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Diamondmesh434261_1.geometry}
                  >
                    <TransitionMaterial {...metalProps} />
                  </mesh>
                </group>

                <mesh
                  name="RAHCT"
                  castShadow
                  receiveShadow
                  geometry={nodes.RAHCT.geometry}
                  position={[0.564, 3.153, 0.421]}
                  rotation={[-1.404, -0.858, 2.542]}
                  scale={16.349}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>

                <mesh
                  name="RAHCLP"
                  castShadow
                  receiveShadow
                  geometry={nodes.RAHCLP.geometry}
                  position={[0.137, 2.586, -0.103]}
                  rotation={[-Math.PI, 0.254, Math.PI / 2]}
                  scale={0.146}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>
              </>
            )}

          </group>
        </group>
      </group>
    </group>
  )
}

export default RadiantSquare