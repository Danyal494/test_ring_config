import { useState,useEffect } from "react";
import { ChevronDown } from "lucide-react";

function autoSideCarat(centerCarat) {
  if (centerCarat <= 1.0) return 0.2
  if (centerCarat < 1.5)  return 0.2 + (centerCarat - 1.0) / 0.5 * (0.5 - 0.2)
  if (centerCarat < 2.0)  return 0.5 + (centerCarat - 1.5) / 0.5 * (1.0 - 0.5)
  if (centerCarat < 2.5)  return 1.0 + (centerCarat - 2.0) / 0.5 * (1.5 - 1.0)
  return 1.5
}
/* ─── Data ─── */
const HEAD_BAND_OPTIONS = [
  { id: "14k-white",  label: "14K White",  color: "#E8E4D9", swatch: "#d9dce3" },
  { id: "18k-yellow", label: "18K Yellow", color: "#D4AF37", swatch: "#d5b355" },
  { id: "18k-rose",   label: "18K Rose",   color: "#B76E79", swatch: "#bc8b8f" },
  { id: "18k-white",  label: "18K White",  color: "#F2F2F2", swatch: "#ececef" },
  { id: "platinum",   label: "Platinum",   color: "#CFCFD4", swatch: "#cfcfd4" },
  { id: "14k-rose",   label: "14K Rose",   color: "#C48D8D", swatch: "#c48d8d" },
  { id: "14k-yellow", label: "14K Yellow", color: "#C8A233", swatch: "#c8a233" },
  { id: "mixed",      label: "Mixed",      color: "#B3B3B3", swatch: "#ffffff" },
];

const ORIENTATION_OPTIONS_BY_DIAMOND = {
  OvalDiamond:             [{ id: 'Classic', label: 'Classic' }, { id: 'EastWest', label: 'East West' }],
  MarquiseDiamond:         [{ id: 'Classic', label: 'Classic' }, { id: 'EastWest', label: 'East West' }],
  RadiantDiamond:          [{ id: 'Classic', label: 'Classic' }, { id: 'EastWest', label: 'East West' }],
  EmeraldDiamond:          [{ id: 'Classic', label: 'Classic' }, { id: 'EastWest', label: 'East West' }],
  CushionDiamond:          [{ id: 'Classic', label: 'Classic' }, { id: 'EastWest', label: 'East West' }],
  CushionElongatedDiamond: [{ id: 'Classic', label: 'Classic' }, { id: 'EastWest', label: 'East West' }],
  RadiantElongatedDiamond: [{ id: 'Classic', label: 'Classic' }, { id: 'EastWest', label: 'East West' }],
  AsscherDiamond:          [{ id: 'Classic', label: 'Classic' }, { id: 'Kite',     label: 'Kite'      }],
  PrincessDiamond:         [{ id: 'Classic', label: 'Classic' }, { id: 'Kite',     label: 'Kite'      }],
};

const BASKET_HALO = [
  { id: "None",       label: "None"        },
  { id: "Basket",     label: "Basket"      },
  { id: "Halo",       label: "Halo"        },
  { id: "Bezel",      label: "Bezel"       },
  { id: "HiddenHalo", label: "Hidden Halo" },
];

const BASKET_HALO_THREE_STONE = [
  { id: "None",   label: "None"   },
  { id: "Basket", label: "Basket" },
];

const PRONG_OPTIONS_BY_DIAMOND = {
  RoundDiamond:            [{ id: "Classic",  label: "Classic (4)" }, { id: "Compass4", label: "4 Compass" }, { id: "Prong6", label: "6 Prong" }],
  OvalDiamond:             [{ id: "Prong6",   label: "6 Prong"     }, { id: "Classic",  label: "Classic (4)" }, { id: "Compass4", label: "4 Compass" }],
  PearDiamond:             [{ id: "Prong3",   label: "3 Prong"     }, { id: "Prong5",   label: "5 Prong"  }],
  EmeraldDiamond:          [{ id: "Classic",  label: "Classic (4)" }],
  AsscherDiamond:          [{ id: "Classic",  label: "Classic (4)" }],
  MarquiseDiamond:         [{ id: "Prong6",   label: "6 Prong"     }],
  CushionDiamond:          [{ id: "Classic",  label: "Classic (4)" }, { id: "Compass4", label: "4 Compass" }],
  RadiantDiamond:          [{ id: "Classic",  label: "Classic (4)" }],
  PrincessDiamond:         [{ id: "Classic",  label: "Classic (4)" }],
  CushionElongatedDiamond: [{ id: "Classic",  label: "Classic (4)" }, { id: "Compass4", label: "4 Compass" }],
  RadiantElongatedDiamond: [{ id: "Classic",  label: "Classic (4)" }],
};

