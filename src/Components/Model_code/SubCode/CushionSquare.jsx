import React from 'react'

const CushionSquare = ({ nodes, materials, orientationZ, caratSize, basket, tipVisible, TransitionMaterial, metalProps, RefractionMaterial }) => {
  const isNone       = !basket || basket === 'None'
  const isBasket     = basket === 'Basket'
  const isHiddenHalo = basket === 'HiddenHalo'
  const isBezel      = basket === 'Bezel'
  const isHalo       = basket === 'Halo'

  const showCLP  = !isHalo             // None, Basket, HiddenHalo
  const showCT   = isNone || isBasket || isHiddenHalo // None, Basket, HiddenHalo
  const showSB   = isBasket || isHiddenHalo           // Basket, HiddenHalo
  const showHHD  = isHiddenHalo                       // HiddenHalo only
  const showHalo = isHalo                             // Halo only (CHCLP + CHB + CHCT)

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
              name="Cushion_Final_1Carat001"
              castShadow
              receiveShadow
              geometry={nodes.Cushion_Final_1Carat001.geometry}
              position={[0.119,showHalo ? 2.666 : 2.591, showHalo ? 0.02 :-0.03]}
              scale={16.893}
            >
              <RefractionMaterial />
            </mesh>

            {/* None, Basket, HiddenHalo */}
            {showCLP && (
              <mesh
                name="CCLP"
                castShadow
                receiveShadow
                geometry={nodes.CCLP.geometry}
                position={[0.128, 2.722, -0.005]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0.158}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* None, Basket, HiddenHalo */}
            {showCT && (
              <mesh
                name="CCT"
                castShadow
                receiveShadow
                geometry={nodes.CCT.geometry}
                position={[-0.287, 3.061, -0.414]}
                rotation={[-1.945, -0.314, 0.645]}
                scale={15.119}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* Basket, HiddenHalo */}
            {showSB && (
              <mesh
                name="CSB"
                castShadow
                receiveShadow
                geometry={nodes.CSB.geometry}
                position={[-0.114, 2.776, -0.06]}
                rotation={[-0.365, -0.195, 0.536]}
                scale={[0.116, 0.141, 0.141]}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* HiddenHalo only */}
            {showHHD && (
              <group
                name="CHHD"
                position={[-0.024, 2.745, -0.355]}
                rotation={[1.397, 0.046, 2.863]}
                scale={11.403}
              >
                <mesh
                  name="Diamondmesh434112"
                  castShadow
                  receiveShadow
                  geometry={nodes.Diamondmesh434112.geometry}
                >
                  <RefractionMaterial />
                </mesh>
                <mesh
                  name="Diamondmesh434112_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Diamondmesh434112_1.geometry}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>
              </group>
            )}

            {/* Bezel only */}
            {isBezel && (
              <mesh
                name="CBB"
                castShadow
                receiveShadow
                geometry={nodes.CBB.geometry}
                position={[0.128, 3.163, 0.02]}
                scale={[0.563, 0.797, 0.563]}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* Halo only */}
            {showHalo && (
              <>
                
      <mesh
        name="CHCLP"
        castShadow
        receiveShadow
        geometry={nodes.CHCLP.geometry}
        material={nodes.CHCLP.material}
        position={[0.137, 2.586, -0.103]}
        rotation={[-Math.PI, 0.254, Math.PI / 2]}
        scale={0.146}
   >
 <TransitionMaterial {...metalProps} />
</mesh>
      <mesh
        name="CHB"
        castShadow
        receiveShadow
        geometry={nodes.CHB.geometry}
        material={nodes.CHB.material}
        position={[0.124, 2.946, 0.023]}
        scale={[0.561, 0.459, 0.551]}
   >
 <TransitionMaterial {...metalProps} />
</mesh>
      <group
        name="CHD"
        position={[0.571, 2.957, 0.468]}
        rotation={[-2.796, -0.685, -2.912]}
        scale={13.046}>
        <mesh
          name="Diamondmesh434200"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434200.geometry}
          material={materials['Diamond.018']}
     >
<RefractionMaterial/>
</mesh>
        <mesh
          name="Diamondmesh434200_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434200_1.geometry}
          material={materials['Metal.018']}
     >
 <TransitionMaterial {...metalProps} />
</mesh>
      </group>
      <mesh
        name="CHCT"
        castShadow
        receiveShadow
        geometry={nodes.CHCT.geometry}
        material={materials['Material.016']}
        position={[0.54, 3.122, 0.433]}
        rotation={[-1.13, -0.539, 2.4]}
        scale={17.94}
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

export default CushionSquare