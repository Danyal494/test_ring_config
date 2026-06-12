import React from 'react'

const RadiantElong = ({ nodes, materials, orientationZ, basket, tipVisible, TransitionMaterial,caratSize, metalProps, RefractionMaterial, prongTips }) => {
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
const showRECT  = showTip && prongTips === 'Claw'
const showRERT  = showTip && prongTips === 'Rounded'
const showREPCT = showTip && prongTips === 'PetiteClaw'
const showRETT  = showTip && prongTips === 'Tab'

const showREHCT  = isHalo && prongTips === 'Claw'
const showREHRT  = isHalo && prongTips === 'Rounded'
const showREHPCT = isHalo && prongTips === 'PetiteClaw'
const showREHTT  = isHalo && prongTips === 'Tab'

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
          material={materials['Material.033']}
  position={[0.152, showHalo ? 2.689 : 2.489, -0.014]}  // +0.2 when Halo
  scale={16.808}
>
  <RefractionMaterial />
</mesh>

           {showRECT &&(
   <mesh
                name="RECT"
          castShadow
          receiveShadow
          geometry={nodes.RECT.geometry}
          material={materials['Material.032']}
          position={[-0.264, 2.986, 0.503]}
          rotation={[-1.761, -0.521, 1.791]}
          scale={12.631}
                >
                <TransitionMaterial {...metalProps} />
              </mesh>
)}
           
               
     {showREPCT && (
  <mesh
 name="REPCT"
          castShadow
          receiveShadow
          geometry={nodes.REPCT.geometry}
          material={materials['Material.054']}
          position={[-0.236, 2.993, 0.474]}
          rotation={[-1.323, -0.239, 2.413]}
          scale={17.08}
    ><TransitionMaterial {...metalProps} /></mesh>
)}
     {showRERT && (
  <mesh
     name="RERT"
          castShadow
          receiveShadow
          geometry={nodes.RERT.geometry}
          material={materials['Material.055']}
          position={[-0.266, 2.952, 0.512]}
          rotation={[-1.436, -1, 1.927]}
          scale={15.119}
    ><TransitionMaterial {...metalProps} /></mesh>
)}
{showRETT && (
<mesh
           name="RETT"
          castShadow
          receiveShadow
          geometry={nodes.RETT.geometry}
          material={materials['Material.056']}
          position={[-0.251, 2.976, 0.494]}
          rotation={[-1.419, -0.091, 2.565]}
          scale={15.119}
      ><TransitionMaterial {...metalProps} /></mesh>
)}
            {/* None, Basket, HiddenHalo */}
            {showCLP && (
              <mesh
               name="RECLP"
          castShadow
          receiveShadow
          geometry={nodes.RECLP.geometry}
          material={nodes.RECLP.material}
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
          material={nodes.RESB.material}
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
          scale={12.885}>
          <mesh
            name="Diamondmesh434316"
            castShadow
            receiveShadow
            geometry={nodes.Diamondmesh434316.geometry}
            material={materials['Diamond.023']}
                >
                  <RefractionMaterial />
                </mesh>
                <mesh
                  name="Diamondmesh434316_1"
            castShadow
            receiveShadow
            geometry={nodes.Diamondmesh434316_1.geometry}
            material={materials['Metal.023']}
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
          material={nodes.REBB.material}
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
          material={nodes.REHB.material}
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
          scale={14.386}>
          <mesh
            name="Diamondmesh434300"
            castShadow
            receiveShadow
            geometry={nodes.Diamondmesh434300.geometry}
            material={materials['Diamond.022']}
                  >
                    <RefractionMaterial />
                  </mesh>
                  <mesh
                     name="Diamondmesh434300_1"
            castShadow
            receiveShadow
            geometry={nodes.Diamondmesh434300_1.geometry}
            material={materials['Metal.022']}
                  >
                    <TransitionMaterial {...metalProps} />
                  </mesh>
                </group>

                <mesh
                   name="REHCT"
          castShadow
          receiveShadow
          geometry={nodes.REHCT.geometry}
          material={materials['Material.031']}
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
          material={nodes.REHCLP.material}
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