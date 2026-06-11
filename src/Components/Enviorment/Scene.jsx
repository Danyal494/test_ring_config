import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { BaseRing } from "../Model_code/BaseRing";
import { Model } from "../Model_code/DiamondTest";

export default function CircularRingScene({
  metalColor       = "#f2f3f7",
  bandWidth        = 4,
  ringSize         = 6,
  caratSize        = 1.5,
  bandShape        = "circle",
  diamondType      = "RoundDiamond",
  diamondColor     = "#ffffff",
  openSection      = "",
  paveStyle        = "None",
  prongCount       = "Classic",
  surpriseStone    = "None",
  prongTips        = "Rounded",
  orientation      = "Classic",
  bandFit          = "StandardFit",
  basket           = "None",
  // multi-stone
  stoneCount       = "OneStone",
  rightDiamondType = "RoundDiamond",
  sideDiamondType  = "RoundDiamond",
  // per-stone carats
  rightCaratSize   = 1.2,
  sideCaratSize    = 1.0,
paveLength = "Half",
  cathedral        = "None", 
    
}) {
  return (
    <Canvas
      dpr={[1, 2]}
      style={{ width: "100vw", height: "100vh" }}
      camera={{ position: [0, 0, 10.2], fov: 40 }}
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        outputColorSpace: THREE.SRGBColorSpace,
        powerPreference: "high-performance",
      }}
    >
      {/* #efefef */}
       {/* 2C2D2D */}
      <color attach="background" args={["#efefef"]} />
      <Environment files="/newhdri.hdr" environmentIntensity={1.0} />

      <ambientLight intensity={0.2} />
      <hemisphereLight intensity={0.35} groundColor="#cfcfcf" color="#ffffff" />
      <directionalLight position={[3.5, 7, 4]} intensity={0.45} />

      <group rotation={[0, 1.9, 0]} position={[-3.5, -2, 0]}>
        <BaseRing
          diamondType={diamondType}
          bandShape={bandShape}
          metalColor={metalColor}
          ringSize={ringSize}
          caratSize={caratSize}
          bandWidth={bandWidth}
          prongCount={prongCount}
          prongTips={prongTips}
          surpriseStone={surpriseStone}
          orientation={orientation}
          basket={basket}
          bandFit={bandFit === "ComfortFit" ? "comfort" : "standard"}
          // multi-stone
          stoneCount={stoneCount}
           cathedral={cathedral}   
          rightDiamondType={rightDiamondType}
          sideDiamondType={sideDiamondType}
          // per-stone carats
          rightCaratSize={rightCaratSize}
          sideCaratSize={sideCaratSize}
          paveStyle={paveStyle}
paveLength={paveLength}
        />
        {/* <Model/> */}
      </group>

      <OrbitControls
        enableZoom
        enableRotate
        enablePan={true}
        dampingFactor={0.05}
        enableDamping
        autoRotate={false}
        minPolarAngle={0.20}
        maxPolarAngle={2.14}
        target={[-3.35, 0, 0]}
      />
    </Canvas>
  );
}