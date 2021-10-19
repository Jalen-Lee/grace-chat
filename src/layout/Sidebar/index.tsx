import React from 'react'
import { SettingOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import GIcon from '../../components/GIcon'
import './style.scss'

const listItemStyle = {
  fontSize: '32px',
  color: '#ffffff',
}

const lists = [
  <GIcon type='icon-Chat' style={listItemStyle} />,
  <GIcon type='icon-a-2User' style={listItemStyle} />,
]

export default function Sidebar() {
  return (
    <aside className='grace-chat-BaseLayout-sidebar'>
      <div className='grace-chat-BaseLayout-sidebar-header'>
        <Avatar src='https://joeschmoe.io/api/v1/random' size='large' style={{ backgroundColor: '#f56a00' }}/>
      </div>
      <div className='grace-chat-BaseLayout-sidebar-body'>
        <ul className='grace-chat-BaseLayout-sidebar-body-list'>
          {lists.map((i) => {
            return (
              <li className='grace-chat-BaseLayout-sidebar-body-list-li'>
                {i}
              </li>
            )
          })}
        </ul>
        <div className='grace-chat-BaseLayout-sidebar-body-setting'>
          <SettingOutlined
            style={{
              color: '#ffffff',
              fontSize: '32px',
            }}
          />
        </div>
      </div>
    </aside>
  )
}
