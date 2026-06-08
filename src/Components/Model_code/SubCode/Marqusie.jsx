import React from 'react'

const Marquise = ({ nodes, materials, orientationZ, caratSize, basket, tipVisible, TransitionMaterial, metalProps, RefractionMaterial }) => {
  const isNone       = !basket || basket === 'None'
  const isBasket     = basket === 'Basket'
  const isHiddenHalo = basket === 'HiddenHalo'
  const isBezel      = basket === 'Bezel'
  const isHalo       = basket === 'Halo'

  const showCLP  = !isHalo             // None, Basket, HiddenHalo
  const showCT   = isNone || isBasket || isHiddenHalo // None, Basket, HiddenHalo
  const showSB   = isBasket || isHiddenHalo           // Basket, HiddenHalo
  const showHHD  = isHiddenHalo                       // HiddenHalo only
  const showHalo = isHalo                             // Halo only (MHB + MHD + MHCLP + MHCT)

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
              name="Marquise_Final_1Carat"
              castShadow
              receiveShadow
              geometry={nodes.Marquise_Final_1Carat.geometry}
              position={[0.134, 2.551, 0.009]}
              rotation={[0, 1.571, 0]}
              scale={16.615}
            >
              <RefractionMaterial />
            </mesh>

            {/* None, Basket, HiddenHalo */}
            {showCT && (
              <mesh
                name="MCT"
                castShadow
                receiveShadow
                geometry={nodes.MCT.geometry}
                position={[0.463, 2.986, -0.385]}
                rotation={[-1.353, 0.511, -1.407]}
                scale={12.631}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* None, Basket, HiddenHalo */}
            {showCLP && (
              <mesh
                name="MCLP"
                castShadow
                receiveShadow
                geometry={nodes.MCLP.geometry}
                position={[0.134, 2.701, 0.01]}
                rotation={[0, 0.778, -Math.PI / 2]}
                scale={0.153}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* Basket, HiddenHalo */}
            {showSB && (
              <mesh
                name="MSB"
                castShadow
                receiveShadow
                geometry={nodes.MSB.geometry}
                position={[0.161, 2.71, -0.265]}
                rotation={[2.56, -0.953, -3.049]}
                scale={[0.097, 0.119, 0.118]}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* HiddenHalo only */}
            {showHHD && (
              <group
                name="MHHD"
                position={[0.722, 2.692, -0.124]}
                rotation={[1.598, 0.001, -2.359]}
                scale={13.767}
              >
                <mesh
                  name="Diamondmesh434090"
                  castShadow
                  receiveShadow
                  geometry={nodes.Diamondmesh434090.geometry}
                >
                  <RefractionMaterial />
                </mesh>
                <mesh
                  name="Diamondmesh434090_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Diamondmesh434090_1.geometry}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>
              </group>
            )}

            {/* Bezel only */}
            {isBezel && (
              <mesh
                name="MBB"
                castShadow
                receiveShadow
                geometry={nodes.MBB.geometry}
                position={[0.134, 2.852, 0.01]}
                rotation={[-Math.PI, 0.79, -Math.PI]}
                scale={[0.666, 0.101, 0.663]}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* Halo only */}
            {showHalo && (
              <>
                <mesh
                  name="MHB"
                  castShadow
                  receiveShadow
                  geometry={nodes.MHB.geometry}
                  position={[0.134, 2.675, 0.01]}
                  rotation={[-Math.PI, 0.79, -Math.PI]}
                  scale={[0.752, 0.07, 0.748]}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>

                <group
                  name="MHD"
                  position={[0.121, 3.076, 0.512]}
                  rotation={[Math.PI / 2, 1.309, Math.PI / 2]}
                  scale={[11.226, 13.352, 11.226]}
                >
                  <mesh
                    name="Diamondmesh434091"
                    castShadow
                    receiveShadow
                    geometry={nodes.Diamondmesh434091.geometry}
                  >
                    <RefractionMaterial />
                  </mesh>
                  <mesh
                    name="Diamondmesh434091_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Diamondmesh434091_1.geometry}
                  >
                    <TransitionMaterial {...metalProps} />
                  </mesh>
                </group>

                <mesh
                  name="MHCLP"
                  castShadow
                  receiveShadow
                  geometry={nodes.MHCLP.geometry}
                  position={[0.475, 2.769, -0.416]}
                  rotation={[0, 0.086, -Math.PI / 2]}
                  scale={0.25}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>

                <mesh
                  name="MHCT"
                  castShadow
                  receiveShadow
                  geometry={nodes.MHCT.geometry}
                  position={[1.043, 2.952, 0.013]}
                  rotation={[-0.811, -0.475, -2.837]}
                  scale={15.275}
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

export default Marquise