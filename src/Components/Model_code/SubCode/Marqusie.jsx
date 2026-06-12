import React from 'react'

const Marquise= ({ nodes, materials, orientationZ, basket, tipVisible, TransitionMaterial,caratSize, metalProps, RefractionMaterial, prongTips }) => {
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
const showMCT  = showTip && prongTips === 'Claw'
const showMRT  = showTip && prongTips === 'Rounded'
const showMPCT = showTip && prongTips === 'PetiteClaw'
const showMTT  = showTip && prongTips === 'Tab'

const showMHCT  = isHalo && prongTips === 'Claw'
const showMHRT  = isHalo && prongTips === 'Rounded'
const showMHPCT = isHalo && prongTips === 'PetiteClaw'
const showMHTT  = isHalo && prongTips === 'Tab'

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
              name="Marquise_Final_1Carat"
              castShadow
              receiveShadow
              geometry={nodes.Marquise_Final_1Carat.geometry}
              position={[0.134, 2.551, 0.009]}
              rotation={[0, 1.571, 0]}
              scale={16.615}
            >
              <RefractionMaterial />
            </mesh>

           {showMCT &&(
   <mesh
                 name="MCT"
          castShadow
          receiveShadow
          geometry={nodes.MCT.geometry}
          material={materials['Material.012']}
          position={[1.011, 2.988, 0.011]}
          rotation={[-1.028, 0.105, -2.38]}
          scale={12.513}
                >
                <TransitionMaterial {...metalProps} />
              </mesh>
)}
           
               
       {showMPCT && (
  <mesh
        name="MPCT"
          castShadow
          receiveShadow
          geometry={nodes.MPCT.geometry}
          material={materials['Material.018']}
          position={[-0.725, 2.994, 0.001]}
          rotation={[-1.537, -0.332, 1.716]}
          scale={13.83}
    ><TransitionMaterial {...metalProps} /></mesh>
)}
     {showMRT && (
  <mesh
 name="MRT"
          castShadow
          receiveShadow
          geometry={nodes.MRT.geometry}
          material={materials['Material.014']}
          position={[0.083, 2.828, 0.02]}
          rotation={[-2.406, -0.498, 0.627]}
          scale={13.749}
    ><TransitionMaterial {...metalProps} /></mesh>
)}
{showMTT && (
<mesh
        name="MTT"
          castShadow
          receiveShadow
          geometry={nodes.MTT.geometry}
          material={materials['Material.013']}
          position={[-0.726, 3.001, 0.009]}
          rotation={[-1.553, -0.305, 1.594]}
          scale={13.749}
      ><TransitionMaterial {...metalProps} /></mesh>
)}

            {/* None, Basket, HiddenHalo */}
            {showCLP && (
              <mesh
                name="MCLP"
          castShadow
          receiveShadow
          geometry={nodes.MCLP.geometry}
          material={nodes.MCLP.material}
          position={[0.134, 2.701, 0.01]}
          rotation={[-Math.PI, 1.275, Math.PI / 2]}
          scale={0.153}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* Basket, HiddenHalo */}
            {showSB && (
              <mesh
                name="MSB"
                castShadow
                receiveShadow
                geometry={nodes.MSB.geometry}
                position={[0.161, 2.71, -0.265]}
                rotation={[2.56, -0.953, -3.049]}
                scale={[0.097, 0.119, 0.118]}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* HiddenHalo only */}
            {showHHD && (
              <group
                name="MHHD"
                position={[0.722, 2.692, -0.124]}
                rotation={[1.598, 0.001, -2.359]}
                scale={13.767}
              >
                <mesh
                  name="Diamondmesh434090"
                  castShadow
                  receiveShadow
                  geometry={nodes.Diamondmesh434090.geometry}
                >
                  <RefractionMaterial />
                </mesh>
                <mesh
                  name="Diamondmesh434090_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Diamondmesh434090_1.geometry}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>
              </group>
            )}

            {/* Bezel only */}
            {isBezel && (
              <mesh
                name="MBB"
                castShadow
                receiveShadow
                geometry={nodes.MBB.geometry}
                position={[0.134, 2.852, 0.01]}
                rotation={[-Math.PI, 0.79, -Math.PI]}
                scale={[0.666, 0.101, 0.663]}
              >
                <TransitionMaterial {...metalProps} />
              </mesh>
            )}

            {/* Halo only */}
            {showHalo && (
              <>
                <mesh
                  name="MHB"
                  castShadow
                  receiveShadow
                  geometry={nodes.MHB.geometry}
                  position={[0.134, 2.675, 0.01]}
                  rotation={[-Math.PI, 0.79, -Math.PI]}
                  scale={[0.752, 0.07, 0.748]}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>

                <group
                  name="MHD"
                  position={[0.121, 3.076, 0.512]}
                  rotation={[Math.PI / 2, 1.309, Math.PI / 2]}
                  scale={[11.226, 13.352, 11.226]}
                >
                  <mesh
                    name="Diamondmesh434091"
                    castShadow
                    receiveShadow
                    geometry={nodes.Diamondmesh434091.geometry}
                  >
                    <RefractionMaterial />
                  </mesh>
                  <mesh
                    name="Diamondmesh434091_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Diamondmesh434091_1.geometry}
                  >
                    <TransitionMaterial {...metalProps} />
                  </mesh>
                </group>

                <mesh
                  name="MHCLP"
                  castShadow
                  receiveShadow
                  geometry={nodes.MHCLP.geometry}
                  position={[0.475, 2.769, -0.416]}
                  rotation={[0, 0.086, -Math.PI / 2]}
                  scale={0.25}
                >
                  <TransitionMaterial {...metalProps} />
                </mesh>

                <mesh
                  name="MHCT"
                  castShadow
                  receiveShadow
                  geometry={nodes.MHCT.geometry}
                  position={[1.043, 2.952, 0.013]}
                  rotation={[-0.811, -0.475, -2.837]}
                  scale={15.275}
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

export default Marquise