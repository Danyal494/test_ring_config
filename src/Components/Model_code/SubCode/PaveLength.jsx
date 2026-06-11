import React from 'react'

const PaveLength = ({ nodes, materials, paveStyle, paveLength, TransitionMaterial, metalProps,RefractionMaterial }) => {
  // Only render anything when Petite French is active
  if (paveStyle !== 'PetiteFrench') return null

  const showHalf          = paveLength === 'Half'
  const showOneThird      = paveLength === 'OneThird'
  const showTwoThird      = paveLength === 'TwoThird'
  const showThreeQuarters = paveLength === 'ThreeQuarters'
  const showEternity      = paveLength === 'Eternity'

  return (
    <group>

      {showOneThird && (
        <group
          name="One_Third"
          position={[0.157, 1.195, -2.065]}
          rotation={[1.57, 0.262, -Math.PI / 2]}
          scale={[14.756, 17.456, 13.61]}
        >
          <mesh name="Diamondmesh434034"   castShadow receiveShadow geometry={nodes.Diamondmesh434034.geometry}>
          <RefractionMaterial/>
          </mesh>
          <mesh name="Diamondmesh434034_1" castShadow receiveShadow geometry={nodes.Diamondmesh434034_1.geometry}>
            <TransitionMaterial {...metalProps} />
          </mesh>
        </group>
      )}

      {showHalf && (
        <group
          name="Half"
          position={[0.157, 1.196, -2.065]}
          rotation={[1.57, 0.262, -Math.PI / 2]}
          scale={[14.756, 17.456, 13.61]}
        >
          <mesh name="Diamondmesh434033"   castShadow receiveShadow geometry={nodes.Diamondmesh434033.geometry}>
              <RefractionMaterial/>
          </mesh>
          <mesh name="Diamondmesh434033_1" castShadow receiveShadow geometry={nodes.Diamondmesh434033_1.geometry}>
            <TransitionMaterial {...metalProps} />
          </mesh>
        </group>
      )}

      {showTwoThird && (
        <group
          name="Two_Third"
          position={[0.157, 1.195, -2.065]}
          rotation={[1.57, 0.262, -Math.PI / 2]}
          scale={[14.756, 17.456, 13.61]}
        >
          <mesh name="Diamondmesh434035"   castShadow receiveShadow geometry={nodes.Diamondmesh434035.geometry}>
               <RefractionMaterial/>
          </mesh>
          <mesh name="Diamondmesh434035_1" castShadow receiveShadow geometry={nodes.Diamondmesh434035_1.geometry}>
            <TransitionMaterial {...metalProps} />
          </mesh>
        </group>
      )}

      {showThreeQuarters && (
        <group
          name="Three_Quarters"
          position={[0.157, 1.198, -2.065]}
          rotation={[1.57, 0.262, -Math.PI / 2]}
          scale={[14.756, 17.456, 13.61]}
        >
          <mesh name="Diamondmesh434037"   castShadow receiveShadow geometry={nodes.Diamondmesh434037.geometry}>
               <RefractionMaterial/>
          </mesh>
          <mesh name="Diamondmesh434037_1" castShadow receiveShadow geometry={nodes.Diamondmesh434037_1.geometry}>
            <TransitionMaterial {...metalProps} />
          </mesh>
        </group>
      )}

      {showEternity && (
        <group
          name="Eternity"
          position={[0.157, 1.196, -2.065]}
          rotation={[1.57, 0.262, -Math.PI / 2]}
          scale={[14.756, 17.456, 13.61]}
        >
          <mesh name="Diamondmesh434039"   castShadow receiveShadow geometry={nodes.Diamondmesh434039.geometry}>
                <RefractionMaterial/>
          </mesh>
          <mesh name="Diamondmesh434039_1" castShadow receiveShadow geometry={nodes.Diamondmesh434039_1.geometry}>
            <TransitionMaterial {...metalProps} />
          </mesh>
        </group>
      )}

    </group>
  )
}

export default PaveLength