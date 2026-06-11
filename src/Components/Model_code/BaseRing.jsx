import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations, MeshRefractionMaterial } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import DiamondByType from './StoneLogic/DiamondByType'
import ThreeStone    from './StoneLogic/ThreeStone'
import TwoStone      from './StoneLogic/TwoStone'
import PaveLength from './SubCode/PaveLength'
import { CathedralArm, CathedralPair } from './StoneLogic/Cathedral'

const BW_DEFAULT = 2.7

// ─── Carat → visual scale compression ────────────────────────────────────────

const CARAT_RANGE_MIN  = 1.0
const CARAT_RANGE_MAX  = 2.5
const CARAT_SCALE_MIN  = 0.88
const CARAT_SCALE_MAX  = 1.12

function compressCarat(rawCarat) {
  const t = (rawCarat - CARAT_RANGE_MIN) / (CARAT_RANGE_MAX - CARAT_RANGE_MIN)
  return CARAT_SCALE_MIN + t * (CARAT_SCALE_MAX - CARAT_SCALE_MIN)
}

function toVisualCarat(rawCarat) {
  return compressCarat(rawCarat) * 1.5
}

// ─── Auto-derive side stone carat from center carat (Three Stone) ─────────────

function autoSideCarat(centerCarat) {
  if (centerCarat <= 1.0) return 0.2
  if (centerCarat < 1.5)  return 0.2 + (centerCarat - 1.0) / 0.5 * (0.5 - 0.2)
  if (centerCarat < 2.0)  return 0.5 + (centerCarat - 1.5) / 0.5 * (1.0 - 0.5)
  if (centerCarat < 2.5)  return 1.0 + (centerCarat - 2.0) / 0.5 * (1.5 - 1.0)
  return 1.5
}

// ─── Materials ────────────────────────────────────────────────────────────────

function TransitionMaterial({
  transitionColor    = '#f2f3f7',
  metalness          = 1,
  roughness          = 0.16,
  clearcoat          = 0.9,
  clearcoatRoughness = 0.1,
  ...rest
}) {
  return (
    <meshPhysicalMaterial
      color={transitionColor}
      metalness={metalness}
      roughness={roughness}
      clearcoat={clearcoat}
      clearcoatRoughness={clearcoatRoughness}
      {...rest}
    />
  )
}

function RefractionMaterial({ envMap, color = '#ffffff' }) {
  if (!envMap) return <meshStandardMaterial color={color} transparent opacity={0} />
  return (
    <MeshRefractionMaterial
      envMap={envMap}
      color={color}
      bounces={3}
      ior={2.4}
      aberrationStrength={0.01}
      fresnel={1}
      fastChroma={false}
      resolution={256}
      toneMapped={false}
      thickness={5}
    />
  )
}

// ─── BaseRing ─────────────────────────────────────────────────────────────────

