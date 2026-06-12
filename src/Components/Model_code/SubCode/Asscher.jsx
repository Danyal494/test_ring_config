import React from 'react'

const Asscher = ({ nodes, materials, orientationZ, basket, tipVisible, TransitionMaterial,caratSize, metalProps, RefractionMaterial, prongTips }) => {
const isNone       = !basket || basket === 'None'
const isBasket     = basket === 'Basket'
const isHiddenHalo = basket === 'HiddenHalo'
const isBezel      = basket === 'Bezel'
const isHalo       = basket === 'Halo'

const showCLP   = !isHalo && !isBezel
const showTip   = isNone || isBasket || isHiddenHalo   // basket gate — any tip mesh requires this
const showSB    = isBasket || isHiddenHalo
const showBB    = isBezel
const showBBCLP = isBezel
const showHHD   = isHiddenHalo
const showHalo  = isHalo

// prongTip sub-rules — basket gate (showTip) AND prongTips value
const showACT  = showTip && prongTips === 'Claw'
const showART  = showTip && prongTips === 'Rounded'
const showAPCT = showTip && prongTips === 'PetiteClaw'
const showATT  = showTip && prongTips === 'Tab'

// Halo tip sub-rules — halo gate AND prongTips value
const showAHCT  = isHalo && prongTips === 'Claw'
const showAHRT  = isHalo && prongTips === 'Rounded'
const showAHPCT = isHalo && prongTips === 'PetiteClaw'
const showAHTT  = isHalo && prongTips === 'Tab'



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
           
{showACT &&(
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
           
               
       {showAPCT && (
  <mesh
    name="APCT"
    castShadow receiveShadow
    geometry={nodes.APCT.geometry}
    position={[-0.264, 3.117, -0.416]}
    rotation={[-2.086, -0.316, 0.64]}
    scale={14.346}
    ><TransitionMaterial {...metalProps} /></mesh>
)}
     {showART && (
  <mesh
    name="ART"
    castShadow receiveShadow
    geometry={nodes.ART.geometry}
    position={[-0.259, 3.092, -0.422]}
    rotation={[-2.213, -0.437, 0.679]}
    scale={13.749}
    ><TransitionMaterial {...metalProps} /></mesh>
)}
{showATT && (
<mesh
          name="ATT"
          castShadow
          receiveShadow
          geometry={nodes.ATT.geometry}
          // material={materials['Material.010']}
          position={[-0.254, 3.129, -0.406]}
          rotation={[-1.875, -0.199, 0.735]}
          scale={13.778}
      ><TransitionMaterial {...metalProps} /></mesh>
)}
        
            
            {/* None, Basket, HiddenHalo, Bezel */}
            {showCLP && (
            
              <mesh
                name="ACLP"
          castShadow
          receiveShadow
          geometry={nodes.ACLP.geometry}
          // material={nodes.ACLP.material}
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
          // material={nodes.ASB.material}
          position={[0.133, 2.793, 0.243]}
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
          position={[-0.02, 2.779, -0.306]}
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
     name="AHB"
          castShadow
          receiveShadow
          geometry={nodes.AHB.geometry}
          // material={nodes.AHB.material}
          position={[0.138, 2.862, -0.014]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.529, -0.053, -0.529]}
      >
         <TransitionMaterial {...metalProps} />
      </mesh>
      <group
      name="AHD"
          position={[0.315, 2.913, 0.506]}
          rotation={[-2.772, 0.005, -3.138]}
          scale={14.386}>
        <mesh
          name="Diamondmesh434031"
            castShadow
            receiveShadow
            geometry={nodes.Diamondmesh434031.geometry}
            material={materials['Diamond.002']}
        >
          <RefractionMaterial/>
        </mesh>
        <mesh
             name="Diamondmesh434031_1"
            castShadow
            receiveShadow
            geometry={nodes.Diamondmesh434031_1.geometry}
            material={materials['Metal.002']}
        >
           <TransitionMaterial {...metalProps} />
        </mesh>
      </group>
      {showAHCT && (
      <mesh
        name="AHCT"
          castShadow
          receiveShadow
          geometry={nodes.AHCT.geometry}
          // material={materials['Material.007']}
          position={[0.564, 3.153, 0.421]}
          rotation={[-1.404, -0.858, 2.542]}
          scale={16.349}
      >
         <TransitionMaterial {...metalProps} />
      </mesh>
      )}


 <mesh
        name="AHCLP"
        castShadow
        receiveShadow
        geometry={nodes.AHCLP.geometry}
        material={nodes.AHCLP.material}
        position={[0.137, 2.586, -0.103]}
        rotation={[-Math.PI, 0.254, Math.PI / 2]}
        scale={0.146}
>
 <TransitionMaterial {...metalProps} />
</mesh>
    
{showAHPCT && (
      <mesh
        name="AHPCT"
        castShadow
        receiveShadow
        geometry={nodes.AHPCT.geometry}
        material={materials['Material.036']}
        position={[0.537, 3.108, 0.404]}
        rotation={[-1.424, 0.109, -2.347]}
        scale={16.349}
     >
 <TransitionMaterial {...metalProps} />
     </mesh>
          )}

{showAHRT && (
      <mesh
        name="AHRT"
        castShadow
        receiveShadow
        geometry={nodes.AHRT.geometry}
        material={materials['Material.060']}
        position={[0.537, 3.108, 0.404]}
        rotation={[-1.424, 0.109, -2.347]}
        scale={16.349}
   >
 <TransitionMaterial {...metalProps} />
   </mesh>
        )}
        {showAHTT && (
      <mesh
        name="AHTT"
        castShadow
        receiveShadow
        geometry={nodes.AHTT.geometry}
        material={materials['Material.061']}
        position={[0.537, 3.108, 0.404]}
        rotation={[-1.424, 0.109, -2.347]}
        scale={16.349}
>
   <TransitionMaterial {...metalProps} />
</mesh>

     )}



      <mesh
         name="AHCLP"
          castShadow
          receiveShadow
          geometry={nodes.AHCLP.geometry}
          // material={nodes.AHCLP.material}
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