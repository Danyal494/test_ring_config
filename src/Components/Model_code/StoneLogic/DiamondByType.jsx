import React from 'react'
import Emerald          from '../SubCode/Emerald'
import CusihonElong     from '../SubCode/CusihonElong'
import CushionSquare    from '../SubCode/CushionSquare'
import Asscher          from '../SubCode/Asscher'
import Marqusie         from '../SubCode/Marqusie'
import Oval             from '../SubCode/Oval'
import Princess         from '../SubCode/Princess'
import RadiantSquare    from '../SubCode/RadiantSquare'
import Pear             from '../SubCode/Pear'
import Round            from '../SubCode/Round'
import RadiantElong     from '../SubCode/RadiantElong'

export default function DiamondByType({
  diamondType,
  nodes,
  materials,
  metalProps,
  basket,
  tipVisible,
  TransitionMaterial: TM,
  RefractionMaterial: RM,
  prongCount,
  prongTips,
  orientationZ     = 0,
  caratSize        = 1.5,
  envMap,
  xOffset          = 0,
  offsetOverride   = null,
  rotationOverride = null,
    cathedral = 'None',
}) {
  const commonProps = {
    orientationZ, nodes, materials, prongCount, prongTips, basket,
    tipVisible, TransitionMaterial: TM, RefractionMaterial: RM,
    metalProps, caratSize, envMap,cathedral,
  }

  const inner = (() => {
    switch (diamondType) {
      case 'EmeraldDiamond':          return <Emerald       {...commonProps} />
      case 'AsscherDiamond':          return <Asscher       {...commonProps} />
      case 'MarquiseDiamond':         return <Marqusie      {...commonProps} />
      case 'RoundDiamond':            return <Round         {...commonProps} />
      case 'CushionElongatedDiamond': return <CusihonElong  {...commonProps} />
      case 'CushionDiamond':          return <CushionSquare {...commonProps} />
      case 'OvalDiamond':             return <Oval          {...commonProps} />
      case 'PearDiamond':             return <Pear          {...commonProps} />
      case 'PrincessDiamond':         return <Princess      {...commonProps} />
      case 'RadiantDiamond':          return <RadiantSquare {...commonProps} />
      case 'RadiantElongatedDiamond': return <RadiantElong  {...commonProps} />
      default:                        return null
    }
  })()

  if (!inner) return null

  if (offsetOverride || rotationOverride) {
    const pos = [
      (offsetOverride?.x ?? 0) + xOffset,
       offsetOverride?.y ?? 0,
       offsetOverride?.z ?? 0,
    ]
    const rot = [
      rotationOverride?.rx ?? 0,
      rotationOverride?.ry ?? 0,
      rotationOverride?.rz ?? 0,
    ]
    return <group position={pos} rotation={rot}>{inner}</group>
  }

  return <group position={[xOffset, 0, 0]}>{inner}</group>
}