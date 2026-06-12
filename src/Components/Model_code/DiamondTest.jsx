import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/TEST5.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Squareband"
        castShadow
        receiveShadow
        geometry={nodes.Squareband.geometry}
        material={materials['Material.026']}
        position={[0.134, 1.205, -0.014]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.138, 0.055, 0.138]}
      />
      <mesh
        name="Circleband"
        castShadow
        receiveShadow
        geometry={nodes.Circleband.geometry}
        material={nodes.Circleband.material}
        position={[0.132, 1.2, -0.017]}
        scale={1.015}
      />
      <mesh
        name="Cathedral"
        castShadow
        receiveShadow
        geometry={nodes.Cathedral.geometry}
        material={nodes.Cathedral.material}
        position={[0.128, 2.342, -0.546]}
        rotation={[0.016, 1.571, 0]}
        scale={[0.548, 0.548, 0.467]}
      />
      <group
        name="Frontsurpisestone"
        position={[0.092, 2.293, 0.016]}
        rotation={[0, -1.571, 0]}
        scale={7.199}>
        <mesh
          name="SurpriseStoneDiamond"
          castShadow
          receiveShadow
          geometry={nodes.SurpriseStoneDiamond.geometry}
          material={materials.Diamond}
        />
        <mesh
          name="SurpriseStoneDiamond_1"
          castShadow
          receiveShadow
          geometry={nodes.SurpriseStoneDiamond_1.geometry}
          material={materials.Metal}
        />
      </group>
      <group
        name="Backsurpisestone"
        position={[0.169, 2.299, 0.016]}
        rotation={[0, 1.571, 0]}
        scale={7.199}>
        <mesh
          name="SurpriseStoneDiamond001"
          castShadow
          receiveShadow
          geometry={nodes.SurpriseStoneDiamond001.geometry}
          material={materials.Diamond}
        />
        <mesh
          name="SurpriseStoneDiamond001_1"
          castShadow
          receiveShadow
          geometry={nodes.SurpriseStoneDiamond001_1.geometry}
          material={materials.Metal}
        />
      </group>
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
        name="APCT"
        castShadow
        receiveShadow
        geometry={nodes.APCT.geometry}
        material={materials['Material.001']}
        position={[-0.264, 3.117, -0.416]}
        rotation={[-2.086, -0.316, 0.64]}
        scale={14.346}
      />
      <mesh
        name="ART"
        castShadow
        receiveShadow
        geometry={nodes.ART.geometry}
        material={materials['Material.005']}
        position={[-0.259, 3.092, -0.422]}
        rotation={[-2.213, -0.437, 0.679]}
        scale={13.749}
      />
      <mesh
        name="ATT"
        castShadow
        receiveShadow
        geometry={nodes.ATT.geometry}
        material={materials['Material.010']}
        position={[-0.254, 3.129, -0.406]}
        rotation={[-1.875, -0.199, 0.735]}
        scale={13.778}
      />
      <mesh
        name="ASB"
        castShadow
        receiveShadow
        geometry={nodes.ASB.geometry}
        material={nodes.ASB.material}
        position={[0.133, 2.793, 0.243]}
        rotation={[-2.729, -0.021, -3.129]}
        scale={[0.113, 0.137, 0.137]}
      />
      <group
        name="AHHD"
        position={[-0.02, 2.779, -0.306]}
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
        name="AHPCT"
        castShadow
        receiveShadow
        geometry={nodes.AHPCT.geometry}
        material={materials['Material.036']}
        position={[0.537, 3.108, 0.404]}
        rotation={[-1.424, 0.109, -2.347]}
        scale={16.349}
      />
      <mesh
        name="AHRT"
        castShadow
        receiveShadow
        geometry={nodes.AHRT.geometry}
        material={materials['Material.060']}
        position={[0.537, 3.108, 0.404]}
        rotation={[-1.424, 0.109, -2.347]}
        scale={16.349}
      />
      <mesh
        name="AHTT"
        castShadow
        receiveShadow
        geometry={nodes.AHTT.geometry}
        material={materials['Material.061']}
        position={[0.537, 3.108, 0.404]}
        rotation={[-1.424, 0.109, -2.347]}
        scale={16.349}
      />
      <mesh
        name="Marquise_Final_1Carat"
        castShadow
        receiveShadow
        geometry={nodes.Marquise_Final_1Carat.geometry}
        material={materials['wire_255255255.009']}
        position={[0.134, 2.551, 0.009]}
        rotation={[0, 1.571, 0]}
        scale={16.615}
      />
      <mesh
        name="MCLP"
        castShadow
        receiveShadow
        geometry={nodes.MCLP.geometry}
        material={nodes.MCLP.material}
        position={[0.134, 2.701, 0.01]}
        rotation={[-Math.PI, 1.275, Math.PI / 2]}
        scale={0.153}
      />
      <mesh
        name="MCT"
        castShadow
        receiveShadow
        geometry={nodes.MCT.geometry}
        material={materials['Material.012']}
        position={[1.011, 2.988, 0.011]}
        rotation={[-1.028, 0.105, -2.38]}
        scale={12.513}
      />
      <mesh
        name="MPCT001"
        castShadow
        receiveShadow
        geometry={nodes.MPCT001.geometry}
        material={materials['Material.018']}
        position={[-0.725, 2.994, 0.001]}
        rotation={[-1.537, -0.332, 1.716]}
        scale={13.83}
      />
      <mesh
        name="MRT001"
        castShadow
        receiveShadow
        geometry={nodes.MRT001.geometry}
        material={materials['Material.014']}
        position={[0.083, 2.828, 0.02]}
        rotation={[-2.406, -0.498, 0.627]}
        scale={13.749}
      />
      <mesh
        name="MTT001"
        castShadow
        receiveShadow
        geometry={nodes.MTT001.geometry}
        material={materials['Material.013']}
        position={[-0.726, 3.001, 0.009]}
        rotation={[-1.553, -0.305, 1.594]}
        scale={13.749}
      />
      <mesh
        name="MSB"
        castShadow
        receiveShadow
        geometry={nodes.MSB.geometry}
        material={nodes.MSB.material}
        position={[0.161, 2.71, -0.265]}
        rotation={[2.56, -0.953, -3.049]}
        scale={[0.097, 0.119, 0.118]}
      />
      <group
        name="MHHD"
        position={[0.722, 2.692, -0.124]}
        rotation={[1.598, 0.001, -2.359]}
        scale={13.767}>
        <mesh
          name="Diamondmesh434090"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434090.geometry}
          material={materials['Diamond.004']}
        />
        <mesh
          name="Diamondmesh434090_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434090_1.geometry}
          material={materials['Metal.003']}
        />
      </group>
      <mesh
        name="MBB"
        castShadow
        receiveShadow
        geometry={nodes.MBB.geometry}
        material={nodes.MBB.material}
        position={[0.134, 2.852, 0.01]}
        rotation={[-Math.PI, 0.79, -Math.PI]}
        scale={[0.666, 0.101, 0.663]}
      />
      <mesh
        name="MHB"
        castShadow
        receiveShadow
        geometry={nodes.MHB.geometry}
        material={nodes.MHB.material}
        position={[0.134, 2.675, 0.01]}
        rotation={[-Math.PI, 0.79, -Math.PI]}
        scale={[0.752, 0.07, 0.748]}
      />
      <group
        name="MHD"
        position={[0.121, 3.076, 0.512]}
        rotation={[Math.PI / 2, 1.309, Math.PI / 2]}
        scale={[11.226, 13.352, 11.226]}>
        <mesh
          name="Diamondmesh434091"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434091.geometry}
          material={materials['Diamond.008']}
        />
        <mesh
          name="Diamondmesh434091_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434091_1.geometry}
          material={materials['Metal.008']}
        />
      </group>
      <mesh
        name="MHCLP"
        castShadow
        receiveShadow
        geometry={nodes.MHCLP.geometry}
        material={nodes.MHCLP.material}
        position={[0.475, 2.769, -0.416]}
        rotation={[0, 0.086, -Math.PI / 2]}
        scale={0.25}
      />
      <mesh
        name="MHCT"
        castShadow
        receiveShadow
        geometry={nodes.MHCT.geometry}
        material={materials['Material.006']}
        position={[1.043, 2.952, 0.013]}
        rotation={[-0.811, -0.475, -2.837]}
        scale={15.275}
      />
      <mesh
        name="MHRT002"
        castShadow
        receiveShadow
        geometry={nodes.MHRT002.geometry}
        material={materials['Material.069']}
        position={[0.605, 2.631, -0.05]}
        rotation={[-1.551, 0.189, -1.535]}
        scale={17.94}
      />
      <mesh
        name="MHPCT003"
        castShadow
        receiveShadow
        geometry={nodes.MHPCT003.geometry}
        material={materials['Material.070']}
        position={[1.084, 3.009, 0.087]}
        rotation={[-1.538, 0.25, -1.604]}
        scale={15.275}
      />
      <mesh
        name="MHTT003"
        castShadow
        receiveShadow
        geometry={nodes.MHTT003.geometry}
        material={materials['Material.068']}
        position={[1.086, 3.005, 0.084]}
        rotation={[-1.538, 0.25, -1.604]}
        scale={16.17}
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
        name="CPCT003"
        castShadow
        receiveShadow
        geometry={nodes.CPCT003.geometry}
        material={materials['Material.024']}
        position={[-0.267, 3.125, -0.405]}
        rotation={[-1.945, -0.314, 0.645]}
        scale={15.119}
      />
      <mesh
        name="CRT001"
        castShadow
        receiveShadow
        geometry={nodes.CRT001.geometry}
        material={materials['Material.028']}
        position={[-0.273, 3.069, -0.419]}
        rotation={[-2.576, -0.028, 0.214]}
        scale={15.119}
      />
      <mesh
        name="CTT001"
        castShadow
        receiveShadow
        geometry={nodes.CTT001.geometry}
        material={materials['Material.035']}
        position={[-0.284, 3.096, -0.423]}
        rotation={[-1.945, -0.314, 0.645]}
        scale={15.119}
      />
      <mesh
        name="CSB"
        castShadow
        receiveShadow
        geometry={nodes.CSB.geometry}
        material={nodes.CSB.material}
        position={[0.367, 2.776, -0.007]}
        rotation={[-2.777, 0.198, -2.607]}
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
        name="CBB"
        castShadow
        receiveShadow
        geometry={nodes.CBB.geometry}
        material={nodes.CBB.material}
        position={[0.128, 3.163, 0.02]}
        scale={[0.563, 0.797, 0.563]}
      />
      <mesh
        name="CHCLP"
        castShadow
        receiveShadow
        geometry={nodes.CHCLP.geometry}
        material={nodes.CHCLP.material}
        position={[0.137, 2.586, -0.103]}
        rotation={[-Math.PI, 0.254, Math.PI / 2]}
        scale={0.146}
      />
      <mesh
        name="CHB"
        castShadow
        receiveShadow
        geometry={nodes.CHB.geometry}
        material={nodes.CHB.material}
        position={[0.124, 2.946, 0.023]}
        scale={[0.561, 0.459, 0.551]}
      />
      <group
        name="CHD"
        position={[-0.192, 2.965, -0.562]}
        rotation={[-0.275, 0.269, 0.08]}
        scale={15.661}>
        <mesh
          name="Diamondmesh434160"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434160.geometry}
          material={materials['Diamond.018']}
        />
        <mesh
          name="Diamondmesh434160_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434160_1.geometry}
          material={materials['Metal.018']}
        />
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
      />
      <mesh
        name="CHRT001"
        castShadow
        receiveShadow
        geometry={nodes.CHRT001.geometry}
        material={materials['Material.066']}
        position={[0.562, 3.111, -0.403]}
        rotation={[-1.104, 0.414, -2.326]}
        scale={17.94}
      />
      <mesh
        name="CHPCT001"
        castShadow
        receiveShadow
        geometry={nodes.CHPCT001.geometry}
        material={materials['Material.065']}
        position={[0.532, 3.153, 0.543]}
        rotation={[-1.104, 0.414, -2.326]}
        scale={17.94}
      />
      <mesh
        name="CHTT001"
        castShadow
        receiveShadow
        geometry={nodes.CHTT001.geometry}
        material={materials['Material.067']}
        position={[0.54, 3.161, 0.541]}
        rotation={[-1.104, 0.414, -2.326]}
        scale={17.94}
      />
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
        name="CETT"
        castShadow
        receiveShadow
        geometry={nodes.CETT.geometry}
        material={materials['Material.037']}
        position={[-0.243, 3.057, -0.505]}
        rotation={[-2.225, -0.447, 0.528]}
        scale={15.631}
      />
      <mesh
        name="CERT"
        castShadow
        receiveShadow
        geometry={nodes.CERT.geometry}
        material={materials['Material.038']}
        position={[-0.236, 3.042, -0.49]}
        rotation={[-2.606, 0.26, -0.247]}
        scale={15.631}
      />
      <mesh
        name="CEPCT"
        castShadow
        receiveShadow
        geometry={nodes.CEPCT.geometry}
        material={materials['Material.039']}
        position={[-0.243, 3.057, -0.505]}
        rotation={[-2.225, -0.447, 0.528]}
        scale={15.631}
      />
      <mesh
        name="CESB"
        castShadow
        receiveShadow
        geometry={nodes.CESB.geometry}
        material={nodes.CESB.material}
        position={[0.369, 2.767, -0.042]}
        rotation={[1.491, 1.08, -1.48]}
        scale={0.289}
      />
      <group
        name="CEHHD"
        position={[0.42, 2.763, 0.164]}
        rotation={[1.598, -0.091, -1.369]}
        scale={13.342}>
        <mesh
          name="Diamondmesh434065"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434065.geometry}
          material={materials['Diamond.005']}
        />
        <mesh
          name="Diamondmesh434065_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434065_1.geometry}
          material={materials['Metal.005']}
        />
      </group>
      <mesh
        name="CEBB"
        castShadow
        receiveShadow
        geometry={nodes.CEBB.geometry}
        material={nodes.CEBB.material}
        position={[0.128, 2.908, 0.02]}
        scale={[0.618, 1.135, 0.618]}
      />
      <mesh
        name="CEHB"
        castShadow
        receiveShadow
        geometry={nodes.CEHB.geometry}
        material={nodes.CEHB.material}
        position={[0.138, 2.84, -0.014]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.525, -0.053, -0.525]}
      />
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
        />
        <mesh
          name="Diamondmesh434066_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434066_1.geometry}
          material={materials['Metal.006']}
        />
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
      />
      <mesh
        name="CEHCT"
        castShadow
        receiveShadow
        geometry={nodes.CEHCT.geometry}
        material={materials['Material.003']}
        position={[-0.241, 3.153, -0.498]}
        rotation={[-1.668, 0.866, -0.691]}
        scale={16.349}
      />
      <mesh
        name="CEHTT002"
        castShadow
        receiveShadow
        geometry={nodes.CEHTT002.geometry}
        material={materials['Material.073']}
        position={[-0.231, 3.153, -0.49]}
        rotation={[-1.698, -0.064, 0.82]}
        scale={16.349}
      />
      <mesh
        name="CEHRT002"
        castShadow
        receiveShadow
        geometry={nodes.CEHRT002.geometry}
        material={materials['Material.072']}
        position={[-0.223, 3.149, -0.488]}
        rotation={[-1.698, -0.064, 0.82]}
        scale={16.638}
      />
      <mesh
        name="CEHPCT003"
        castShadow
        receiveShadow
        geometry={nodes.CEHPCT003.geometry}
        material={materials['Material.071']}
        position={[0.563, 3.157, -0.502]}
        rotation={[-1.698, -0.064, 0.82]}
        scale={17.361}
      />
      <mesh
        name="EmeraldDiamond"
        castShadow
        receiveShadow
        geometry={nodes.EmeraldDiamond.geometry}
        material={materials['Material.008']}
        position={[0.135, 2.598, -0.007]}
        scale={[18.904, 18.904, 18.398]}
      />
      <mesh
        name="ECT"
        castShadow
        receiveShadow
        geometry={nodes.ECT.geometry}
        material={materials['Material.009']}
        position={[-0.253, 3.1, -0.565]}
        rotation={[-1.025, 0.314, -2.63]}
        scale={17.079}
      />
      <mesh
        name="ECLP"
        castShadow
        receiveShadow
        geometry={nodes.ECLP.geometry}
        material={nodes.ECLP.material}
        position={[0.095, 2.461, 0.043]}
        rotation={[-Math.PI, 0.129, Math.PI / 2]}
        scale={0.412}
      />
      <mesh
        name="ETT"
        castShadow
        receiveShadow
        geometry={nodes.ETT.geometry}
        material={materials['Material.041']}
        position={[-0.255, 3.094, -0.559]}
        rotation={[-1.945, -0.314, 0.645]}
        scale={16.477}
      />
      <mesh
        name="ERT"
        castShadow
        receiveShadow
        geometry={nodes.ERT.geometry}
        material={materials['Material.040']}
        position={[-0.255, 3.055, -0.555]}
        rotation={[-2.678, -0.103, 0.082]}
        scale={17.068}
      />
      <mesh
        name="EPCT"
        castShadow
        receiveShadow
        geometry={nodes.EPCT.geometry}
        material={materials['Material.017']}
        position={[-0.259, 3.063, -0.561]}
        rotation={[-2.051, -0.398, 0.598]}
        scale={18.486}
      />
      <mesh
        name="ESB"
        castShadow
        receiveShadow
        geometry={nodes.ESB.geometry}
        material={nodes.ESB.material}
        position={[0.393, 2.776, -0.007]}
        rotation={[-2.743, 0.111, -2.826]}
        scale={[0.113, 0.137, 0.137]}
      />
      <group
        name="EHHD"
        position={[-0.174, 2.753, -0.01]}
        rotation={[1.569, 0.093, 1.564]}
        scale={16.713}>
        <mesh
          name="Diamondmesh434208"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434208.geometry}
          material={materials['Diamond.010']}
        />
        <mesh
          name="Diamondmesh434208_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434208_1.geometry}
          material={materials['Metal.010']}
        />
      </group>
      <mesh
        name="EBB"
        castShadow
        receiveShadow
        geometry={nodes.EBB.geometry}
        material={nodes.EBB.material}
        position={[0.591, 2.99, -0.221]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.081, 0.198, 0.198]}
      />
      <mesh
        name="EHB"
        castShadow
        receiveShadow
        geometry={nodes.EHB.geometry}
        material={nodes.EHB.material}
        position={[0.138, 2.846, 0.026]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.509, -0.057, -0.619]}
      />
      <group
        name="EHD"
        position={[-0.256, 2.916, 0.68]}
        rotation={[-2.848, 0.133, 3.108]}
        scale={17.108}>
        <mesh
          name="Diamondmesh434094"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434094.geometry}
          material={materials['Diamond.009']}
        />
        <mesh
          name="Diamondmesh434094_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434094_1.geometry}
          material={materials['Metal.009']}
        />
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
      />
      <mesh
        name="EHCLP"
        castShadow
        receiveShadow
        geometry={nodes.EHCLP.geometry}
        material={nodes.EHCLP.material}
        position={[0.069, 2.586, 0.007]}
        rotation={[Math.PI, -1.351, Math.PI / 2]}
        scale={0.146}
      />
      <mesh
        name="EHTT002"
        castShadow
        receiveShadow
        geometry={nodes.EHTT002.geometry}
        material={materials['Material.076']}
        position={[0.474, 3.16, -0.493]}
        rotation={[-1.691, 0.138, -0.694]}
        scale={16.349}
      />
      <mesh
        name="EHRT002"
        castShadow
        receiveShadow
        geometry={nodes.EHRT002.geometry}
        material={materials['Material.075']}
        position={[0.488, 3.165, -0.487]}
        rotation={[-1.653, 0.195, -0.626]}
        scale={16.349}
      />
      <mesh
        name="EHPCT002"
        castShadow
        receiveShadow
        geometry={nodes.EHPCT002.geometry}
        material={materials['Material.074']}
        position={[0.484, 3.167, -0.487]}
        rotation={[-1.66, 0.213, -0.678]}
        scale={16.349}
      />
      <mesh
        name="Oval_Final_1Carat"
        castShadow
        receiveShadow
        geometry={nodes.Oval_Final_1Carat.geometry}
        material={materials.wire_255255255}
        position={[0.137, 2.524, 0.021]}
        rotation={[0, 1.571, 0]}
        scale={15.898}
      />
      <mesh
        name="OCT"
        castShadow
        receiveShadow
        geometry={nodes.OCT.geometry}
        material={materials['Material.019']}
        position={[0.542, 2.986, 0.344]}
        rotation={[-1.045, -0.176, -2.846]}
        scale={12.631}
      />
      <mesh
        name="OCLP"
        castShadow
        receiveShadow
        geometry={nodes.OCLP.geometry}
        material={nodes.OCLP.material}
        position={[0.138, 2.701, 0.026]}
        rotation={[0, 0.325, -Math.PI / 2]}
        scale={0.153}
      />
      <mesh
        name="OTT"
        castShadow
        receiveShadow
        geometry={nodes.OTT.geometry}
        material={materials['Material.044']}
        position={[-0.28, 2.957, -0.307]}
        rotation={[-1.945, -0.314, 0.645]}
        scale={15.119}
      />
      <mesh
        name="ORT"
        castShadow
        receiveShadow
        geometry={nodes.ORT.geometry}
        material={materials['Material.043']}
        position={[-0.28, 2.957, -0.307]}
        rotation={[-2.576, -0.028, 0.214]}
        scale={15.119}
      />
      <mesh
        name="OPCT"
        castShadow
        receiveShadow
        geometry={nodes.OPCT.geometry}
        material={materials['Material.042']}
        position={[-0.269, 2.989, -0.297]}
        rotation={[-1.945, -0.314, 0.645]}
        scale={15.119}
      />
      <mesh
        name="OSB"
        castShadow
        receiveShadow
        geometry={nodes.OSB.geometry}
        material={nodes.OSB.material}
        position={[-0.171, 2.71, 0.05]}
        rotation={[0.415, -0.343, 0.782]}
        scale={[0.097, 0.119, 0.118]}
      />
      <group
        name="OHHD"
        position={[-0.098, 2.701, 0.298]}
        rotation={[-0.985, -0.089, 3.008]}
        scale={9.444}>
        <mesh
          name="Diamondmesh434230"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434230.geometry}
          material={materials['Diamond.011']}
        />
        <mesh
          name="Diamondmesh434230_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434230_1.geometry}
          material={materials['Metal.011']}
        />
      </group>
      <mesh
        name="OBB"
        castShadow
        receiveShadow
        geometry={nodes.OBB.geometry}
        material={nodes.OBB.material}
        position={[0.128, 2.873, 0.02]}
        scale={[0.732, 1.005, 0.509]}
      />
      <mesh
        name="OHCLP"
        castShadow
        receiveShadow
        geometry={nodes.OHCLP.geometry}
        material={nodes.OHCLP.material}
        position={[0.03, 2.592, 0.093]}
        rotation={[Math.PI, -1.244, Math.PI / 2]}
        scale={0.153}
      />
      <mesh
        name="OHCT"
        castShadow
        receiveShadow
        geometry={nodes.OHCT.geometry}
        material={materials['Material.020']}
        position={[0.608, 2.953, -0.373]}
        rotation={[-0.701, 0.015, -2.376]}
        scale={16.552}
      />
      <group
        name="OHD"
        position={[0.122, 3.007, 0.512]}
        rotation={[Math.PI / 2, 1.309, Math.PI / 2]}
        scale={[11.226, 13.281, 10.355]}>
        <mesh
          name="Diamondmesh434157"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434157.geometry}
          material={materials['Diamond.013']}
        />
        <mesh
          name="Diamondmesh434157_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434157_1.geometry}
          material={materials['Metal.013']}
        />
      </group>
      <mesh
        name="OHB"
        castShadow
        receiveShadow
        geometry={nodes.OHB.geometry}
        material={nodes.OHB.material}
        position={[0.139, 2.745, 0.02]}
        scale={[0.794, 0.866, 0.609]}
      />
      <mesh
        name="OHTT002"
        castShadow
        receiveShadow
        geometry={nodes.OHTT002.geometry}
        material={materials['Material.079']}
        position={[0.633, 2.901, -0.387]}
        rotation={[-1.696, 0.133, -0.653]}
        scale={16.349}
      />
      <mesh
        name="OHRT002"
        castShadow
        receiveShadow
        geometry={nodes.OHRT002.geometry}
        material={materials['Material.078']}
        position={[0.631, 2.907, -0.39]}
        rotation={[-1.646, 0.096, -0.655]}
        scale={16.442}
      />
      <mesh
        name="OHPCT002"
        castShadow
        receiveShadow
        geometry={nodes.OHPCT002.geometry}
        material={materials['Material.077']}
        position={[0.634, 2.89, -0.396]}
        rotation={[-1.696, 0.133, -0.653]}
        scale={16.818}
      />
      <mesh
        name="Pear_Final_1Carat001"
        castShadow
        receiveShadow
        geometry={nodes.Pear_Final_1Carat001.geometry}
        material={materials['wire_255255255.011']}
        position={[-0.059, 2.554, 0.02]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={15.209}
      />
      <mesh
        name="PECLP"
        castShadow
        receiveShadow
        geometry={nodes.PECLP.geometry}
        material={nodes.PECLP.material}
        position={[0.082, 2.701, 0.101]}
        rotation={[Math.PI, -1.469, Math.PI / 2]}
        scale={0.153}
      />
      <mesh
        name="PECT"
        castShadow
        receiveShadow
        geometry={nodes.PECT.geometry}
        material={materials['Material.027']}
        position={[0.879, 2.986, 0.033]}
        rotation={[-1.047, 0.181, -2.251]}
        scale={12.631}
      />
      <mesh
        name="PETT"
        castShadow
        receiveShadow
        geometry={nodes.PETT.geometry}
        material={materials['Material.047']}
        position={[-0.379, 2.969, -0.3]}
        rotation={[-1.761, -0.179, 0.684]}
        scale={15.119}
      />
      <mesh
        name="PERT"
        castShadow
        receiveShadow
        geometry={nodes.PERT.geometry}
        material={materials['Material.046']}
        position={[-0.379, 2.948, -0.313]}
        rotation={[-2.576, -0.028, 0.214]}
        scale={15.119}
      />
      <mesh
        name="PEPCT"
        castShadow
        receiveShadow
        geometry={nodes.PEPCT.geometry}
        material={materials['Material.045']}
        position={[-0.37, 2.998, -0.293]}
        rotation={[-1.945, -0.314, 0.645]}
        scale={15.119}
      />
      <mesh
        name="PESB"
        castShadow
        receiveShadow
        geometry={nodes.PESB.geometry}
        material={nodes.PESB.material}
        position={[-0.031, 2.711, 0.294]}
        rotation={[0.836, 1.034, -0.125]}
        scale={[0.097, 0.119, 0.118]}
      />
      <group
        name="PEHHD"
        position={[-0.326, 2.703, -0.132]}
        rotation={[-1.605, -0.591, 1.51]}
        scale={11.171}>
        <mesh
          name="Diamondmesh434232"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434232.geometry}
          material={materials['Diamond.014']}
        />
        <mesh
          name="Diamondmesh434232_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434232_1.geometry}
          material={materials['Metal.014']}
        />
      </group>
      <mesh
        name="PEBB"
        castShadow
        receiveShadow
        geometry={nodes.PEBB.geometry}
        material={nodes.PEBB.material}
        position={[0.126, 2.901, 0.018]}
        scale={0.604}
      />
      <mesh
        name="PEHB"
        castShadow
        receiveShadow
        geometry={nodes.PEHB.geometry}
        material={nodes.PEHB.material}
        position={[0.14, 2.848, 0.01]}
        scale={[0.817, 0.633, 0.817]}
      />
      <group
        name="PEHD"
        position={[0.122, 3.007, 0.512]}
        rotation={[Math.PI / 2, 1.309, Math.PI / 2]}
        scale={[11.226, 13.281, 10.355]}>
        <mesh
          name="Diamondmesh434240"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434240.geometry}
          material={materials['Diamond.019']}
        />
        <mesh
          name="Diamondmesh434240_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434240_1.geometry}
          material={materials['Metal.019']}
        />
      </group>
      <mesh
        name="PEHCT"
        castShadow
        receiveShadow
        geometry={nodes.PEHCT.geometry}
        material={materials['Material.021']}
        position={[0.88, 2.987, 0.032]}
        rotation={[-1.047, 0.181, -2.251]}
        scale={12.631}
      />
      <mesh
        name="PEHCLP"
        castShadow
        receiveShadow
        geometry={nodes.PEHCLP.geometry}
        material={nodes.PEHCLP.material}
        position={[0.365, 2.701, 0.045]}
        rotation={[0, 1.014, -Math.PI / 2]}
        scale={0.153}
      />
      <mesh
        name="PEHPCT002"
        castShadow
        receiveShadow
        geometry={nodes.PEHPCT002.geometry}
        material={materials['Material.080']}
        position={[-0.383, 2.932, 0.326]}
        rotation={[-1.448, -0.135, 2.47]}
        scale={14.122}
      />
      <mesh
        name="PEHTT004"
        castShadow
        receiveShadow
        geometry={nodes.PEHTT004.geometry}
        material={materials['Material.082']}
        position={[-0.395, 2.925, 0.002]}
        rotation={[-1.448, -0.135, 2.47]}
        scale={14.122}
      />
      <mesh
        name="PEHRT003"
        castShadow
        receiveShadow
        geometry={nodes.PEHRT003.geometry}
        material={materials['Material.081']}
        position={[0.884, 2.933, 0.032]}
        rotation={[-1.565, 0.182, -1.445]}
        scale={14.122}
      />
      <mesh
        name="Princess_Final_1Carat"
        castShadow
        receiveShadow
        geometry={nodes.Princess_Final_1Carat.geometry}
        material={materials['wire_255255255.013']}
        position={[0.135, 2.658, -0.008]}
        scale={15.663}
      />
      <mesh
        name="PCT"
        castShadow
        receiveShadow
        geometry={nodes.PCT.geometry}
        material={materials['Material.022']}
        position={[-0.307, 2.986, 0.464]}
        rotation={[-1.812, -0.501, 1.687]}
        scale={12.631}
      />
      <mesh
        name="PCLP"
        castShadow
        receiveShadow
        geometry={nodes.PCLP.geometry}
        material={nodes.PCLP.material}
        position={[0.039, 2.701, 0.084]}
        rotation={[0, -1.318, -Math.PI / 2]}
        scale={0.153}
      />
      <mesh
        name="PTT"
        castShadow
        receiveShadow
        geometry={nodes.PTT.geometry}
        material={materials['Material.050']}
        position={[-0.306, 2.994, 0.47]}
        rotation={[-1.279, -0.218, 2.502]}
        scale={15.119}
      />
      <mesh
        name="PRT"
        castShadow
        receiveShadow
        geometry={nodes.PRT.geometry}
        material={materials['Material.049']}
        position={[-0.306, 2.97, 0.47]}
        rotation={[-1.761, -0.912, 1.562]}
        scale={15.119}
      />
      <mesh
        name="PPCT"
        castShadow
        receiveShadow
        geometry={nodes.PPCT.geometry}
        material={materials['Material.048']}
        position={[-0.289, 3.016, 0.453]}
        rotation={[-1.192, -0.232, 2.537]}
        scale={16.049}
      />
      <mesh
        name="PSB"
        castShadow
        receiveShadow
        geometry={nodes.PSB.geometry}
        material={nodes.PSB.material}
        position={[0.122, 2.667, -0.304]}
        rotation={[2.413, -0.964, -3.139]}
        scale={[0.105, 0.128, 0.128]}
      />
      <group
        name="PHHD"
        position={[0.29, 2.674, 0.319]}
        rotation={[-0.979, 0.006, -3.132]}
        scale={10.513}>
        <mesh
          name="Diamondmesh434181"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434181.geometry}
          material={materials['Diamond.015']}
        />
        <mesh
          name="Diamondmesh434181_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434181_1.geometry}
          material={materials['Metal.015']}
        />
      </group>
      <mesh
        name="PBB"
        castShadow
        receiveShadow
        geometry={nodes.PBB.geometry}
        material={nodes.PBB.material}
        position={[0.128, 2.916, 0.02]}
        scale={[0.524, 0.092, 0.524]}
      />
      <mesh
        name="PHB"
        castShadow
        receiveShadow
        geometry={nodes.PHB.geometry}
        material={nodes.PHB.material}
        position={[0.138, 2.818, -0.014]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.529, -0.053, -0.529]}
      />
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
        />
        <mesh
          name="Diamondmesh434241_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434241_1.geometry}
          material={materials['Metal.020']}
        />
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
      />
      <mesh
        name="PHCT"
        castShadow
        receiveShadow
        geometry={nodes.PHCT.geometry}
        material={materials['Material.029']}
        position={[0.569, 3.126, 0.424]}
        rotation={[-1.087, -0.276, -3.031]}
        scale={12.626}
      />
      <mesh
        name="PHRT001"
        castShadow
        receiveShadow
        geometry={nodes.PHRT001.geometry}
        material={materials['Material.063']}
        position={[0.573, 3.072, 0.421]}
        rotation={[-1.424, 0.109, -2.347]}
        scale={14.54}
      />
      <mesh
        name="PHTT004"
        castShadow
        receiveShadow
        geometry={nodes.PHTT004.geometry}
        material={materials['Material.062']}
        position={[-0.289, 3.104, 0.42]}
        rotation={[-1.424, 0.109, -2.347]}
        scale={14.54}
      />
      <mesh
        name="PHPCT002"
        castShadow
        receiveShadow
        geometry={nodes.PHPCT002.geometry}
        material={materials['Material.064']}
        position={[0.573, 3.108, -0.44]}
        rotation={[-1.424, 0.109, -2.347]}
        scale={14.54}
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
        name="RATT"
        castShadow
        receiveShadow
        geometry={nodes.RATT.geometry}
        material={materials['Material.053']}
        position={[-0.307, 2.986, 0.464]}
        rotation={[-1.319, -0.228, 2.478]}
        scale={15.119}
      />
      <mesh
        name="RART"
        castShadow
        receiveShadow
        geometry={nodes.RART.geometry}
        material={materials['Material.052']}
        position={[-0.31, 2.963, 0.473]}
        rotation={[-1.417, -0.987, 1.985]}
        scale={15.119}
      />
      <mesh
        name="RAPCT"
        castShadow
        receiveShadow
        geometry={nodes.RAPCT.geometry}
        material={materials['Material.051']}
        position={[-0.299, 2.998, 0.461]}
        rotation={[-1.168, -0.291, 2.551]}
        scale={15.119}
      />
      <mesh
        name="RASB"
        castShadow
        receiveShadow
        geometry={nodes.RASB.geometry}
        material={nodes.RASB.material}
        position={[-0.171, 2.71, 0.05]}
        rotation={[0.415, -0.343, 0.782]}
        scale={[0.097, 0.119, 0.118]}
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
        name="RAHB"
        castShadow
        receiveShadow
        geometry={nodes.RAHB.geometry}
        material={nodes.RAHB.material}
        position={[0.138, 2.862, -0.014]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.529, -0.053, -0.529]}
      />
      <group
        name="RAHD"
        position={[0.315, 2.913, 0.506]}
        rotation={[-2.772, 0.005, -3.138]}
        scale={14.386}>
        <mesh
          name="Diamondmesh434261"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434261.geometry}
          material={materials['Diamond.021']}
        />
        <mesh
          name="Diamondmesh434261_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434261_1.geometry}
          material={materials['Metal.021']}
        />
      </group>
      <mesh
        name="RAHCT"
        castShadow
        receiveShadow
        geometry={nodes.RAHCT.geometry}
        material={materials['Material.030']}
        position={[0.564, 3.153, 0.421]}
        rotation={[-1.404, -0.858, 2.542]}
        scale={16.349}
      />
      <mesh
        name="RAHCLP"
        castShadow
        receiveShadow
        geometry={nodes.RAHCLP.geometry}
        material={nodes.RAHCLP.material}
        position={[0.137, 2.586, -0.103]}
        rotation={[-Math.PI, 0.254, Math.PI / 2]}
        scale={0.146}
      />
      <mesh
        name="RAHTT001"
        castShadow
        receiveShadow
        geometry={nodes.RAHTT001.geometry}
        material={materials['Material.083']}
        position={[0.537, 3.185, 0.404]}
        rotation={[-1.424, 0.109, -2.347]}
        scale={16.349}
      />
      <mesh
        name="RAHRT001"
        castShadow
        receiveShadow
        geometry={nodes.RAHRT001.geometry}
        material={materials['Material.084']}
        position={[0.537, 3.18, 0.404]}
        rotation={[-1.424, 0.109, -2.347]}
        scale={16.349}
      />
      <mesh
        name="RAHPCT001"
        castShadow
        receiveShadow
        geometry={nodes.RAHPCT001.geometry}
        material={materials['Material.085']}
        position={[0.537, 3.193, 0.404]}
        rotation={[-1.424, 0.109, -2.347]}
        scale={16.349}
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
        name="RETT"
        castShadow
        receiveShadow
        geometry={nodes.RETT.geometry}
        material={materials['Material.056']}
        position={[-0.251, 2.976, 0.494]}
        rotation={[-1.419, -0.091, 2.565]}
        scale={15.119}
      />
      <mesh
        name="RERT"
        castShadow
        receiveShadow
        geometry={nodes.RERT.geometry}
        material={materials['Material.055']}
        position={[-0.266, 2.952, 0.512]}
        rotation={[-1.436, -1, 1.927]}
        scale={15.119}
      />
      <mesh
        name="REPCT"
        castShadow
        receiveShadow
        geometry={nodes.REPCT.geometry}
        material={materials['Material.054']}
        position={[-0.236, 2.993, 0.474]}
        rotation={[-1.323, -0.239, 2.413]}
        scale={17.08}
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
        name="REHB"
        castShadow
        receiveShadow
        geometry={nodes.REHB.geometry}
        material={nodes.REHB.material}
        position={[0.138, 2.862, -0.014]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.529, -0.053, -0.529]}
      />
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
        />
        <mesh
          name="Diamondmesh434300_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434300_1.geometry}
          material={materials['Metal.022']}
        />
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
      />
      <mesh
        name="REHCLP"
        castShadow
        receiveShadow
        geometry={nodes.REHCLP.geometry}
        material={nodes.REHCLP.material}
        position={[0.137, 2.586, -0.103]}
        rotation={[-Math.PI, 0.254, Math.PI / 2]}
        scale={0.146}
      />
      <mesh
        name="REHTT"
        castShadow
        receiveShadow
        geometry={nodes.REHTT.geometry}
        material={materials['Material.090']}
        position={[0.589, 3.163, 0.434]}
        rotation={[-1.411, 0.097, -2.454]}
        scale={12.626}
      />
      <mesh
        name="REHRT"
        castShadow
        receiveShadow
        geometry={nodes.REHRT.geometry}
        material={materials['Material.091']}
        position={[0.59, 3.198, 0.441]}
        rotation={[-1.444, 0.008, -2.515]}
        scale={13.791}
      />
      <mesh
        name="REHPCT"
        castShadow
        receiveShadow
        geometry={nodes.REHPCT.geometry}
        material={materials['Material.089']}
        position={[-0.282, 3.152, 0.457]}
        rotation={[-1.466, -0.025, -3.12]}
        scale={13.791}
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
        name="RTT"
        castShadow
        receiveShadow
        geometry={nodes.RTT.geometry}
        material={materials['Material.059']}
        position={[-0.334, 2.979, -0.413]}
        rotation={[-1.79, -0.187, 0.627]}
        scale={15.119}
      />
      <mesh
        name="RRT"
        castShadow
        receiveShadow
        geometry={nodes.RRT.geometry}
        material={materials['Material.058']}
        position={[-0.344, 2.965, -0.421]}
        rotation={[-2.576, -0.028, 0.214]}
        scale={15.119}
      />
      <mesh
        name="RPCT"
        castShadow
        receiveShadow
        geometry={nodes.RPCT.geometry}
        material={materials['Material.057']}
        position={[-0.326, 3.011, -0.404]}
        rotation={[-1.945, -0.314, 0.645]}
        scale={16.428}
      />
      <mesh
        name="RSB"
        castShadow
        receiveShadow
        geometry={nodes.RSB.geometry}
        material={nodes.RSB.material}
        position={[0.129, 2.705, -0.277]}
        rotation={[2.413, -0.964, -3.139]}
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
      <mesh
        name="RHB"
        castShadow
        receiveShadow
        geometry={nodes.RHB.geometry}
        material={nodes.RHB.material}
        position={[0.128, 2.86, 0.02]}
        scale={[0.533, 0.477, 0.533]}
      />
      <mesh
        name="RHCLP"
        castShadow
        receiveShadow
        geometry={nodes.RHCLP.geometry}
        material={nodes.RHCLP.material}
        position={[0.191, 2.701, 0.109]}
        rotation={[0, 0.244, -Math.PI / 2]}
        scale={0.153}
      />
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
        />
        <mesh
          name="Diamondmesh434332_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434332_1.geometry}
          material={materials['Metal.024']}
        />
      </group>
      <mesh
        name="RCT001"
        castShadow
        receiveShadow
        geometry={nodes.RCT001.geometry}
        material={materials['Material.034']}
        position={[0.554, 3.18, 0.449]}
        rotation={[-1.087, -0.276, -3.031]}
        scale={12.626}
      />
      <mesh
        name="RHPCT"
        castShadow
        receiveShadow
        geometry={nodes.RHPCT.geometry}
        material={materials['Material.088']}
        position={[-0.299, 3.192, 0.453]}
        rotation={[-1.47, 0.04, -2.507]}
        scale={13.791}
      />
      <mesh
        name="RHRT"
        castShadow
        receiveShadow
        geometry={nodes.RHRT.geometry}
        material={materials['Material.086']}
        position={[0.551, 3.199, 0.439]}
        rotation={[-1.47, 0.04, -2.507]}
        scale={13.791}
      />
      <mesh
        name="RHTT"
        castShadow
        receiveShadow
        geometry={nodes.RHTT.geometry}
        material={materials['Material.087']}
        position={[-0.303, 3.17, -0.397]}
        rotation={[-1.406, 0.089, -2.505]}
        scale={12.626}
      />
      <group
        name="Eternity001"
        position={[0.131, 2.4, -0.197]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434001"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434001.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434001_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434001_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity002"
        position={[0.132, 2.354, -0.384]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434002"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434002.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434002_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434002_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity003"
        position={[0.133, 2.275, -0.562]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434003"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434003.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434003_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434003_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity004"
        position={[0.133, 2.169, -0.727]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434004"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434004.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434004_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434004_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity005"
        position={[0.134, 2.039, -0.875]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434005"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434005.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434005_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434005_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity006"
        position={[0.135, 1.889, -1.002]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434006"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434006.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434006_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434006_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity007"
        position={[0.136, 1.722, -1.106]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434007"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434007.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434007_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434007_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity008"
        position={[0.136, 1.542, -1.18]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434008"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434008.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434008_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434008_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity009"
        position={[0.136, 1.354, -1.225]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434009"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434009.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434009_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434009_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity010"
        position={[0.136, 1.161, -1.238]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434010"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434010.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434010_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434010_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity011"
        position={[0.137, 0.969, -1.212]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434012"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434012.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434012_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434012_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity012"
        position={[0.137, 0.784, -1.153]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434013"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434013.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434013_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434013_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity013"
        position={[0.137, 0.61, -1.067]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434014"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434014.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434014_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434014_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity014"
        position={[0.137, 0.448, -0.955]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434015"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434015.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434015_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434015_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity015"
        position={[0.138, 0.305, -0.82]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434016"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434016.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434016_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434016_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity016"
        position={[0.139, 0.183, -0.664]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434017"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434017.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434017_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434017_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity017"
        position={[0.139, 0.089, -0.493]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434018"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434018.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434018_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434018_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity018"
        position={[0.14, 0.023, -0.311]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434019"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434019.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434019_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434019_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity019"
        position={[0.141, -0.014, -0.122]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434020"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434020.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434020_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434020_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity020"
        position={[0.141, -0.015, 0.087]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434021"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434021.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434021_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434021_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity021"
        position={[0.14, 0.023, 0.276]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434022"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434022.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434022_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434022_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity022"
        position={[0.139, 0.089, 0.458]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434023"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434023.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434023_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434023_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity023"
        position={[0.139, 0.183, 0.629]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434024"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434024.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434024_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434024_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity024"
        position={[0.138, 0.305, 0.786]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434025"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434025.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434025_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434025_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity025"
        position={[0.137, 0.448, 0.921]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434026"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434026.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434026_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434026_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity026"
        position={[0.137, 0.61, 1.032]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434027"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434027.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434027_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434027_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity027"
        position={[0.137, 0.784, 1.118]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434028"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434028.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434028_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434028_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity028"
        position={[0.137, 0.969, 1.177]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434029"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434029.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434029_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434029_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity029"
        position={[0.136, 1.161, 1.204]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434030"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434030.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434030_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434030_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity030"
        position={[0.136, 1.354, 1.191]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434032"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434032.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434032_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434032_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity031"
        position={[0.136, 1.542, 1.146]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434036"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434036.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434036_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434036_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity032"
        position={[0.136, 1.722, 1.072]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434038"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434038.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434038_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434038_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity033"
        position={[0.135, 1.889, 0.968]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434040"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434040.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434040_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434040_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity034"
        position={[0.134, 2.039, 0.841]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434041"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434041.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434041_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434041_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity036"
        position={[0.133, 2.169, 0.693]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434043"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434043.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434043_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434043_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity035"
        position={[0.133, 2.275, 0.528]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434044"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434044.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434044_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434044_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity037"
        position={[0.132, 2.354, 0.35]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434045"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434045.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434045_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434045_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
      <group
        name="Eternity038"
        position={[0.131, 2.4, 0.163]}
        rotation={[1.57, 0.262, -Math.PI / 2]}
        scale={[14.756, 17.456, 13.61]}>
        <mesh
          name="Diamondmesh434046"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434046.geometry}
          material={materials['Diamond.007']}
        />
        <mesh
          name="Diamondmesh434046_1"
          castShadow
          receiveShadow
          geometry={nodes.Diamondmesh434046_1.geometry}
          material={materials['Metal.007']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/TEST5.glb')