import React from 'react'

const Princess = ({ nodes, materials, orientationZ, basket, tipVisible, TransitionMaterial,caratSize, metalProps, RefractionMaterial, prongTips }) => {
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
const showPCT  = showTip && prongTips === 'Claw'
const showPRT  = showTip && prongTips === 'Rounded'
const showPPCT = showTip && prongTips === 'PetiteClaw'
const showPTT  = showTip && prongTips === 'Tab'

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
            name="Princess_Final_1Carat"
          castShadow
          receiveShadow
          geometry={nodes.Princess_Final_1Carat.geometry}
          material={materials['wire_255255255.013']}
          position={[0.135, !showHalo ? 2.556 : 2.658, -0.008]}
          scale={15.663}
            >
              <RefractionMaterial />
            </mesh>

          {showPCT &&(
   <mesh
                name="PCT"
          castShadow
          receiveShadow
          geometry={nodes.PCT.geometry}
          material={materials['Material.022']}
          position={[-0.307, 2.986, 0.464]}
          rotation={[-1.812, -0.501, 1.687]}
          scale={12.631}
                >
                <TransitionMaterial {...metalProps} />
              </mesh>
)}
           
               
       {/* {showPPCT && (
  <mesh
    name="APCT"
    castShadow receiveShadow
    geometry={nodes.APCT.geometry}
    position={[-0.264, 3.117, -0.416]}
    rotation={[-2.086, -0.316, 0.64]}
    scale={14.346}
    ><TransitionMaterial {...metalProps} /></mesh>
)}
     {showPRT && (
  <mesh
    name="ART"
    castShadow receiveShadow
    geometry={nodes.ART.geometry}
    position={[-0.259, 3.092, -0.422]}
    rotation={[-2.213, -0.437, 0.679]}
    scale={13.749}
    ><TransitionMaterial {...metalProps} /></mesh>
)}
{showPTT && (
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
)} */}

            {/* None, Basket, HiddenHalo */}
            {showCLP && (
              <mesh
                name="PCLP"
          castShadow
          receiveShadow
          geometry={nodes.PCLP.geometry}
          material={nodes.PCLP.material}
          position={[0.039, 2.701, 0.084]}
          rotation={[0, -1.318, -Math.PI / 2]}
          scale={0.153}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* Basket, HiddenHalo */}
            {showSB && (
              <mesh
                 name="PSB"
          castShadow
          receiveShadow
          geometry={nodes.PSB.geometry}
          material={nodes.PSB.material}
          position={[0.122, 2.667, -0.304]}
          rotation={[2.413, -0.964, -3.139]}
          scale={[0.105, 0.128, 0.128]}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* HiddenHalo only */}
            {showHHD && (
              <group
                name="PHHD"
          position={[0.29, 2.674, 0.319]}
          rotation={[-0.979, 0.006, -3.132]}
          scale={10.513}
              >
                <mesh
           name="Diamondmesh434181"
            castShadow
            receiveShadow
            geometry={nodes.Diamondmesh434181.geometry}
            material={materials['Diamond.015']}
                >
                  <RefractionMaterial />
                </mesh>
                <mesh
                 name="Diamondmesh434181_1"
            castShadow
            receiveShadow
            geometry={nodes.Diamondmesh434181_1.geometry}
            material={materials['Metal.015']}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>
              </group>
            )}

            {/* Bezel only */}
            {isBezel && (
              <mesh
              name="PBB"
          castShadow
          receiveShadow
          geometry={nodes.PBB.geometry}
          material={nodes.PBB.material}
          position={[0.128, 2.916, 0.001]}
          scale={[0.524, 0.092, 0.524]}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* Halo only */}
            {showHalo && (
              <>
                <mesh
                   name="PHB"
          castShadow
          receiveShadow
          geometry={nodes.PHB.geometry}
          material={nodes.PHB.material}
          position={[0.138, 2.818, -0.014]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.529, -0.053, -0.529]}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>

                <group
                  name="PHD"
          position={[0.315, 2.869, 0.506]}
          rotation={[-2.772, 0.005, -3.138]}
          scale={14.386}>
          <mesh
            name="Diamondmesh434241"
            castShadow
            receiveShadow
            geometry={nodes.Diamondmesh434241.geometry}
            material={materials['Diamond.020']}
                  >
                    <RefractionMaterial />
                  </mesh>
                  <mesh
                     name="Diamondmesh434241_1"
            castShadow
            receiveShadow
            geometry={nodes.Diamondmesh434241_1.geometry}
            material={materials['Metal.020']}
                  >
                    <TransitionMaterial {...metalProps} />
                  </mesh>
                </group>

                <mesh
                 name="PHCLP"
          castShadow
          receiveShadow
          geometry={nodes.PHCLP.geometry}
          material={nodes.PHCLP.material}
          position={[0.137, 2.586, -0.103]}
          rotation={[-Math.PI, 0.254, Math.PI / 2]}
          scale={0.146}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>

                <mesh
                  name="PHCT"
          castShadow
          receiveShadow
          geometry={nodes.PHCT.geometry}
          material={materials['Material.029']}
          position={[0.569, 3.126, 0.424]}
          rotation={[-1.087, -0.276, -3.031]}
          scale={12.626}
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

export default Princess