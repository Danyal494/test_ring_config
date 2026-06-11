import React from 'react'

const CusihonElong = ({ nodes, materials, orientationZ, basket, tipVisible, TransitionMaterial,caratSize, metalProps, RefractionMaterial, prongTips }) => {
const isNone       = !basket || basket === 'None'
const isBasket     = basket === 'Basket'
const isHiddenHalo = basket === 'HiddenHalo'
const isBezel      = basket === 'Bezel'
const isHalo       = basket === 'Halo'

const showCLP   = !isHalo 
const showTip   = isNone || isBasket || isHiddenHalo   // basket gate — any tip mesh requires this
const showSB    = isBasket || isHiddenHalo
const showBB    = isBezel
const showBBCLP = isBezel
const showHHD   = isHiddenHalo
const showHalo  = isHalo

// prongTip sub-rules — basket gate (showTip) AND prongTips value
const showCECT  = showTip && prongTips === 'Claw'
const showCERT  = showTip && prongTips === 'Rounded'
const showCEPCT = showTip && prongTips === 'PetiteClaw'
const showCETT  = showTip && prongTips === 'Tab'


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
          material={nodes.CushionWithNewDepth.material}
          position={[0.136, 2.62, -0.009]}
          scale={17.009}
            >
              <RefractionMaterial />
            </mesh>

           {showCECT &&(
   <mesh
                 name="CECT"
          castShadow
          receiveShadow
          geometry={nodes.CECT.geometry}
          material={materials['Material.002']}
          position={[-0.243, 3.113, -0.502]}
          rotation={[-2.151, -0.379, 0.484]}
          scale={14.723}
                >
                <TransitionMaterial {...metalProps} />
              </mesh>
)}
           
               
    {showCEPCT && (
  <mesh
    name="CEPCT"
          castShadow
          receiveShadow
          geometry={nodes.CEPCT.geometry}
          material={materials['Material.039']}
          position={[-0.243, 3.057, -0.505]}
          rotation={[-2.225, -0.447, 0.528]}
          scale={15.631}
    ><TransitionMaterial {...metalProps} /></mesh>
)}
     {showCERT && (
  <mesh
     name="CERT"
          castShadow
          receiveShadow
          geometry={nodes.CERT.geometry}
          material={materials['Material.038']}
          position={[-0.236, 3.042, -0.49]}
          rotation={[-2.606, 0.26, -0.247]}
          scale={15.631}
    ><TransitionMaterial {...metalProps} /></mesh>
)}
{showCETT && (
<mesh
        name="CETT"
          castShadow
          receiveShadow
          geometry={nodes.CETT.geometry}
          material={materials['Material.037']}
          position={[-0.243, 3.057, -0.505]}
          rotation={[-2.225, -0.447, 0.528]}
          scale={15.631}
      ><TransitionMaterial {...metalProps} /></mesh>
)} 

            {/* None, Basket, HiddenHalo, Bezel */}
            {showCLP && (
              <mesh
               name="CECLP"
          castShadow
          receiveShadow
          geometry={nodes.CECLP.geometry}
          material={nodes.CECLP.material}
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
          material={nodes.CESB.material}
          position={[0.369, 2.767, -0.042]}
          rotation={[1.491, 1.08, -1.48]}
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
            material={materials['Diamond.005']}
                >
                  <RefractionMaterial />
                </mesh>
                <mesh
                 name="Diamondmesh434065_1"
            castShadow
            receiveShadow
            geometry={nodes.Diamondmesh434065_1.geometry}
            material={materials['Metal.005']}
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
          material={nodes.CEBB.material}
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
          morphTargetDictionary={nodes.CEHCT.morphTargetDictionary}
          morphTargetInfluences={nodes.CEHCT.morphTargetInfluences}
          position={[-0.241, 3.153, -0.498]}
          rotation={[-1.668, 0.866, -0.691]}
          scale={16.349}
   >
 <TransitionMaterial {...metalProps} />
</mesh>
      <group
       name="CEHD"
          position={[0.307, 2.893, 0.486]}
          rotation={[-2.772, 0.005, -3.138]}
          scale={13.696}>
        <mesh
           name="Diamondmesh434066"
            castShadow
            receiveShadow
            geometry={nodes.Diamondmesh434066.geometry}
            material={materials['Diamond.006']}
          >
<RefractionMaterial/>
</mesh>
        <mesh
          name="Diamondmesh434066_1"
            castShadow
            receiveShadow
            geometry={nodes.Diamondmesh434066_1.geometry}
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
          position={[0.138, 2.592, -0.109]}
          rotation={[-Math.PI, 0.254, Math.PI / 2]}
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

export default CusihonElong