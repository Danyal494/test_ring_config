import React from 'react'

const Oval = ({ nodes, materials, orientationZ, basket, caratSize, tipVisible, TransitionMaterial, metalProps, RefractionMaterial }) => {
  const isNone       = !basket || basket === 'None'
  const isBasket     = basket === 'Basket'
  const isHiddenHalo = basket === 'HiddenHalo'
  const isBezel      = basket === 'Bezel'
  const isHalo       = basket === 'Halo'

  const showCLP  = !isHalo                // None, Basket, HiddenHalo
  const showCT   = isNone || isBasket || isHiddenHalo // None, Basket, HiddenHalo
  const showSB   = isBasket || isHiddenHalo           // Basket, HiddenHalo
  const showHHD  = isHiddenHalo                       // HiddenHalo only
  const showHalo = isHalo                             // Halo only (OHB + OHD + OHCLP + OHCT)

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
              name="Oval_Final_1Carat"
              castShadow
              receiveShadow
              geometry={nodes.Oval_Final_1Carat.geometry}
              position={[0.137, 2.524, 0.021]}
              rotation={[0, 1.571, 0]}
              scale={15.898}
            >
              <RefractionMaterial />
            </mesh>

            {/* None, Basket, HiddenHalo */}
            {showCT && (
              <mesh
                name="OCT"
                castShadow
                receiveShadow
                geometry={nodes.OCT.geometry}
                position={[0.542, 2.986, 0.344]}
                rotation={[-1.045, -0.176, -2.846]}
                scale={12.631}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* None, Basket, HiddenHalo */}
            {showCLP && (
              <mesh
                name="OCLP"
                castShadow
                receiveShadow
                geometry={nodes.OCLP.geometry}
                position={[0.138, 2.701, 0.026]}
                rotation={[0, 0.325, -Math.PI / 2]}
                scale={0.153}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* Basket, HiddenHalo */}
            {showSB && (
              <mesh
                name="OSB"
                castShadow
                receiveShadow
                geometry={nodes.OSB.geometry}
                position={[0.134, 2.701, -0.274]}
                rotation={[2.413, -0.964, -3.139]}
                scale={[0.097, 0.119, 0.118]}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* HiddenHalo only */}
            {showHHD && (
              <group
                name="OHHD"
                position={[-0.098, 2.701, 0.298]}
                rotation={[-0.985, -0.089, 3.008]}
                scale={9.444}
              >
                <mesh
                  name="Diamondmesh434230"
                  castShadow
                  receiveShadow
                  geometry={nodes.Diamondmesh434230.geometry}
                >
                  <RefractionMaterial />
                </mesh>
                <mesh
                  name="Diamondmesh434230_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Diamondmesh434230_1.geometry}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>
              </group>
            )}

            {/* Bezel only */}
            {isBezel && (
              <mesh
                name="OBB"
                castShadow
                receiveShadow
                geometry={nodes.OBB.geometry}
                position={[0.128, 2.873, 0.02]}
                scale={[0.732, 1.005, 0.509]}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* Halo only */}
            {showHalo && (
              <>
                <mesh
                  name="OHB"
                  castShadow
                  receiveShadow
                  geometry={nodes.OHB.geometry}
                  position={[0.139, 2.745, 0.02]}
                  scale={[0.794, 0.866, 0.609]}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>

                <group
                  name="OHD"
                  position={[0.122, 3.007, 0.512]}
                  rotation={[Math.PI / 2, 1.309, Math.PI / 2]}
                  scale={[11.226, 13.281, 10.355]}
                >
                  <mesh
                    name="Diamondmesh434157"
                    castShadow
                    receiveShadow
                    geometry={nodes.Diamondmesh434157.geometry}
                  >
                    <RefractionMaterial />
                  </mesh>
                  <mesh
                    name="Diamondmesh434157_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Diamondmesh434157_1.geometry}
                  >
                    <TransitionMaterial {...metalProps} />
                  </mesh>
                </group>

                <mesh
                  name="OHCLP"
                  castShadow
                  receiveShadow
                  geometry={nodes.OHCLP.geometry}
                  position={[0.03, 2.592, 0.093]}
                  rotation={[Math.PI, -1.244, Math.PI / 2]}
                  scale={0.153}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>

                <mesh
                  name="OHCT"
                  castShadow
                  receiveShadow
                  geometry={nodes.OHCT.geometry}
                  position={[0.608, 2.953, -0.373]}
                  rotation={[-0.701, 0.015, -2.376]}
                  scale={16.552}
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

export default Oval