const DEFAULT_PRONG_BY_DIAMOND = {
  RoundDiamond:            "Classic",
  OvalDiamond:             "Prong6",
  PearDiamond:             "Prong3",
  EmeraldDiamond:          "Classic",
  AsscherDiamond:          "Classic",
  MarquiseDiamond:         "Prong6",
  CushionDiamond:          "Classic",
  RadiantDiamond:          "Classic",
  PrincessDiamond:         "Classic",
  CushionElongatedDiamond: "Classic",
  RadiantElongatedDiamond: "Classic",
};

const PRONG_TIPS     = [{ id: "Rounded", label: "Rounded" }, { id: "Claw", label: "Claw" }, { id: "PetiteClaw", label: "Petite Claw" }, { id: "Tab", label: "Tab" }];
const PRONG_PAVE     = [{ id: "None", label: "None" }, { id: "Pave", label: "Pave" }];
const BAND_CATHEDRAL = [{ id: "None", label: "None" }, { id: "Cathedral", label: "Cathedral" }];
const PAVE_STYLES    = [{ id: "None", label: "None" }, { id: "PetiteFrench", label: "Petite French" }];
const PAVE_LENGTHS   = [{ id: "Half", label: "Half" }, { id: "OneThird", label: "One Third" }, { id: "Other", label: "Other" }];
const BAND_FIT       = [{ id: "ComfortFit", label: "Comfort Fit" }, { id: "StandardFit", label: "Standard Fit" }];

const DIAMOND_OPTIONS = [
  { id: "OvalDiamond",             label: "Oval"           },
  { id: "PrincessDiamond",         label: "Princess"       },
  { id: "RoundDiamond",            label: "Round"          },
  { id: "PearDiamond",             label: "Pear"           },
  { id: "EmeraldDiamond",          label: "Emerald"        },
  { id: "CushionDiamond",          label: "Cushion"        },
  { id: "RadiantDiamond",          label: "Radiant"        },
  { id: "AsscherDiamond",          label: "Asscher"        },
  { id: "MarquiseDiamond",         label: "Marquise"       },
  { id: "CushionElongatedDiamond", label: "Cushion Elong." },
  { id: "RadiantElongatedDiamond", label: "Radiant Elong." },
];

const STONE_COUNT     = [{ id: "OneStone", label: "One Stone" }, { id: "TwoStone", label: "Two Stone" }, { id: "ThreeStone", label: "Three Stone" }];
const DIAMOND_TYPE    = [{ id: "Natural", label: "Natural" }, { id: "LabGrown", label: "Lab Grown" }, { id: "Skip", label: "Skip" }];
const ENGRAVING_STYLE = [{ id: "Block", label: "Block" }, { id: "Cursive", label: "Cursive" }];
const SURPRISE_STONE  = [{ id: "None", label: "None" }, { id: "AddStone", label: "Add Stone" }];

const THREE_STONE_VALID_BASKETS = ["None", "Basket"];

