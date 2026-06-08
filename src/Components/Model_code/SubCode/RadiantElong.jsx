import React from 'react'

const RadiantElong = ({ nodes, materials, orientationZ, basket, caratSize, tipVisible, TransitionMaterial, metalProps, RefractionMaterial }) => {
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
const effectiveOrientationZ = orientationZ - Math.PI / 2
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
        <group rotation={[0, effectiveOrientationZ, 0]} position={[cx, cy, cz]}>
          <group position={[-cx, -cy, -cz]}>
            {/* Always visible */}
          <mesh
  name="Radiant_Elongated_Diamond"
  castShadow
  receiveShadow
  geometry={nodes.Radiant_Elongated_Diamond.geometry}
  position={[0.152, showHalo ? 2.689 : 2.489, -0.014]}  // +0.2 when Halo
  scale={16.808}
>
  <RefractionMaterial />
</mesh>

            {/* None, Basket, HiddenHalo */}
            {showCT && (
              <mesh
                name="RECT"
                castShadow
                receiveShadow
                geometry={nodes.RECT.geometry}
                position={[-0.264, 2.986, 0.503]}
                rotation={[-1.761, -0.521, 1.791]}
                scale={12.631}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* None, Basket, HiddenHalo */}
            {showCLP && (
              <mesh
                name="RECLP"
                castShadow
                receiveShadow
                geometry={nodes.RECLP.geometry}
                position={[0.045, 2.701, 0.092]}
                rotation={[0, -1.225, -Math.PI / 2]}
                scale={0.153}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* Basket, HiddenHalo */}
            {showSB && (
              <mesh
                name="RESB"
                castShadow
                receiveShadow
                geometry={nodes.RESB.geometry}
                position={[-0.125, 2.71, 0.05]}
                rotation={[0.415, -0.343, 0.782]}
                scale={[0.097, 0.119, 0.118]}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* HiddenHalo only */}
            {showHHD && (
              <group
                name="REHHD"
                position={[-0.021, 2.683, 0.432]}
                rotation={[-0.979, -0.011, 3.126]}
                scale={12.885}
              >
                <mesh
                  name="Diamondmesh434316"
                  castShadow
                  receiveShadow
                  geometry={nodes.Diamondmesh434316.geometry}
                >
                  <RefractionMaterial />
                </mesh>
                <mesh
                  name="Diamondmesh434316_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Diamondmesh434316_1.geometry}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>
              </group>
            )}

            {/* Bezel only */}
            {isBezel && (
              <mesh
                name="REBB"
                castShadow
                receiveShadow
                geometry={nodes.REBB.geometry}
                position={[0.128, 2.86, 0.02]}
                scale={[0.463, 0.087, 0.463]}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* Halo only */}
            {showHalo && (
              <>
                <mesh
                  name="REHB"
                  castShadow
                  receiveShadow
                  geometry={nodes.REHB.geometry}
                  position={[0.138, 2.862, -0.014]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                  scale={[-0.529, -0.053, -0.529]}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>

                <group
                  name="REHD"
                  position={[0.315, 2.913, 0.506]}
                  rotation={[-2.772, 0.005, -3.138]}
                  scale={14.386}
                >
                  <mesh
                    name="Diamondmesh434300"
                    castShadow
                    receiveShadow
                    geometry={nodes.Diamondmesh434300.geometry}
                  >
                    <RefractionMaterial />
                  </mesh>
                  <mesh
                    name="Diamondmesh434300_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Diamondmesh434300_1.geometry}
                  >
                    <TransitionMaterial {...metalProps} />
                  </mesh>
                </group>

                <mesh
                  name="REHCT"
                  castShadow
                  receiveShadow
                  geometry={nodes.REHCT.geometry}
                  position={[0.552, 3.153, 0.433]}
                  rotation={[-1.438, -0.862, 2.498]}
                  scale={16.349}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>

                <mesh
                  name="REHCLP"
                  castShadow
                  receiveShadow
                  geometry={nodes.REHCLP.geometry}
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

export default RadiantElong