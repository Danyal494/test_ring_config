import React from 'react'

const Princess = ({ nodes, materials, orientationZ, basket, caratSize, tipVisible, TransitionMaterial, metalProps, RefractionMaterial }) => {
  const isNone       = !basket || basket === 'None'
  const isBasket     = basket === 'Basket'
  const isHiddenHalo = basket === 'HiddenHalo'
  const isBezel      = basket === 'Bezel'
  const isHalo       = basket === 'Halo'

  const showCLP  = !isHalo              // None, Basket, HiddenHalo
  const showCT   = isNone || isBasket || isHiddenHalo // None, Basket, HiddenHalo
  const showSB   = isBasket || isHiddenHalo           // Basket, HiddenHalo
  const showHHD  = isHiddenHalo                       // HiddenHalo only
  const showHalo = isHalo                             // Halo only (PHB + PHD + PHCLP + PHCT)

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
              name="Princess_Final_1Carat001"
              castShadow
              receiveShadow
              geometry={nodes.Princess_Final_1Carat001.geometry}
              position={[0.122, showHalo ? 2.656 :2.522, 0.002]}
              scale={16.212}
            >
              <RefractionMaterial />
            </mesh>

            {/* None, Basket, HiddenHalo */}
            {showCT && (
              <mesh
                name="PCT"
                castShadow
                receiveShadow
                geometry={nodes.PCT.geometry}
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
                name="PCLP"
                castShadow
                receiveShadow
                geometry={nodes.PCLP.geometry}
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
                name="PSB"
                castShadow
                receiveShadow
                geometry={nodes.PSB.geometry}
                position={[0.122, 2.667, -0.304]}
                rotation={[2.413, -0.964, -3.139]}
                scale={[0.105, 0.128, 0.128]}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* HiddenHalo only */}
            {showHHD && (
              <group
                name="PHHD"
                position={[0.29, 2.674, 0.319]}
                rotation={[-0.979, 0.006, -3.132]}
                scale={10.513}
              >
                <mesh
                  name="Diamondmesh434181"
                  castShadow
                  receiveShadow
                  geometry={nodes.Diamondmesh434181.geometry}
                >
                  <RefractionMaterial />
                </mesh>
                <mesh
                  name="Diamondmesh434181_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Diamondmesh434181_1.geometry}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>
              </group>
            )}

            {/* Bezel only */}
            {isBezel && (
              <mesh
                name="PBB"
                castShadow
                receiveShadow
                geometry={nodes.PBB.geometry}
                position={[0.128, 2.916, 0.02]}
                scale={[0.524, 0.092, 0.524]}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* Halo only */}
            {showHalo && (
              <>
                <mesh
                  name="PHB"
                  castShadow
                  receiveShadow
                  geometry={nodes.PHB.geometry}
                  position={[0.138, 2.818, -0.014]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                  scale={[-0.529, -0.053, -0.529]}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>

                <group
                  name="PHD"
                  position={[0.668, 2.869, 0.346]}
                  rotation={[-1.556, 1.201, 1.561]}
                  scale={14.386}
                >
                  <mesh
                    name="Diamondmesh434260"
                    castShadow
                    receiveShadow
                    geometry={nodes.Diamondmesh434260.geometry}
                  >
                    <RefractionMaterial />
                  </mesh>
                  <mesh
                    name="Diamondmesh434260_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Diamondmesh434260_1.geometry}
                  >
                    <TransitionMaterial {...metalProps} />
                  </mesh>
                </group>

                <mesh
                  name="PHCLP"
                  castShadow
                  receiveShadow
                  geometry={nodes.PHCLP.geometry}
                  position={[0.137, 2.586, -0.103]}
                  rotation={[-Math.PI, 0.254, Math.PI / 2]}
                  scale={0.146}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>

                <mesh
                  name="PHCT"
                  castShadow
                  receiveShadow
                  geometry={nodes.PHCT.geometry}
                  position={[0.569, 3.126, 0.424]}
                  rotation={[-1.087, -0.276, -3.031]}
                  scale={12.626}
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

export default Princess