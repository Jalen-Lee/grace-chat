import React, { CSSProperties } from 'react'
import { Badge } from '@douyinfe/semi-ui'
import { BadgeProps } from '@douyinfe/semi-ui/lib/es/badge'
import { Tooltip } from '@douyinfe/semi-ui';
import { TooltipProps } from '@douyinfe/semi-ui/lib/es/tooltip';

interface Props {
  className?: string
  style?: CSSProperties
  children: React.ReactNode
  badge?: BadgeProps,
  tooltip?:TooltipProps
}

function badgeWrapper(props:BadgeProps,children:React.ReactNode){
  return (
    <Badge {...props}>
      {children}
    </Badge>
  )
}

function tooltipWrapper(props:TooltipProps,children:React.ReactNode){
  return (
    <Tooltip {...props}>
      {children}
    </Tooltip>
  )
}

export default function IconWrpper(props: Props) {
  if (props.tooltip && props.badge) {
    return tooltipWrapper(props.tooltip,badgeWrapper(props.badge,<div {...props}>{props.children}</div>))
  }
  return <div {...props}>{props.children}</div>
}