export function BaseRing({
  bandShape     = 'square',
  bandComfort: bandComfortProp,
  bandFit,
  metalColor    = '#f2f3f7',
  ringSize      = 3,
  caratSize     = 1.5,
  bandWidth     = 4,
  diamondType   = 'AsscherDiamond',
  prongCount    = 'Classic',
  prongTips     = 'Rounded',
  surpriseStone = 'None',
  orientation   = 'Classic',
  basket        = 'None',
  stoneCount       = 'OneStone',
  rightDiamondType = 'RoundDiamond',
  sideDiamondType  = 'RoundDiamond',
  rightCaratSize   = 1.2,
  sideCaratSize    = 1.0,
  cathedral = 'None',
  paveStyle  = 'None',
paveLength = 'Half',
  ...props
  
}) {
  const bandComfort = bandComfortProp ?? bandFit ?? 'standard'

  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/TEST1.glb')
  const { actions } = useAnimations(animations, group)
  const { scene }   = useThree()
  const [envMap, setEnvMap] = useState(scene.environment)

  useEffect(() => {
    if (scene.environment) { setEnvMap(scene.environment); return }
    const interval = setInterval(() => {
      if (scene.environment) { setEnvMap(scene.environment); clearInterval(interval) }
    }, 100)
    return () => clearInterval(interval)
  }, [scene])

  const isTwoStone   = stoneCount === 'TwoStone'
  const isThreeStone = stoneCount === 'ThreeStone'

  const effectiveSideCarat = isThreeStone ? autoSideCarat(caratSize) : sideCaratSize

  const orientationZ =
    orientation === 'EastWest' ? Math.PI / 2 :
    orientation === 'Kite'     ? Math.PI / 4.2 : 0

  const bwRatio = bandWidth / BW_DEFAULT

  const metalProps = {
    transitionColor: metalColor,
    metalness: 1, roughness: 0.16, clearcoat: 0.9, clearcoatRoughness: 0.1,
  }

  const RefractionMat = ({ color = '#ffffff' }) => (
    <RefractionMaterial envMap={envMap} color={color} />
  )

  // ── Prong / tip helpers ────────────────────────────────────────────────────

  const isProng3         = prongCount === 'Prong3'
  const isProng5         = prongCount === 'Prong5'
  const isProng          = prongCount.startsWith('Prong')
  const isCompass        = prongCount === 'Compass4'
  const isClassic        = prongCount === 'Classic'
  const isCompassOrProng = isCompass || isProng

  const showTab        = prongTips === 'Tab'
  const showRounded    = prongTips === 'Rounded'
  const showClaw       = prongTips === 'Claw'
  const showPetiteClaw = prongTips === 'PetiteClaw'
const showCathedral         = cathedral === 'Cathedral'
const isCathedralThreeStone = showCathedral && isThreeStone

  const tipVisible = (name) => {
    const n = name.toLowerCase()
    const isPetiteClaw = n.includes('petiteclaw') || (n.includes('petite') && n.includes('claw'))
    const isClaw       = n.includes('claw') && !isPetiteClaw
    const isTabTip     = n.includes('tab')
    const isRoundedTip = !isPetiteClaw && !isClaw && !isTabTip && n.includes('round') && n.includes('tip')
    if (isTabTip     && !showTab)        return false
    if (isPetiteClaw && !showPetiteClaw) return false
    if (isClaw       && !showClaw)       return false
    if (isRoundedTip && !showRounded)    return false
    if (n.includes('compassprong')) return isCompassOrProng
    if (n.includes('extra')) {
      if (isProng3) return false
      if (isProng5) return true
      return isProng
    }
    if (n.includes('prong'))   return isProng
    if (n.includes('compass')) return isCompass
    if (n.includes('classic')) return isClassic
    return true
  }

  const isComfortBand      = bandComfort === 'comfort'
  const showStandardSquare = bandShape === 'square' && !isComfortBand
  const showStandardCircle = bandShape === 'circle' && !isComfortBand

  const sharedDiamondProps = {
    nodes, materials, metalProps, basket, tipVisible,
    TransitionMaterial, RefractionMaterial: RefractionMat,
    prongCount, prongTips, envMap,  cathedral,
  }

  const effectiveProng = (isTwoStone || isThreeStone) ? 'Classic' : prongCount

  // ── Compressed visual carat sizes ─────────────────────────────────────────
  const visualCarat      = toVisualCarat(caratSize)
  const visualRightCarat = toVisualCarat(rightCaratSize)
  const visualSideCarat  = toVisualCarat(effectiveSideCarat)

  return (
    <group {...props} dispose={null}>
      <group ref={group} scale={ringSize} name="Scene">

        {/* ── Band ── */}
        {showStandardSquare && (
          <mesh
              name="Squareband"
          castShadow
          receiveShadow
          geometry={nodes.Squareband.geometry}
          // material={materials['Material.026']}
          position={[0.134, 1.205, -0.014]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        
            scale={[0.138, 0.055 * bwRatio, 0.138]}
          >
            <TransitionMaterial {...metalProps} />
          </mesh>
        )}
        {showStandardCircle && (
          <mesh
              name="Circleband"
          castShadow
          receiveShadow
          geometry={nodes.Circleband.geometry}
          material={nodes.Circleband.material}
          position={[0.132, 1.2, -0.017]}
          // rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        
            scale={[1.015* bwRatio,1.015, 1.015]}
          >
            <TransitionMaterial {...metalProps} />
          </mesh>
        )}
        {/* {showCathedral && !isThreeStone && (
  <mesh
    name="Cathedral"
    castShadow receiveShadow
    geometry={nodes.Cathedral.geometry}
    position={[0.128, 2.342, -0.546]}
    rotation={[0.016, 1.571, 0]}
    scale={[0.548, 0.548, 0.467]}
  >
    <TransitionMaterial {...metalProps} />
  </mesh>
)} */}
{/* <CathedralArm side="left" material={<TransitionMaterial {...metalProps} />} /> */}

// After
{/* {showCathedral && !isTwoStone && (
  <CathedralPair material={<TransitionMaterial {...metalProps} />} />
)} */}
<PaveLength
  nodes={nodes}
  materials={materials}
  paveStyle={paveStyle}
  paveLength={paveLength}
  TransitionMaterial={TransitionMaterial}
  metalProps={metalProps}
         {...sharedDiamondProps}
/>


{/* {showCathedral && isThreeStone && (
  <mesh
    name="CathedralThreeStone"
    castShadow receiveShadow
    geometry={nodes.CathedralThreeStone.geometry}   
    position={[0.128, 2.342, -0.546]}           
    rotation={[0.016, 1.571, 0]}
    scale={[0.65, 0.65, 0.55]}                      
  >
    <TransitionMaterial {...metalProps} />
  </mesh>
)} */}

    
        {!isTwoStone && !isThreeStone && (
          <DiamondByType
            diamondType={diamondType}
            orientationZ={orientationZ}
            caratSize={visualCarat}
            xOffset={0}
            prongCount={effectiveProng}
            {...sharedDiamondProps}
          />
        )}

        {/* ══ TWO STONE ══ */}
        {isTwoStone && (
          <TwoStone
            diamondType={diamondType}
            rightDiamondType={rightDiamondType}
            caratSize={caratSize}
            visualCarat={visualCarat}
            visualRightCarat={visualRightCarat}
            rightCaratSize={rightCaratSize}
            sharedDiamondProps={sharedDiamondProps}
          />
        )} 

        {/* ══ THREE STONE ══ */}
         {isThreeStone && (
          <ThreeStone
            diamondType={diamondType}
            sideDiamondType={sideDiamondType}
            caratSize={caratSize}
            visualCarat={visualCarat}
            visualSideCarat={visualSideCarat}
            effectiveSideCarat={effectiveSideCarat}
            sharedDiamondProps={sharedDiamondProps}
          />
        )}  

      </group>
    </group>
  )
}

useGLTF.preload('/TEST1.glb')