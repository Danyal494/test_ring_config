import React from 'react'

const Asscher = ({ nodes, materials, orientationZ, basket, tipVisible, TransitionMaterial, caratSize, metalProps, RefractionMaterial }) => {
  const isNone       = !basket || basket === 'None'
  const isBasket     = basket === 'Basket'
  const isHiddenHalo = basket === 'HiddenHalo'
  const isBezel      = basket === 'Bezel'
  const isHalo       = basket === 'Halo'

const showCLP  = !isHalo && !isBezel   // None, Basket, HiddenHalo only                      // None, Basket, HiddenHalo, Bezel
  const showCT   = isNone || isBasket || isHiddenHalo   // None, Basket, HiddenHalo
  const showSB   = isBasket || isHiddenHalo             // Basket, HiddenHalo
  const showBB   = isBezel                              // Bezel only
const showBBCLP = isBezel                             // Bezel only
  const showHHD  = isHiddenHalo                         // HiddenHalo only
  const showHalo = isHalo                               // Halo only (AHB + AHCT + AHCLP)

  const cx = 0.135
  const cy = 2.626
  const cz = -0.01

  const CARAT_DEFAULT = 1.5
  const scale = caratSize / CARAT_DEFAULT

  const RING_TOP_Y = 2.261
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
              name="Asscher_Final_1Carat001"
              castShadow
              receiveShadow
              geometry={nodes.Asscher_Final_1Carat001.geometry}
              position={[0.135, showHalo ? 2.656 : 2.626, -0.01]}
              scale={16.526}
            >
              <RefractionMaterial />
            </mesh>

            {/* None, Basket, HiddenHalo */}
            {showCT && (
              <mesh
                name="ACT"
                castShadow
                receiveShadow
                geometry={nodes.ACT.geometry}
                position={[-0.283, 3.061, -0.417]}
                rotation={[-1.97, -0.279, 0.647]}
                scale={15.119}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* None, Basket, HiddenHalo, Bezel */}
            {showCLP && (
              <mesh
                name="ACLP"
                castShadow
                receiveShadow
                geometry={nodes.ACLP.geometry}
                position={[0.128, 2.722, -0.005]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0.158}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* Basket, HiddenHalo */}
            {showSB && (
              <mesh
                name="ASB"
                castShadow
                receiveShadow
                geometry={nodes.ASB.geometry}
                position={[0.133, 2.773, 0.243]}
                rotation={[-2.729, -0.021, -3.129]}
                scale={[0.113, 0.137, 0.137]}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* HiddenHalo only */}
            {showHHD && (
              <group
                name="AHHD"
                position={[-0.02, 2.758, -0.306]}
                rotation={[1.493, 0, Math.PI]}
                scale={10.521}
              >
                <mesh
                  name="Diamondmesh434011"
                  castShadow
                  receiveShadow
                  geometry={nodes.Diamondmesh434011.geometry}
                >
                  <RefractionMaterial />
                </mesh>
                <mesh
                  name="Diamondmesh434011_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Diamondmesh434011_1.geometry}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>
              </group>
            )}

            {/* Bezel only */}
            {showBB && (
              <mesh
                name="ABB"
                castShadow
                receiveShadow
                geometry={nodes.ABB.geometry}
                position={[0.138, 2.986, -0.014]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[-0.517, -0.098, -0.517]}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* Bezel only */}
            {showBBCLP && (
              <mesh
                name="ABBCLP"
                castShadow
                receiveShadow
                geometry={nodes.ABBCLP.geometry}
                position={[0.138, 2.782, -0.014]}
                rotation={[Math.PI, -0.006, Math.PI / 2]}
                scale={0.184}
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
        material={nodes.RAHB.material}
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
        scale={14.386}>
        <mesh
          name="Diamondmesh434261"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434261.geometry}
          material={materials['Diamond.021']}
        >
          <RefractionMaterial/>
        </mesh>
        <mesh
          name="Diamondmesh434261_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434261_1.geometry}
          material={materials['Metal.021']}
        >
           <TransitionMaterial {...metalProps} />
        </mesh>
      </group>
      <mesh
        name="RAHCT"
        castShadow
        receiveShadow
        geometry={nodes.RAHCT.geometry}
        material={materials['Material.030']}
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
        material={nodes.RAHCLP.material}
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

export default Asscher