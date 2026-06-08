import React from 'react'

const Round = ({ nodes, materials, orientationZ, basket, tipVisible, caratSize, TransitionMaterial, metalProps, RefractionMaterial }) => {
  const isNone       = !basket || basket === 'None'
  const isBasket     = basket === 'Basket'
  const isHiddenHalo = basket === 'HiddenHalo'
  const isBezel      = basket === 'Bezel'
  const isHalo       = basket === 'Halo'

  const showCLP  = !isHalo             // None, Basket, HiddenHalo
  const showCT   = isNone || isBasket || isHiddenHalo // None, Basket, HiddenHalo
  const showSB   = isBasket || isHiddenHalo           // Basket, HiddenHalo
  const showHHD  = isHiddenHalo                       // HiddenHalo only
  const showHalo = isHalo                             // Halo only (RHB + RHCLP + RHD + RHCT)

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
        <group rotation={[0, 0, 0]} position={[cx, cy, cz]}>
          <group position={[-cx, -cy, -cz]}>

            {/* Always visible */}
            <mesh
              name="Round_Final_1Carat"
              castShadow
              receiveShadow
              geometry={nodes.Round_Final_1Carat.geometry}
              position={[0.119,showHalo ? 2.656 : 2.48, 0.017]}
              scale={17.423}
            >
              <RefractionMaterial />
            </mesh>

            {/* None, Basket, HiddenHalo */}
            {showCT && (
              <mesh
                name="RCT"
                castShadow
                receiveShadow
                geometry={nodes.RCT.geometry}
                position={[0.569, 2.986, 0.458]}
                rotation={[-1.059, -0.215, -2.916]}
                scale={12.631}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* None, Basket, HiddenHalo */}
            {showCLP && (
              <mesh
                name="RCLP"
                castShadow
                receiveShadow
                geometry={nodes.RCLP.geometry}
                position={[0.191, 2.701, 0.109]}
                rotation={[0, 0.244, -Math.PI / 2]}
                scale={0.153}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* Basket, HiddenHalo */}
            {showSB && (
              <mesh
                name="RSB"
                castShadow
                receiveShadow
                geometry={nodes.RSB.geometry}
                position={[-0.14, 2.71, 0.05]}
                rotation={[0.415, -0.343, 0.782]}
                scale={[0.097, 0.119, 0.118]}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* HiddenHalo only */}
            {showHHD && (
              <group
                name="RHHD"
                position={[-0.066, 2.695, 0.371]}
                rotation={[-0.981, -0.042, 3.079]}
                scale={10.114}
              >
                <mesh
                  name="Diamondmesh434331"
                  castShadow
                  receiveShadow
                  geometry={nodes.Diamondmesh434331.geometry}
                >
                  <RefractionMaterial />
                </mesh>
                <mesh
                  name="Diamondmesh434331_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Diamondmesh434331_1.geometry}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>
              </group>
            )}

            {/* Bezel only */}
            {isBezel && (
              <mesh
                name="RBB"
                castShadow
                receiveShadow
                geometry={nodes.RBB.geometry}
                position={[0.128, 2.885, 0.02]}
                scale={0.562}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* Halo only */}
            {showHalo && (
              <>
                <mesh
                  name="RHB"
                  castShadow
                  receiveShadow
                  geometry={nodes.RHB.geometry}
                  material={nodes.RHB.material}
                  position={[0.128, 2.86, 0.02]}
                  scale={[0.533, 0.477, 0.533]}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>

                <mesh
                  name="RHCLP"
                  castShadow
                  receiveShadow
                  geometry={nodes.RHCLP.geometry}
                  position={[0.191, 2.701, 0.109]}
                  rotation={[0, 0.244, -Math.PI / 2]}
                  scale={0.153}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>

                <group
                  name="RHD"
                  position={[0.122, 3.333, 0.512]}
                  rotation={[Math.PI / 2, 1.309, Math.PI / 2]}
                  scale={[11.226, 13.281, 10.355]}
                >
                  <mesh
                    name="Diamondmesh434332"
                    castShadow
                    receiveShadow
                    geometry={nodes.Diamondmesh434332.geometry}
                  >
                    <RefractionMaterial />
                  </mesh>
                  <mesh
                    name="Diamondmesh434332_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Diamondmesh434332_1.geometry}
                  >
                    <TransitionMaterial {...metalProps} />
                  </mesh>
                </group>

                <mesh
                  name="RHCT"
                  castShadow
                  receiveShadow
                  geometry={nodes.RHCT.geometry}
                  position={[0.554, 3.18, 0.449]}
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

export default Round