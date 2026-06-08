import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Ring Update REV6.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Cylinder002"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials['Material.026']}
        position={[0.134, 1.205, -0.014]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.138, 0.055, 0.138]}
      />
      <mesh
        name="Asscher_Final_1Carat001"
        castShadow
        receiveShadow
        geometry={nodes.Asscher_Final_1Carat001.geometry}
        material={materials['wire_255255255.001']}
        position={[0.135, 2.626, -0.01]}
        scale={16.526}
      />
      <mesh
        name="ACT"
        castShadow
        receiveShadow
        geometry={nodes.ACT.geometry}
        material={materials['Material.011']}
        position={[-0.283, 3.061, -0.417]}
        rotation={[-1.97, -0.279, 0.647]}
        scale={15.119}
      />
      <mesh
        name="ACLP"
        castShadow
        receiveShadow
        geometry={nodes.ACLP.geometry}
        material={nodes.ACLP.material}
        position={[0.128, 2.722, -0.005]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.158}
      />
      <mesh
        name="ASB"
        castShadow
        receiveShadow
        geometry={nodes.ASB.geometry}
        material={nodes.ASB.material}
        position={[0.388, 2.779, 0.012]}
        rotation={[-1.519, -1.158, -1.511]}
        scale={[0.113, 0.137, 0.137]}
      />
      <group
        name="AHHD"
        position={[-0.02, 2.758, -0.306]}
        rotation={[1.493, 0, Math.PI]}
        scale={10.521}>
        <mesh
          name="Diamondmesh434011"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434011.geometry}
          material={materials['Diamond.001']}
        />
        <mesh
          name="Diamondmesh434011_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434011_1.geometry}
          material={materials['Metal.001']}
        />
      </group>
      <mesh
        name="ABB"
        castShadow
        receiveShadow
        geometry={nodes.ABB.geometry}
        material={nodes.ABB.material}
        position={[0.138, 2.986, -0.014]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.517, -0.098, -0.517]}
      />
      <mesh
        name="ABBCLP"
        castShadow
        receiveShadow
        geometry={nodes.ABBCLP.geometry}
        material={nodes.ABBCLP.material}
        position={[0.138, 2.782, -0.014]}
        rotation={[Math.PI, -0.006, Math.PI / 2]}
        scale={0.184}
      />
      <mesh
        name="AHB"
        castShadow
        receiveShadow
        geometry={nodes.AHB.geometry}
        material={nodes.AHB.material}
        position={[0.138, 2.862, -0.014]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.529, -0.053, -0.529]}
      />
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
        />
        <mesh
          name="Diamondmesh434031_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434031_1.geometry}
          material={materials['Metal.002']}
        />
      </group>
      <mesh
        name="AHCT"
        castShadow
        receiveShadow
        geometry={nodes.AHCT.geometry}
        material={materials['Material.007']}
        position={[0.564, 3.153, 0.421]}
        rotation={[-1.404, -0.858, 2.542]}
        scale={16.349}
      />
      <mesh
        name="AHCLP"
        castShadow
        receiveShadow
        geometry={nodes.AHCLP.geometry}
        material={nodes.AHCLP.material}
        position={[0.137, 2.586, -0.103]}
        rotation={[-Math.PI, 0.254, Math.PI / 2]}
        scale={0.146}
      />
     
     
      <mesh
        name="Cushion_Final_1Carat001"
        castShadow
        receiveShadow
        geometry={nodes.Cushion_Final_1Carat001.geometry}
        material={materials['wire_255255255.005']}
        position={[0.119, 2.591, -0.03]}
        scale={16.893}
      />
      <mesh
        name="CCLP"
        castShadow
        receiveShadow
        geometry={nodes.CCLP.geometry}
        material={nodes.CCLP.material}
        position={[0.128, 2.722, -0.005]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.158}
      />
      <mesh
        name="CCT"
        castShadow
        receiveShadow
        geometry={nodes.CCT.geometry}
        material={materials['Material.004']}
        position={[-0.287, 3.061, -0.414]}
        rotation={[-1.945, -0.314, 0.645]}
        scale={15.119}
      />
      <mesh
        name="CSB"
        castShadow
        receiveShadow
        geometry={nodes.CSB.geometry}
        material={nodes.CSB.material}
        position={[-0.114, 2.776, -0.06]}
        rotation={[-0.365, -0.195, 0.536]}
        scale={[0.116, 0.141, 0.141]}
      />
      <group
        name="CHHD"
        position={[-0.024, 2.745, -0.355]}
        rotation={[1.397, 0.046, 2.863]}
        scale={11.403}>
        <mesh
          name="Diamondmesh434112"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434112.geometry}
          material={materials['Diamond.003']}
        />
        <mesh
          name="Diamondmesh434112_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434112_1.geometry}
          material={materials['Metal.004']}
        />
      </group>
    
      <mesh
        name="CushionWithNewDepth"
        castShadow
        receiveShadow
        geometry={nodes.CushionWithNewDepth.geometry}
        material={nodes.CushionWithNewDepth.material}
        position={[0.136, 2.62, -0.009]}
        scale={17.009}
      />
      <mesh
        name="CECT"
        castShadow
        receiveShadow
        geometry={nodes.CECT.geometry}
        material={materials['Material.002']}
        position={[-0.243, 3.113, -0.502]}
        rotation={[-2.151, -0.379, 0.484]}
        scale={14.723}
      />
      <mesh
        name="CECLP"
        castShadow
        receiveShadow
        geometry={nodes.CECLP.geometry}
        material={nodes.CECLP.material}
        position={[0.128, 2.722, -0.005]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.158}
      />
      <mesh
        name="CESB"
        castShadow
        receiveShadow
        geometry={nodes.CESB.geometry}
        material={nodes.CESB.material}
        position={[0.113, 2.787, 0.245]}
        rotation={[0.489, 0, 0]}
        scale={0.289}
      />
     
     
     
     
      <mesh
        name="Radiant_Final_1Carat"
        castShadow
        receiveShadow
        geometry={nodes.Radiant_Final_1Carat.geometry}
        material={materials['wire_255255255.015']}
        position={[0.125, 2.451, 0]}
        scale={17.687}
      />
      <mesh
        name="RACT"
        castShadow
        receiveShadow
        geometry={nodes.RACT.geometry}
        material={materials['Material.023']}
        position={[-0.307, 2.986, 0.464]}
        rotation={[-1.812, -0.501, 1.687]}
        scale={12.631}
      />
      <mesh
        name="RACLP"
        castShadow
        receiveShadow
        geometry={nodes.RACLP.geometry}
        material={nodes.RACLP.material}
        position={[0.039, 2.701, 0.084]}
        rotation={[0, -1.318, -Math.PI / 2]}
        scale={0.153}
      />
      <mesh
        name="RASB"
        castShadow
        receiveShadow
        geometry={nodes.RASB.geometry}
        material={nodes.RASB.material}
      
      />
      <group
        name="RAHHD"
        position={[-0.245, 2.7, 0.214]}
        rotation={[-1.563, -0.591, 1.585]}
        scale={12.219}>
        <mesh
          name="Diamondmesh434185"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434185.geometry}
          material={materials['Diamond.016']}
        />
        <mesh
          name="Diamondmesh434185_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434185_1.geometry}
          material={materials['Metal.016']}
        />
      </group>
      <mesh
        name="RABB"
        castShadow
        receiveShadow
        geometry={nodes.RABB.geometry}
        material={nodes.RABB.material}
        position={[0.169, 2.893, -0.122]}
        scale={[0.357, 0.082, 0.357]}
      />
   
      <mesh
        name="Radiant_Elongated_Diamond"
        castShadow
        receiveShadow
        geometry={nodes.Radiant_Elongated_Diamond.geometry}
        material={materials['Material.033']}
        position={[0.152, 2.489, -0.014]}
        scale={16.808}
      />
      <mesh
        name="RECT"
        castShadow
        receiveShadow
        geometry={nodes.RECT.geometry}
        material={materials['Material.032']}
        position={[-0.264, 2.986, 0.503]}
        rotation={[-1.761, -0.521, 1.791]}
        scale={12.631}
      />
      <mesh
        name="RECLP"
        castShadow
        receiveShadow
        geometry={nodes.RECLP.geometry}
        material={nodes.RECLP.material}
        position={[0.045, 2.701, 0.092]}
        rotation={[0, -1.225, -Math.PI / 2]}
        scale={0.153}
      />
      <mesh
        name="RESB"
        castShadow
        receiveShadow
        geometry={nodes.RESB.geometry}
        material={nodes.RESB.material}
        position={[-0.125, 2.71, 0.05]}
        rotation={[0.415, -0.343, 0.782]}
        scale={[0.097, 0.119, 0.118]}
      />
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
        />
        <mesh
          name="Diamondmesh434316_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434316_1.geometry}
          material={materials['Metal.023']}
        />
      </group>
      <mesh
        name="REBB"
        castShadow
        receiveShadow
        geometry={nodes.REBB.geometry}
        material={nodes.REBB.material}
        position={[0.128, 2.86, 0.02]}
        scale={[0.463, 0.087, 0.463]}
      />
    
      <mesh
        name="Round_Final_1Carat"
        castShadow
        receiveShadow
        geometry={nodes.Round_Final_1Carat.geometry}
        material={materials.wire_204204204}
        position={[0.119, 2.48, 0.017]}
        scale={17.423}
      />
      <mesh
        name="RCT"
        castShadow
        receiveShadow
        geometry={nodes.RCT.geometry}
        material={materials['Material.025']}
        position={[0.569, 2.986, 0.458]}
        rotation={[-1.059, -0.215, -2.916]}
        scale={12.631}
      />
      <mesh
        name="RCLP"
        castShadow
        receiveShadow
        geometry={nodes.RCLP.geometry}
        material={nodes.RCLP.material}
        position={[0.191, 2.701, 0.109]}
        rotation={[0, 0.244, -Math.PI / 2]}
        scale={0.153}
      />
      <mesh
        name="RSB"
        castShadow
        receiveShadow
        geometry={nodes.RSB.geometry}
        material={nodes.RSB.material}
        position={[-0.14, 2.71, 0.05]}
        rotation={[0.415, -0.343, 0.782]}
        scale={[0.097, 0.119, 0.118]}
      />
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
        />
        <mesh
          name="Diamondmesh434331_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434331_1.geometry}
          material={materials['Metal.017']}
        />
      </group>
      <mesh
        name="RBB"
        castShadow
        receiveShadow
        geometry={nodes.RBB.geometry}
        material={nodes.RBB.material}
        position={[0.128, 2.885, 0.02]}
        scale={0.562}
      />
    
    </group>
  )
}

useGLTF.preload('/Ring Update REV6.glb')