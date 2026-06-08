import React from 'react'

const Pear = ({ nodes, materials, orientationZ, basket, caratSize, tipVisible, TransitionMaterial, metalProps, RefractionMaterial }) => {
  const isNone       = !basket || basket === 'None'
  const isBasket     = basket === 'Basket'
  const isHiddenHalo = basket === 'HiddenHalo'
  const isBezel      = basket === 'Bezel'
  const isHalo       = basket === 'Halo'

  const showCLP  = !isHalo               // None, Basket, HiddenHalo
  const showCT   = isNone || isBasket || isHiddenHalo // None, Basket, HiddenHalo
  const showSB   = isBasket || isHiddenHalo           // Basket, HiddenHalo
  const showHHD  = isHiddenHalo                       // HiddenHalo only
  const showHalo = isHalo                             // Halo only (PEHB + PEHD + PEHCT + PEHCLP)

  const cx = 0.135
  const cy = 2.626
  const cz = -0.01

  const CARAT_DEFAULT = 1.5
  const scale = caratSize / CARAT_DEFAULT

  const RING_TOP_Y = 2.341
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
              name="Pear_Final_1Carat001"
              castShadow
              receiveShadow
              geometry={nodes.Pear_Final_1Carat001.geometry}
              position={[-0.059, 2.554, 0.02]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={15.209}
            >
              <RefractionMaterial />
            </mesh>

            {/* None, Basket, HiddenHalo */}
            {showCLP && (
              <mesh
                name="PECLP"
                castShadow
                receiveShadow
                geometry={nodes.PECLP.geometry}
                position={[0.082, 2.701, 0.101]}
                rotation={[Math.PI, -1.469, Math.PI / 2]}
                scale={0.153}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* None, Basket, HiddenHalo */}
            {showCT && (
              <mesh
                name="PECT"
                castShadow
                receiveShadow
                geometry={nodes.PECT.geometry}
                position={[0.879, 2.986, 0.033]}
                rotation={[-1.047, 0.181, -2.251]}
                scale={12.631}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* Basket, HiddenHalo */}
            {showSB && (
              <mesh
                name="PESB"
                castShadow
                receiveShadow
                geometry={nodes.PESB.geometry}
                position={[-0.031, 2.711, 0.294]}
                rotation={[0.836, 1.034, -0.125]}
                scale={[0.097, 0.119, 0.118]}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* HiddenHalo only */}
            {showHHD && (
              <group
                name="PEHHD"
                position={[-0.326, 2.703, -0.132]}
                rotation={[-1.605, -0.591, 1.51]}
                scale={11.171}
              >
                <mesh
                  name="Diamondmesh434232"
                  castShadow
                  receiveShadow
                  geometry={nodes.Diamondmesh434232.geometry}
                >
                  <RefractionMaterial />
                </mesh>
                <mesh
                  name="Diamondmesh434232_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Diamondmesh434232_1.geometry}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>
              </group>
            )}

            {/* Bezel only */}
            {isBezel && (
              <mesh
                name="PEBB"
                castShadow
                receiveShadow
                geometry={nodes.PEBB.geometry}
                position={[0.126, 2.901, 0.018]}
                scale={0.604}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* Halo only */}
            {showHalo && (
              <>
                <mesh
                  name="PEHB"
                  castShadow
                  receiveShadow
                  geometry={nodes.PEHB.geometry}
                  position={[0.14, 2.848, 0.01]}
                  scale={[0.817, 0.633, 0.817]}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>

                <group
                  name="PEHD"
                  position={[0.122, 3.007, 0.512]}
                  rotation={[Math.PI / 2, 1.309, Math.PI / 2]}
                  scale={[11.226, 13.281, 10.355]}
                >
                  <mesh
                    name="Diamondmesh434240"
                    castShadow
                    receiveShadow
                    geometry={nodes.Diamondmesh434240.geometry}
                  >
                    <RefractionMaterial />
                  </mesh>
                  <mesh
                    name="Diamondmesh434240_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Diamondmesh434240_1.geometry}
                  >
                    <TransitionMaterial {...metalProps} />
                  </mesh>
                </group>

                <mesh
                  name="PEHCT"
                  castShadow
                  receiveShadow
                  geometry={nodes.PEHCT.geometry}
                  morphTargetDictionary={nodes.PEHCT.morphTargetDictionary}
                  morphTargetInfluences={nodes.PEHCT.morphTargetInfluences}
                  position={[-0.378, 2.985, 0.327]}
                  rotation={[-1.974, -0.388, 1.315]}
                  scale={12.631}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>

                <mesh
                  name="PEHCLP"
                  castShadow
                  receiveShadow
                  geometry={nodes.PEHCLP.geometry}
                  position={[0.365, 2.701, 0.045]}
                  rotation={[0, 1.014, -Math.PI / 2]}
                  scale={0.153}
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

export default Pear