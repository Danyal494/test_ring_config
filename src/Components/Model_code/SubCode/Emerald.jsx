import React from 'react'

const Emerald = ({ nodes, materials, orientationZ, basket, tipVisible, TransitionMaterial,caratSize, metalProps, RefractionMaterial, prongTips }) => {
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
const showECT  = showTip && prongTips === 'Claw'
const showERT  = showTip && prongTips === 'Rounded'
const showEPCT = showTip && prongTips === 'PetiteClaw'
const showETT  = showTip && prongTips === 'Tab'

const showEHCT  = isHalo && prongTips === 'Claw'
const showEHRT  = isHalo && prongTips === 'Rounded'
const showEHPCT = isHalo && prongTips === 'PetiteClaw'
const showEHTT  = isHalo && prongTips === 'Tab'

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
          material={materials['Material.008']}
          position={[0.135, 2.598, -0.007]}
          scale={[18.904, 18.904, 18.398]}
            >
              <RefractionMaterial />
            </mesh>

          {showECT &&(
   <mesh
                name="ECT"
          castShadow
          receiveShadow
          geometry={nodes.ECT.geometry}
          material={materials['Material.009']}
          position={[-0.253, 3.1, -0.565]}
          rotation={[-1.025, 0.314, -2.63]}
          scale={17.079}
                >
                <TransitionMaterial {...metalProps} />
              </mesh>
)}
           
               
      {showEPCT && (
  <mesh
  name="EPCT"
          castShadow
          receiveShadow
          geometry={nodes.EPCT.geometry}
          material={materials['Material.017']}
          position={[-0.259, 3.063, -0.561]}
          rotation={[-2.051, -0.398, 0.598]}
          scale={18.486}
    ><TransitionMaterial {...metalProps} /></mesh>
)}
     {showERT && (
  <mesh
     name="ERT"
          castShadow
          receiveShadow
          geometry={nodes.ERT.geometry}
          material={materials['Material.040']}
          position={[-0.255, 3.055, -0.555]}
          rotation={[-2.678, -0.103, 0.082]}
          scale={17.068}
    ><TransitionMaterial {...metalProps} /></mesh>
)}
{showETT && (
<mesh
        name="ETT"
          castShadow
          receiveShadow
          geometry={nodes.ETT.geometry}
          material={materials['Material.041']}
          position={[-0.255, 3.094, -0.559]}
          rotation={[-1.945, -0.314, 0.645]}
          scale={16.477}
      ><TransitionMaterial {...metalProps} /></mesh>
)} 

            {/* None, Basket, HiddenHalo */}
            {showCLP && (
              <mesh
                name="ECLP"
          castShadow
          receiveShadow
          geometry={nodes.ECLP.geometry}
          material={nodes.ECLP.material}
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
          material={nodes.ESB.material}
          position={[0.393, 2.776, -0.007]}
          rotation={[-2.743, 0.111, -2.826]}
          scale={[0.113, 0.137, 0.137]}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* HiddenHalo only */}
            {showHHD && (
              <group
               position={[-0.174, 2.753, -0.01]}
          rotation={[1.569, 0.093, 1.564]}
          scale={16.713}
              >
                <mesh
                   name="Diamondmesh434208"
            castShadow
            receiveShadow
            geometry={nodes.Diamondmesh434208.geometry}
            material={materials['Diamond.010']}
                >
                  <RefractionMaterial />
                </mesh>
                <mesh
               name="Diamondmesh434208_1"
            castShadow
            receiveShadow
            geometry={nodes.Diamondmesh434208_1.geometry}
            material={materials['Metal.010']}
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
          material={nodes.EBB.material}
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
          material={nodes.EHB.material}
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
            material={materials['Diamond.009']}
                  >
                    <RefractionMaterial />
                  </mesh>
                  <mesh
                    name="Diamondmesh434094_1"
            castShadow
            receiveShadow
            geometry={nodes.Diamondmesh434094_1.geometry}
            material={materials['Metal.009']}
                  >
                    <TransitionMaterial {...metalProps} />
                  </mesh>
                </group>

                <mesh
                 name="EHCT"
          castShadow
          receiveShadow
          geometry={nodes.EHCT.geometry}
          material={materials['Material.015']}
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
          material={nodes.EHCLP.material}
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