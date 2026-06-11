import { useState } from "react";
import "./App.css";

import { Loader } from "@react-three/drei";
import CircularRingConfigurator from "./Components/Configurator/RingConfigurator";
import CircularRingScene from "./Components/Enviorment/Scene";

function App() {
  const [circularFrameColor, setCircularFrameColor] = useState("#f2f3f7");
  const [circularBandWidth,  setCircularBandWidth]  = useState(3.1);
  const [circularRingSize,   setCircularRingSize]   = useState(1.5);
  const [dCaratSize,         setDCaratSize]         = useState(1);
  const [basket,             setBasket]             = useState("None");
  const [bandShape,          setBandShape]          = useState("circle");
  const [prongCount,         setProngCount]         = useState("Classic");
  const [surpriseStone,      setSurpriseStone]      = useState("None");
  const [diamondType,        setDiamondType]        = useState("AsscherDiamond");
  const [diamondColor,       setDiamondColor]       = useState("#ffffff");
  const [openSection,        setOpenSection]        = useState("");
  const [prongTips,          setProngTips]          = useState("Claw");
  const [paveStyle,          setPaveStyle]          = useState("None");
  const [orientation,        setOrientation]        = useState("Classic");
  const [bandFit,            setBandFit]            = useState("StandardFit");
const [paveLength, setPaveLength] = useState("Half");
  // Multi-stone state
  const [stoneCount,        setStoneCount]        = useState("OneStone");
  const [rightDiamondType,  setRightDiamondType]  = useState("RoundDiamond");
  const [sideDiamondType,   setSideDiamondType]   = useState("RoundDiamond");

  // Per-stone carat sizes (Two Stone right + Three Stone sides)
  const [rightCaratSize,    setRightCaratSize]    = useState(1.0);
  const [sideCaratSize,     setSideCaratSize]     = useState(0.2);

  // Multi-stone always uses Classic prong
  const effectiveProngCount = (stoneCount !== "OneStone") ? "Classic" : prongCount;
  
  const [cathedral, setCathedral] = useState("None");

// Pass to both Configurator and Scene:


  return (
    <>
      <Loader />
      <CircularRingConfigurator
        metalColor={circularFrameColor}   setMetalColor={setCircularFrameColor}
        bandWidth={circularBandWidth}     setBandWidth={setCircularBandWidth}
        ringSize={circularRingSize}       setRingSize={setCircularRingSize}
        caratSize={dCaratSize}            setCaratSize={setDCaratSize}
        bandShape={bandShape}             setBandShape={setBandShape}
        diamondType={diamondType}         setDiamondType={setDiamondType}
        diamondColor={diamondColor}       setDiamondColor={setDiamondColor}
        openSection={openSection}         setOpenSection={setOpenSection}
        paveStyle={paveStyle}             setPaveStyle={setPaveStyle}
        prongCount={prongCount}           setProngCount={setProngCount}
        surpriseStone={surpriseStone}     setSurpriseStone={setSurpriseStone}
        prongTips={prongTips}             setProngTips={setProngTips}
        orientation={orientation}         setOrientation={setOrientation}
        bandFit={bandFit}                 setBandFit={setBandFit}
        basket={basket}                   setBasket={setBasket}
        // multi-stone
        stoneCount={stoneCount}           setStoneCount={setStoneCount}
        rightDiamondType={rightDiamondType}  setRightDiamondType={setRightDiamondType}
        sideDiamondType={sideDiamondType}    setSideDiamondType={setSideDiamondType}
        // per-stone carats
        rightCaratSize={rightCaratSize}   setRightCaratSize={setRightCaratSize}
        sideCaratSize={sideCaratSize}     setSideCaratSize={setSideCaratSize}
        cathedral={cathedral}  setCathedral={setCathedral}
        paveLength={paveLength}           setPaveLength={setPaveLength} 
      />

      <CircularRingScene
        metalColor={circularFrameColor}
        orientation={orientation}
        bandWidth={circularBandWidth}
        ringSize={circularRingSize}
        caratSize={dCaratSize}
        bandShape={bandShape}
        diamondType={diamondType}
        diamondColor={diamondColor}
        openSection={openSection}
        paveStyle={paveStyle}
        prongCount={effectiveProngCount}
        surpriseStone={surpriseStone}
        prongTips={prongTips}
        bandFit={bandFit}
        basket={basket}
        // multi-stone
        stoneCount={stoneCount}
        rightDiamondType={rightDiamondType}
        sideDiamondType={sideDiamondType}
        // per-stone carats
        rightCaratSize={rightCaratSize}
        sideCaratSize={sideCaratSize}
        cathedral={cathedral} 
        paveLength={paveLength}
      />
    </>
  );
}

export default App;