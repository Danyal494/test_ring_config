import React from 'react'

const Round = ({ nodes, materials, orientationZ, basket, tipVisible, TransitionMaterial,caratSize, metalProps, RefractionMaterial, prongTips }) => {
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
const showRCT  = showTip && prongTips === 'Claw'
const showRRT  = showTip && prongTips === 'Rounded'
const showRPCT = showTip && prongTips === 'PetiteClaw'
const showRTT  = showTip && prongTips === 'Tab'

const showRHCT  = isHalo && prongTips === 'Claw'
const showRHRT  = isHalo && prongTips === 'Rounded'
const showRHPCT = isHalo && prongTips === 'PetiteClaw'
const showRHTT  = isHalo && prongTips === 'Tab'

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
        <group rotation={[0, 0, 0]} position={[cx, cy, cz]}>
          <group position={[-cx, -cy, -cz]}>

            {/* Always visible */}
            <mesh
              name="Round_Final_1Carat"
              castShadow
              receiveShadow
              geometry={nodes.Round_Final_1Carat.geometry}
              position={[0.119,showHalo ? 2.656 : 2.48, 0.017]}
              scale={17.423}
            >
              <RefractionMaterial />
            </mesh>

           {showRCT &&(
   <mesh
                name="RCT"
          castShadow
          receiveShadow
          geometry={nodes.RCT.geometry}
          material={materials['Material.025']}
          position={[0.569, 2.986, 0.458]}
          rotation={[-1.059, -0.215, -2.916]}
          scale={12.631}
                >
                <TransitionMaterial {...metalProps} />
              </mesh>
)}
           
               
      {showRPCT && (
  <mesh
     name="RPCT"
          castShadow
          receiveShadow
          geometry={nodes.RPCT.geometry}
          material={materials['Material.057']}
          position={[-0.326, 3.011, -0.404]}
          rotation={[-1.945, -0.314, 0.645]}
          scale={16.428}
    ><TransitionMaterial {...metalProps} /></mesh>
)}
     {showRRT && (
  <mesh
    name="RTT"
          castShadow
          receiveShadow
          geometry={nodes.RTT.geometry}
          material={materials['Material.059']}
          position={[-0.334, 2.979, -0.413]}
          rotation={[-1.79, -0.187, 0.627]}
          scale={15.119}
    ><TransitionMaterial {...metalProps} /></mesh>
)}
{showRTT && (
<mesh
         name="RRT"
          castShadow
          receiveShadow
          geometry={nodes.RRT.geometry}
          material={materials['Material.058']}
          position={[-0.344, 2.965, -0.421]}
          rotation={[-2.576, -0.028, 0.214]}
          scale={15.119}
      ><TransitionMaterial {...metalProps} /></mesh>
)} 
            {/* None, Basket, HiddenHalo */}
            {showCLP && (
              <mesh
                 name="RCLP"
          castShadow
          receiveShadow
          geometry={nodes.RCLP.geometry}
          material={nodes.RCLP.material}
          position={[0.191, 2.701, 0.109]}
          rotation={[0, 0.244, -Math.PI / 2]}
          scale={0.153}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* Basket, HiddenHalo */}
            {showSB && (
              <mesh
                name="RSB"
          castShadow
          receiveShadow
          geometry={nodes.RSB.geometry}
          material={nodes.RSB.material}
          position={[0.129, 2.705, -0.277]}
          rotation={[2.413, -0.964, -3.139]}
          scale={[0.097, 0.119, 0.118]}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* HiddenHalo only */}
            {showHHD && (
              <group
              name="RHHD"
          position={[-0.066, 2.695, 0.371]}
          rotation={[-0.981, -0.042, 3.079]}
          scale={10.114}>
          <mesh
            name="Diamondmesh434331"
            castShadow
            receiveShadow
            geometry={nodes.Diamondmesh434331.geometry}
            material={materials['Diamond.017']}
                >
                  <RefractionMaterial />
                </mesh>
                <mesh
                   name="Diamondmesh434331_1"
            castShadow
            receiveShadow
            geometry={nodes.Diamondmesh434331_1.geometry}
            material={materials['Metal.017']}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>
              </group>
            )}

            {/* Bezel only */}
            {isBezel && (
              <mesh
              name="RBB"
          castShadow
          receiveShadow
          geometry={nodes.RBB.geometry}
          material={nodes.RBB.material}
          position={[0.128, 2.885, 0.02]}
          scale={0.562}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* Halo only */}
            {showHalo && (
              <>
                <mesh
                name="RHB"
          castShadow
          receiveShadow
          geometry={nodes.RHB.geometry}
          material={nodes.RHB.material}
          position={[0.128, 2.86, 0.02]}
          scale={[0.533, 0.477, 0.533]}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>

                <mesh
                   name="RHCLP"
          castShadow
          receiveShadow
          geometry={nodes.RHCLP.geometry}
          material={nodes.RHCLP.material}
          position={[0.191, 2.701, 0.109]}
          rotation={[0, 0.244, -Math.PI / 2]}
          scale={0.153}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>

                <group
                   name="RHD"
          position={[0.122, 3.333, 0.512]}
          rotation={[Math.PI / 2, 1.309, Math.PI / 2]}
          scale={[11.226, 13.281, 10.355]}>
          <mesh
            name="Diamondmesh434332"
            castShadow
            receiveShadow
            geometry={nodes.Diamondmesh434332.geometry}
            material={materials['Diamond.024']}
                  >
                    <RefractionMaterial />
                  </mesh>
                  <mesh
                     name="Diamondmesh434332_1"
            castShadow
            receiveShadow
            geometry={nodes.Diamondmesh434332_1.geometry}
            material={materials['Metal.024']}
                  >
                    <TransitionMaterial {...metalProps} />
                  </mesh>
                </group>

                <mesh
                  name="RHCT"
          castShadow
          receiveShadow
          geometry={nodes.RCT001.geometry}
          material={materials['Material.034']}
          position={[0.554, 3.18, 0.449]}
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

export default Round