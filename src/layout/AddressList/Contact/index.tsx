import React from 'react'
import { Avatar, Badge } from 'antd'

import './style.scss'

export default function Contact() {
  return (
    <div className='grace-chat-contact'>
      <div className='grace-chat-contact-avatar'>
        <Badge count={5} offset={[0, 10]}>
          <Avatar
            src='https://joeschmoe.io/api/v1/random'
            style={{
              backgroundColor: '#f56a00',
              width: '50px',
              height: '50px',
            }}
          ></Avatar>
        </Badge>
      </div>
      <div className='grace-chat-contact-info'>
        <div className='grace-chat-contact-info-wrap'>
          <span className='nickname'>Jalen Lee</span>
          <span className='date'>18:00</span>
        </div>
        <div className='grace-chat-contact-info-summary'>
          text-overflow省略号样式语法结构 -TOP text-overflow语法...
        </div>
      </div>
    </div>
  )
}
