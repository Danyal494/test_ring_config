import React from 'react'

const CusihonElong = ({ nodes, materials, orientationZ, caratSize, basket, tipVisible, TransitionMaterial, metalProps, RefractionMaterial }) => {
  const isNone       = !basket || basket === 'None'
  const isBasket     = basket === 'Basket'
  const isHiddenHalo = basket === 'HiddenHalo'
  const isBezel      = basket === 'Bezel'
  const isHalo       = basket === 'Halo'

  const showCLP  = !isHalo                            // None, Basket, HiddenHalo, Bezel
  const showCT   = isNone || isBasket || isHiddenHalo // None, Basket, HiddenHalo
  const showSB   = isBasket || isHiddenHalo           // Basket, HiddenHalo
  const showHHD  = isHiddenHalo                       // HiddenHalo only
  const showHalo = isHalo                             // Halo only (CEHB + CEHD + CEHCLP + CEHCT)

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
              name="CushionWithNewDepth"
              castShadow
              receiveShadow
              geometry={nodes.CushionWithNewDepth.geometry}
              position={[0.136, 2.62, -0.009]}
              scale={17.009}
            >
              <RefractionMaterial />
            </mesh>

            {/* None, Basket, HiddenHalo */}
            {showCT && (
              <mesh
                name="CECT"
                castShadow
                receiveShadow
                geometry={nodes.CECT.geometry}
                position={[-0.243, 3.113, -0.502]}
                rotation={[-2.151, -0.379, 0.484]}
                scale={14.723}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* None, Basket, HiddenHalo, Bezel */}
            {showCLP && (
              <mesh
                name="CECLP"
                castShadow
                receiveShadow
                geometry={nodes.CECLP.geometry}
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
                name="CESB"
                castShadow
                receiveShadow
                geometry={nodes.CESB.geometry}
                position={[0.113, 2.787, 0.245]}
                rotation={[0.489, 0, 0]}
                scale={0.289}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* HiddenHalo only */}
            {showHHD && (
              <group
                name="CEHHD"
                position={[0.42, 2.763, 0.164]}
                rotation={[1.598, -0.091, -1.369]}
                scale={13.342}
              >
                <mesh
                  name="Diamondmesh434065"
                  castShadow
                  receiveShadow
                  geometry={nodes.Diamondmesh434065.geometry}
                >
                  <RefractionMaterial />
                </mesh>
                <mesh
                  name="Diamondmesh434065_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Diamondmesh434065_1.geometry}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>
              </group>
            )}

            {/* Bezel only */}
            {isBezel && (
              <mesh
                name="CEBB"
                castShadow
                receiveShadow
                geometry={nodes.CEBB.geometry}
                position={[0.128, 2.908, 0.02]}
                scale={[0.618, 1.135, 0.618]}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* Halo only */}
            {showHalo && (
              <>
               
      <mesh
        name="CEHB"
        castShadow
        receiveShadow
        geometry={nodes.CEHB.geometry}
        material={nodes.CEHB.material}
        position={[0.138, 2.84, -0.014]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.525, -0.053, -0.525]}
   >
 <TransitionMaterial {...metalProps} />
</mesh>
      <mesh
        name="CEHCT"
        castShadow
        receiveShadow
        geometry={nodes.CEHCT.geometry}
        material={materials['Material.003']}
        position={[-0.241, 3.153, -0.498]}
        rotation={[-1.668, 0.866, -0.691]}
        scale={16.349}
   >
 <TransitionMaterial {...metalProps} />
</mesh>
      <group
        name="CEHD"
        position={[-0.333, 2.899, 0.46]}
        rotation={[-2.712, 0.864, 2.753]}
        scale={13.035}>
        <mesh
          name="Diamondmesh434089"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434089.geometry}
          material={materials['Diamond.006']}
     >
<RefractionMaterial/>
</mesh>
        <mesh
          name="Diamondmesh434089_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434089_1.geometry}
          material={materials['Metal.006']}
     >
 <TransitionMaterial {...metalProps} />
</mesh>
      </group>
      <mesh
        name="CEHCLP"
        castShadow
        receiveShadow
        geometry={nodes.CEHCLP.geometry}
        material={nodes.CEHCLP.material}
        position={[-0.28, 2.661, -0.533]}
        rotation={[0, 1.515, -Math.PI / 2]}
        scale={0.267}
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

export default CusihonElong