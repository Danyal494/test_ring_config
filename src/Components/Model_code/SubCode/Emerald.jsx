import React from 'react'

const Emerald = ({ nodes, materials, orientationZ, basket, tipVisible, TransitionMaterial, caratSize, metalProps, RefractionMaterial }) => {
  const isNone       = !basket || basket === 'None'
  const isBasket     = basket === 'Basket'
  const isHiddenHalo = basket === 'HiddenHalo'
  const isBezel      = basket === 'Bezel'
  const isHalo       = basket === 'Halo'

  const showCLP  = !isHalo               // None, Basket, HiddenHalo
  const showCT   = isNone || isBasket || isHiddenHalo // None, Basket, HiddenHalo
  const showSB   = isBasket || isHiddenHalo           // Basket, HiddenHalo
  const showHHD  = isHiddenHalo                       // HiddenHalo only
  const showHalo = isHalo                             // Halo only (EHB + EHD + EHCLP + EHCT)

  const CARAT_DEFAULT = 1.5
  const scale = caratSize / CARAT_DEFAULT

  const cx = 0.135
  const cy = 2.598
  const cz = -0.007

  const RING_TOP_Y = 2.361
  const stoneHalfHeight = cy - RING_TOP_Y
  const newCY = RING_TOP_Y + stoneHalfHeight * scale
// ── reverse orientation for Emerald (model is 90° off vs Oval/Marquise) ──
const effectiveOrientationZ = orientationZ - Math.PI / 2
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
              name="EmeraldDiamond"
              castShadow
              receiveShadow
              geometry={nodes.EmeraldDiamond.geometry}
              position={[0.135, 2.598, -0.007]}
              
              scale={[18.904, 18.904, 18.398]}
            >
              <RefractionMaterial />
            </mesh>

            {/* None, Basket, HiddenHalo */}
            {showCT && (
              <mesh
                name="ECT"
                castShadow
                receiveShadow
                geometry={nodes.ECT.geometry}
                position={[-0.253, 3.1, -0.565]}
                rotation={[-1.025, 0.314, -2.63]}
                scale={17.079}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* None, Basket, HiddenHalo */}
            {showCLP && (
              <mesh
                name="ECLP"
                castShadow
                receiveShadow
                geometry={nodes.ECLP.geometry}
                position={[0.095, 2.461, 0.043]}
                rotation={[-Math.PI, 0.129, Math.PI / 2]}
                scale={0.412}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* Basket, HiddenHalo */}
            {showSB && (
              <mesh
                name="ESB"
                castShadow
                receiveShadow
                geometry={nodes.ESB.geometry}
                position={[0.133, 2.778, 0.401]}
                rotation={[-2.591, -0.021, -3.129]}
                scale={[0.113, 0.137, 0.137]}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* HiddenHalo only */}
            {showHHD && (
              <group
                name="EHHD"
                position={[0.135, 2.743, -0.501]}
                rotation={[1.478, -0.002, 3.134]}
                scale={16.354}
              >
                <mesh
                  name="Diamondmesh434209"
                  castShadow
                  receiveShadow
                  geometry={nodes.Diamondmesh434209.geometry}
                >
                  <RefractionMaterial />
                </mesh>
                <mesh
                  name="Diamondmesh434209_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Diamondmesh434209_1.geometry}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>
              </group>
            )}

            {/* Bezel only */}
            {isBezel && (
              <mesh
                name="EBB"
                castShadow
                receiveShadow
                geometry={nodes.EBB.geometry}
                position={[0.591, 2.99, -0.221]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.081, 0.198, 0.198]}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* Halo only */}
            {showHalo && (
              <>
                <mesh
                  name="EHB"
                  castShadow
                  receiveShadow
                  geometry={nodes.EHB.geometry}
                  position={[0.138, 2.846, 0.026]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                  scale={[-0.509, -0.057, -0.619]}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>

                <group
                  name="EHD"
                  position={[-0.256, 2.916, 0.68]}
                  rotation={[-2.848, 0.133, 3.108]}
                  scale={17.108}
                >
                  <mesh
                    name="Diamondmesh434094"
                    castShadow
                    receiveShadow
                    geometry={nodes.Diamondmesh434094.geometry}
                  >
                    <RefractionMaterial />
                  </mesh>
                  <mesh
                    name="Diamondmesh434094_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Diamondmesh434094_1.geometry}
                  >
                    <TransitionMaterial {...metalProps} />
                  </mesh>
                </group>

                <mesh
                  name="EHCT"
                  castShadow
                  receiveShadow
                  geometry={nodes.EHCT.geometry}
                  position={[0.473, 3.153, -0.49]}
                  rotation={[-0.709, 0.134, -2.274]}
                  scale={16.349}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>

                <mesh
                  name="EHCLP"
                  castShadow
                  receiveShadow
                  geometry={nodes.EHCLP.geometry}
                  position={[0.069, 2.586, 0.007]}
                  rotation={[Math.PI, -1.351, Math.PI / 2]}
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

export default Emerald