/* ─── Helpers ─── */
function Collapsible({ open, children }) {
  return (
    <div style={{ display: "grid", gridTemplateRows: open ? "1fr" : "0fr", transition: "grid-template-rows 0.28s cubic-bezier(0.4,0,0.2,1)" }}>
      <div style={{ overflow: "hidden" }}>
        <div style={{ opacity: open ? 1 : 0, transform: open ? "translateY(0)" : "translateY(-6px)", transition: "opacity 0.22s ease, transform 0.22s ease" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ label, open, onClick }) {
  return (
    <button type="button" onClick={onClick} className="w-full flex items-center justify-between px-4 py-4 text-[15px] font-semibold text-[#232323] tracking-wide">
      <span>{label}</span>
      <span style={{ display: "inline-flex", transition: "transform 0.25s cubic-bezier(0.4,0,0.2,1)", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
        <ChevronDown size={18} strokeWidth={2} />
      </span>
    </button>
  );
}

function ChipGrid({ options, activeId, onSelect, cols = 2, autoFit = false }) {
  return (
    <div
      className="grid gap-2"
      style={{
        gridTemplateColumns: autoFit
          ? "repeat(auto-fill, minmax(72px, 1fr))"
          : `repeat(${cols}, 1fr)`,
      }}
    >
      {options.map((opt) => {
        const isActive = activeId === opt.id;
        return (
          <button key={opt.id} type="button" onClick={() => onSelect(opt.id)}
            className="h-[38px] rounded-[6px] border text-[12px] font-medium transition-all duration-150 flex items-center justify-center gap-1"
            style={{ background: isActive ? "#2b2d4b" : "#f9f9f9", color: isActive ? "#e8c86f" : "#8f8f8f", borderColor: isActive ? "#2b2d4b" : "#bdbdbd" }}
          >
            {opt.icon && <span className="text-[15px] leading-none">{opt.icon}</span>}
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

function RangeField({ title, subtitle, value, min, max, step, onChange, formatValue = (v) => v }) {
  const [localValue, setLocalValue] = useState(value);

  // Keep local in sync if parent value changes externally
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  return (
    <div className="mt-2">
      <div className="flex items-center justify-between mb-1">
        <p className="text-[13px] font-semibold text-[#191919]">{title}</p>
        <span className="text-[12px] font-bold text-[#2b2d4b] bg-[#e8e8f0] px-2 py-0.5 rounded-md">
          {formatValue(localValue)}
        </span>
      </div>
      {subtitle && <p className="text-[11px] text-[#9f9f9f] mb-2">{subtitle}</p>}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={localValue}
        onChange={(e) => setLocalValue(Number(e.target.value))}   // live display only
        onMouseUp={(e) => onChange(Number(e.target.value))}        // fires on drag end (mouse)
        onTouchEnd={(e) => onChange(Number(e.target.value))}       // fires on drag end (touch)
        className="w-full h-[4px] rounded-full appearance-none cursor-pointer"
        style={{ accentColor: "#2b2d4b", background: "#cfd3dc" }}
      />
      <div className="flex justify-between text-[11px] text-[#aaaaaa] mt-1">
        <span>{min}</span><span>{max}</span>
      </div>
    </div>
  );
}

function SubLabel({ children }) {
  return <p className="text-[13px] font-semibold text-[#1f1f1f] mb-2">{children}</p>;
}

function Section({ open, onToggle, label, children }) {
  return (
    <div className="bg-[#f3f3f3] rounded-[10px] border border-[#dedede] shadow-sm overflow-hidden">
      <SectionHeader label={label} open={open} onClick={onToggle} />
      <Collapsible open={open}>{children}</Collapsible>
    </div>
  );
}

/* ── Tabbed Two-Stone Picker ── */
function TwoStonePicker({
  leftShape, onLeftShapeChange, leftCarat, onLeftCaratChange,
  rightShape, onRightShapeChange, rightCarat, onRightCaratChange,
}) {
  const [activeTab, setActiveTab] = useState("left");
  const isLeft = activeTab === "left";

  return (
    <div>
      <SubLabel>
        Select Your Stones <span className="font-normal text-[#9c9c9c] text-[11px]">ⓘ</span>
      </SubLabel>

      {/* Tab buttons */}
      <div className="flex rounded-[8px] overflow-hidden border border-[#bdbdbd] mb-3">
        {["left", "right"].map((tab) => {
          const active = activeTab === tab;
          const shape  = tab === "left" ? leftShape  : rightShape;
          const carat  = tab === "left" ? leftCarat  : rightCarat;
          const shapeLabel = DIAMOND_OPTIONS.find(d => d.id === shape)?.label ?? "";
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className="flex-1 flex flex-col items-center py-2 px-3 text-[11px] font-medium transition-all duration-150"
              style={{
                background:   active ? "#2b2d4b" : "#f9f9f9",
                color:        active ? "#e8c86f" : "#8f8f8f",
                borderRight:  tab === "left" ? "1px solid #bdbdbd" : "none",
              }}
            >
              <span className="text-[10px] uppercase tracking-wider mb-0.5 opacity-70">
                {tab === "left" ? "Left Stone" : "Right Stone"}
              </span>
              <span className="font-semibold">{shapeLabel} · {carat.toFixed(1)} ct</span>
            </button>
          );
        })}
      </div>

      {/* Panel */}
      <div className="border border-[#dedede] rounded-[8px] p-3 bg-white">
        <ChipGrid
          options={DIAMOND_OPTIONS}
          activeId={isLeft ? leftShape : rightShape}
          onSelect={isLeft ? onLeftShapeChange : onRightShapeChange}
          autoFit
        />
        <RangeField
          title="Carat Size"
          value={isLeft ? leftCarat : rightCarat}
          min={0.5} max={2.5} step={0.5}
          onChange={isLeft ? onLeftCaratChange : onRightCaratChange}
          formatValue={(v) => v.toFixed(1) + " ct"}
        />
      </div>
    </div>
  );
}

/* ── Tabbed Three-Stone Picker ── */
/* ── Tabbed Three-Stone Picker ── */
function ThreeStonePicker({
  centerShape, onCenterShapeChange, centerCarat, onCenterCaratChange,
  sideShape, onSideShapeChange,
  // sideCarat and onSideCaratChange are intentionally unused —
  // side carat is auto-derived from centerCarat
}) {
  const [activeTab, setActiveTab] = useState("center");
  const isCenter = activeTab === "center";

  // Auto-derive side carat from center carat (mirrors BaseRing logic)
  const derivedSideCarat = autoSideCarat(centerCarat);

  const tabs = [
    { id: "center", label: "Center Stone", shape: centerShape, carat: centerCarat },
    { id: "side",   label: "Side Stones",  shape: sideShape,   carat: derivedSideCarat },
  ];

  return (
    <div>
      <SubLabel>
        Select Your Stones <span className="font-normal text-[#9c9c9c] text-[11px]">ⓘ</span>
      </SubLabel>

      {/* Tab buttons */}
      <div className="flex rounded-[8px] overflow-hidden border border-[#bdbdbd] mb-3">
        {tabs.map((tab, i) => {
          const active = activeTab === tab.id;
          const shapeLabel = DIAMOND_OPTIONS.find(d => d.id === tab.shape)?.label ?? "";
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className="flex-1 flex flex-col items-center py-2 px-3 text-[11px] font-medium transition-all duration-150"
              style={{
                background:  active ? "#2b2d4b" : "#f9f9f9",
                color:       active ? "#e8c86f" : "#8f8f8f",
                borderRight: i === 0 ? "1px solid #bdbdbd" : "none",
              }}
            >
              <span className="text-[10px] uppercase tracking-wider mb-0.5 opacity-70">{tab.label}</span>
              <span className="font-semibold">{shapeLabel} · {tab.carat.toFixed(1)} ct</span>
            </button>
          );
        })}
      </div>

      {/* Panel */}
      <div className="border border-[#dedede] rounded-[8px] p-3 bg-white">
        {isCenter
          ? <p className="text-[11px] text-[#9f9f9f] mb-2">Main center stone</p>
          : <p className="text-[11px] text-[#9f9f9f] mb-2">Both sides — same shape &amp; size</p>
        }

        <ChipGrid
          options={DIAMOND_OPTIONS}
          activeId={isCenter ? centerShape : sideShape}
          onSelect={isCenter ? onCenterShapeChange : onSideShapeChange}
          autoFit
        />

        {/* Center stone carat — manual slider */}
        {isCenter && (
          <RangeField
            title="Carat Size"
            value={centerCarat}
            min={0.5}
            max={2.5}
            step={0.5}
            onChange={onCenterCaratChange}
            formatValue={(v) => v.toFixed(1) + " ct"}
          />
        )}

        {/* Side stone carat — read-only, auto-derived */}
        {!isCenter && (
          <div className="mt-3">
            <div className="flex items-center justify-between mb-1">
              <p className="text-[13px] font-semibold text-[#191919]">Carat Size</p>
              <span className="text-[12px] font-bold text-[#2b2d4b] bg-[#e8e8f0] px-2 py-0.5 rounded-md">
                {derivedSideCarat.toFixed(1)} ct
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-[6px] bg-[#ededf5] border border-[#c8c8e0]">
              <span className="text-[11px] text-[#5a5a80]">
                Auto-scaled from center stone ({centerCarat.toFixed(1)} ct)
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
/* ════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════ */
export default function CircularRingConfigurator({
  metalColor    = "#D4AF37",      setMetalColor    = () => {},
  bandWidth     = 4,              setBandWidth      = () => {},
  ringSize      = 1.5,            setRingSize       = () => {},
  caratSize     = 1.5,            setCaratSize      = () => {},
  bandShape     = "circle",       setBandShape      = () => {},
  diamondType   = "RoundDiamond", setDiamondType    = () => {},
  openSection   = "",             setOpenSection    = () => {},
  prongCount: prongCountProp,           setProngCount: setProngCountProp,
  orientation: orientationProp,         setOrientation: setOrientationProp,
  surpriseStone: surpriseStoneProp,     setSurpriseStone: setSurpriseStoneProp,
  paveStyle: paveStyleProp,             setPaveStyle: setPaveStyleProp,
  paveLength: paveLengthProp,           setPaveLength: setPaveLengthProp,
  prongTips: prongTipsProp,             setProngTips: setProngTipsProp,
  bandFit: bandFitProp,                 setBandFit: setBandFitProp,
  basket: basketProp,                   setBasket: setBasketProp,
  stoneCount: stoneCountProp,           setStoneCount: setStoneCountProp,
  rightDiamondType: rightDiamondTypeProp,  setRightDiamondType: setRightDiamondTypeProp,
  sideDiamondType: sideDiamondTypeProp,    setSideDiamondType: setSideDiamondTypeProp,
  rightCaratSize: rightCaratSizeProp,   setRightCaratSize: setRightCaratSizeProp,
  sideCaratSize: sideCaratSizeProp,     setSideCaratSize: setSideCaratSizeProp,
}) {
  /* ── local fallbacks ── */
  const [stoneCountLocal,       setStoneCountLocal]       = useState("OneStone");
  const [diamondKind,           setDiamondKind]           = useState("Natural");
  const [prongCountLocal,       setProngCountLocal]       = useState(DEFAULT_PRONG_BY_DIAMOND[diamondType] ?? "Classic");
  const [surpriseStoneLocal,    setSurpriseStoneLocal]    = useState("None");
  const [prongPave,             setProngPave]             = useState("None");
  const [cathedral,             setCathedral]             = useState("None");
  const [bandFitLocal,          setBandFitLocal]          = useState("StandardFit");
  const [paveStyleLocal,        setPaveStyleLocal]        = useState("None");
  const [paveLengthLocal,       setPaveLengthLocal]       = useState("Half");
  const [engravingText,         setEngravingText]         = useState("");
  const [engravingStyle,        setEngravingStyle]        = useState("Block");
  const [prongTipsLocal,        setProngTipsLocal]        = useState("Rounded");
  const [orientationLocal,      setOrientationLocal]      = useState("Classic");
  const [basketLocal,           setBasketLocal]           = useState("None");
  const [rightDiamondTypeLocal, setRightDiamondTypeLocal] = useState("RoundDiamond");
  const [sideDiamondTypeLocal,  setSideDiamondTypeLocal]  = useState("RoundDiamond");
  const [rightCaratLocal,       setRightCaratLocal]       = useState(1.5);
  const [sideCaratLocal,        setSideCaratLocal]        = useState(0.2);

  /* ── resolve controlled vs local ── */
  const stoneCount       = stoneCountProp       !== undefined ? stoneCountProp       : stoneCountLocal;
  const setStoneCount    = setStoneCountProp    !== undefined ? setStoneCountProp    : setStoneCountLocal;
  const orientation      = orientationProp      !== undefined ? orientationProp      : orientationLocal;
  const setOrientation   = setOrientationProp   !== undefined ? setOrientationProp   : setOrientationLocal;
  const prongCount       = prongCountProp       !== undefined ? prongCountProp       : prongCountLocal;
  const setProngCount    = setProngCountProp    !== undefined ? setProngCountProp    : setProngCountLocal;
  const surpriseStone    = surpriseStoneProp    !== undefined ? surpriseStoneProp    : surpriseStoneLocal;
  const setSurpriseStone = setSurpriseStoneProp !== undefined ? setSurpriseStoneProp : setSurpriseStoneLocal;
  const paveStyle        = paveStyleProp        !== undefined ? paveStyleProp        : paveStyleLocal;
  const setPaveStyle     = setPaveStyleProp     !== undefined ? setPaveStyleProp     : setPaveStyleLocal;
  const paveLength       = paveLengthProp       !== undefined ? paveLengthProp       : paveLengthLocal;
  const setPaveLength    = setPaveLengthProp    !== undefined ? setPaveLengthProp    : setPaveLengthLocal;
  const prongTips        = prongTipsProp        !== undefined ? prongTipsProp        : prongTipsLocal;
  const setProngTips     = setProngTipsProp     !== undefined ? setProngTipsProp     : setProngTipsLocal;
  const bandFit          = bandFitProp          !== undefined ? bandFitProp          : bandFitLocal;
  const setBandFit       = setBandFitProp       !== undefined ? setBandFitProp       : setBandFitLocal;
  const basket           = basketProp           !== undefined ? basketProp           : basketLocal;
  const setBasket        = setBasketProp        !== undefined ? setBasketProp        : setBasketLocal;
  const rightDiamondType    = rightDiamondTypeProp    !== undefined ? rightDiamondTypeProp    : rightDiamondTypeLocal;
  const setRightDiamondType = setRightDiamondTypeProp !== undefined ? setRightDiamondTypeProp : setRightDiamondTypeLocal;
  const sideDiamondType     = sideDiamondTypeProp     !== undefined ? sideDiamondTypeProp     : sideDiamondTypeLocal;
  const setSideDiamondType  = setSideDiamondTypeProp  !== undefined ? setSideDiamondTypeProp  : setSideDiamondTypeLocal;
  const rightCaratSize      = rightCaratSizeProp      !== undefined ? rightCaratSizeProp      : rightCaratLocal;
  const setRightCaratSize   = setRightCaratSizeProp   !== undefined ? setRightCaratSizeProp   : setRightCaratLocal;
  const sideCaratSize       = sideCaratSizeProp       !== undefined ? sideCaratSizeProp       : sideCaratLocal;
  const setSideCaratSize    = setSideCaratSizeProp    !== undefined ? setSideCaratSizeProp    : setSideCaratLocal;

  const toggle = (key) => setOpenSection((prev) => (prev === key ? "" : key));

  const handleStoneCountChange = (newCount) => {
    setStoneCount(newCount);
    if (newCount === "ThreeStone" && !THREE_STONE_VALID_BASKETS.includes(basket)) {
      setBasket("None");
    }
  };

  const selectedMetal = HEAD_BAND_OPTIONS.find((o) => o.color.toLowerCase() === metalColor.toLowerCase()) ?? HEAD_BAND_OPTIONS[0];

  const isTwoStone   = stoneCount === "TwoStone";
  const isThreeStone = stoneCount === "ThreeStone";
  const isMultiStone = isTwoStone || isThreeStone;

  const handleDiamondChange = (newType, setter) => {
    setter(newType);
    if (setter === setDiamondType) {
      const options    = PRONG_OPTIONS_BY_DIAMOND[newType] ?? [];
      const stillValid = options.some((o) => o.id === prongCount);
      if (!stillValid) setProngCount(DEFAULT_PRONG_BY_DIAMOND[newType] ?? options[0]?.id ?? "Classic");
      const orientOpts = ORIENTATION_OPTIONS_BY_DIAMOND[newType] ?? [];
      if (!orientOpts.some((o) => o.id === orientation)) setOrientation("Classic");
    }
  };

  const prongOptions   = isMultiStone ? [] : (PRONG_OPTIONS_BY_DIAMOND[diamondType] ?? []);
  const showProngCount = !isMultiStone && prongOptions.length > 1;
  const orientOpts     = !isMultiStone ? (ORIENTATION_OPTIONS_BY_DIAMOND[diamondType] ?? []) : [];

  const stoneCountSubtitle = isTwoStone ? "Two Stone Ring (Toi et Moi)" : isThreeStone ? "Three Stone Ring" : null;

  const basketActiveId = isThreeStone && !THREE_STONE_VALID_BASKETS.includes(basket) ? "None" : basket;

  return (
    <div className="absolute z-50 top-4 right-4 w-[340px] max-w-[calc(100vw-1.5rem)] flex flex-col gap-2">

      {/* ── Metal ── */}
      <Section open={openSection === "metal"} onToggle={() => toggle("metal")} label="Metal">
        <div className="px-4 pb-4">
          <p className="text-[13px] font-semibold text-[#1f1f1f]">
            Head &amp; Band Color <span className="ml-1 text-[#9c9c9c] text-[11px]">ⓘ</span>
          </p>
          <p className="text-[12px] text-[#7f7f7f] mt-1 mb-3">{selectedMetal.label}</p>
          <div className="grid grid-cols-3 gap-2">
            {HEAD_BAND_OPTIONS.map((opt) => {
              const isActive = opt.color.toLowerCase() === metalColor.toLowerCase();
              return (
                <button key={opt.id} type="button" onClick={() => setMetalColor(opt.color)}
                  className="h-[36px] rounded-[6px] border text-[11px] font-medium transition-all duration-150 flex items-center justify-center"
                  style={{ background: isActive ? "#2b2d4b" : "#f9f9f9", color: isActive ? "#e8c86f" : "#8f8f8f", borderColor: isActive ? "#2b2d4b" : "#bdbdbd" }}
                >
                  {opt.id !== "mixed" && (
                    <span className="inline-block w-[7px] h-[7px] rounded-full mr-1" style={{ backgroundColor: opt.swatch, border: "1px solid #ccc" }} />
                  )}
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ── Diamonds ── */}
      <Section open={openSection === "diamonds"} onToggle={() => toggle("diamonds")} label="Diamonds">
        <div className="px-4 pb-4 flex flex-col gap-4">

          <div>
            <SubLabel>Center Stones <span className="font-normal text-[#9c9c9c] text-[11px]">ⓘ</span></SubLabel>
            {stoneCountSubtitle && <p className="text-[11px] text-[#9f9f9f] mb-2">{stoneCountSubtitle}</p>}
            <ChipGrid options={STONE_COUNT} activeId={stoneCount} onSelect={handleStoneCountChange} cols={3} />
          </div>

          {/* ONE STONE */}
          {!isMultiStone && (
            <>
              <div>
                <SubLabel>Diamond Shape</SubLabel>
                <ChipGrid options={DIAMOND_OPTIONS} activeId={diamondType} onSelect={(v) => handleDiamondChange(v, setDiamondType)} autoFit />
              </div>
              <RangeField
                title="Carat Size (US)" subtitle="US/Canada standard sizing"
                value={caratSize} min={1} max={2.5} step={0.5}
                onChange={setCaratSize}
                formatValue={(v) => (Number.isInteger(v) ? v.toString() : v.toFixed(1))}
              />
            </>
          )}

          {/* TWO STONE */}
          {isTwoStone && (
            <TwoStonePicker
              leftShape={diamondType}
              onLeftShapeChange={(v) => handleDiamondChange(v, setDiamondType)}
              leftCarat={caratSize}
              onLeftCaratChange={setCaratSize}
              rightShape={rightDiamondType}
              onRightShapeChange={setRightDiamondType}
              rightCarat={rightCaratSize}
              onRightCaratChange={setRightCaratSize}
            />
          )}

          {/* THREE STONE */}
          {isThreeStone && (
            <ThreeStonePicker
              centerShape={diamondType}
              onCenterShapeChange={(v) => handleDiamondChange(v, setDiamondType)}
              centerCarat={caratSize}
              onCenterCaratChange={setCaratSize}
              sideShape={sideDiamondType}
              onSideShapeChange={setSideDiamondType}
              sideCarat={sideCaratSize}
              onSideCaratChange={setSideCaratSize}
            />
          )}

          <div>
            <SubLabel>Diamond Type</SubLabel>
            <ChipGrid options={DIAMOND_TYPE} activeId={diamondKind} onSelect={setDiamondKind} cols={3} />
          </div>

          {orientOpts.length > 0 && (
            <div>
              <SubLabel>Orientation</SubLabel>
              <ChipGrid options={orientOpts} activeId={orientation} onSelect={setOrientation} cols={2} />
            </div>
          )}
        </div>
      </Section>

      {/* ── Head ── */}
      <Section open={openSection === "head"} onToggle={() => toggle("head")} label="Head">
        <div className="px-4 pb-4 flex flex-col gap-4">
          <div>
            <SubLabel>Basket &amp; Halo</SubLabel>
            <ChipGrid
              options={isThreeStone ? BASKET_HALO_THREE_STONE : BASKET_HALO}
              activeId={basketActiveId}
              onSelect={setBasket}
              cols={2}
            />
          </div>

          {showProngCount && (
            <div>
              <SubLabel>Prong Count</SubLabel>
              <ChipGrid
                options={prongOptions}
                activeId={prongCount}
                onSelect={setProngCount}
                cols={prongOptions.length === 2 ? 2 : 3}
              />
            </div>
          )}

          {(isTwoStone || isThreeStone) && (
            <div className="flex items-center gap-2 px-3 py-2 rounded-[6px] bg-[#ededf5] border border-[#c8c8e0]">
              <span className="text-[11px] text-[#5a5a80]">
                Prong style locked to <strong>Classic</strong> for {isThreeStone ? "Three Stone" : "Two Stone"} rings
              </span>
            </div>
          )}

          <div>
            <SubLabel>Prong Tips</SubLabel>
            <ChipGrid options={PRONG_TIPS} activeId={prongTips} onSelect={setProngTips} cols={2} />
          </div>

          {!isThreeStone && (
            <div>
              <SubLabel>Prong Pave</SubLabel>
              <ChipGrid options={PRONG_PAVE} activeId={prongPave} onSelect={setProngPave} cols={2} />
            </div>
          )}
        </div>
      </Section>

      {/* ── Band ── */}
      <Section open={openSection === "band"} onToggle={() => toggle("band")} label="Band">
        <div className="px-4 pb-4 flex flex-col gap-4">
          <div>
            <SubLabel>Ring Shape</SubLabel>
            <ChipGrid
              options={[{ id: "circle", label: "Circle", icon: "○" }, { id: "square", label: "Square", icon: "□" }]}
              activeId={bandShape} onSelect={setBandShape} cols={2}
            />
          </div>
          <div>
            <SubLabel>Cathedral</SubLabel>
            <ChipGrid options={BAND_CATHEDRAL} activeId={cathedral} onSelect={setCathedral} cols={2} />
          </div>
          <div>
            <SubLabel>Pave Style</SubLabel>
            <ChipGrid options={PAVE_STYLES} activeId={paveStyle} onSelect={setPaveStyle} cols={2} />
            <Collapsible open={paveStyle === "PetiteFrench"}>
              <div className="mt-3 pl-2 border-l-2 border-[#2b2d4b]/20">
                <SubLabel>Pave Length</SubLabel>
                <ChipGrid options={PAVE_LENGTHS} activeId={paveLength} onSelect={setPaveLength} cols={3} />
              </div>
            </Collapsible>
          </div>
          <RangeField
            title="Band Width" subtitle="Z-axis thickness"
            value={bandWidth} min={3.1} max={8} step={0.1}
            onChange={setBandWidth} formatValue={(v) => v.toFixed(1) + " mm"}
          />
          <RangeField
            title="Ring Size (US)" subtitle="US/Canada standard sizing"
            value={ringSize} min={1} max={2.5} step={0.5}
            onChange={setRingSize}
            formatValue={(v) => (Number.isInteger(v) ? v.toString() : v.toFixed(1))}
          />
          <div>
            <SubLabel>Fit</SubLabel>
            <ChipGrid options={BAND_FIT} activeId={bandFit} onSelect={setBandFit} cols={2} />
          </div>
        </div>
      </Section>

      {/* ── More ── */}
      <Section open={openSection === "more"} onToggle={() => toggle("more")} label="More">
        <div className="px-4 pb-4 flex flex-col gap-4">
          <div>
            <SubLabel>Add Engraving</SubLabel>
            <textarea
              value={engravingText}
              onChange={(e) => setEngravingText(e.target.value)}
              placeholder="Your engraving text…"
              rows={2}
              className="w-full border-2 border-[#bdbdbd] rounded-md px-2 py-1 text-[12px] text-[#333] resize-none focus:outline-none focus:border-[#2b2d4b]"
            />
          </div>
          <div>
            <SubLabel>Engraving Style</SubLabel>
            <ChipGrid options={ENGRAVING_STYLE} activeId={engravingStyle} onSelect={setEngravingStyle} cols={2} />
          </div>
          <div>
            <SubLabel>Surprise Stone</SubLabel>
            <ChipGrid options={SURPRISE_STONE} activeId={surpriseStone} onSelect={setSurpriseStone} cols={2} />
          </div>
        </div>
      </Section>
    </div>
  );
}