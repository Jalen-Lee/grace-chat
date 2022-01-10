import React from 'react'

import { Avatar, Badge } from 'antd'

export default function GAvatar() {
  return (
    <div className='g-avatar-wrapper'>
      <Badge>
        <Avatar shape='square' size='large' />
      </Badge>
    </div>
  )
}
