import React from 'react'
import {
  IconComment,
  IconUserGroup,
  IconSetting,
  IconHelpCircle,
} from '@douyinfe/semi-icons'
import { Avatar } from '@douyinfe/semi-ui'
import IconWrapper from '../../components/IconWrpper'

import './index.scss'

export default function Sidebar() {
  return (
    <aside className='zeta-chat-layout-sidebar'>
      <div>
        <div className='zeta-chat-layout-sidebar-header'>
          <Avatar
            src='https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/avatarDemo.jpeg'
            style={{ margin: 4 }}
            size='small'
          />
        </div>
        <ul className='zeta-chat-layout-sidebar-tools'>
          <li className='zeta-chat-layout-sidebar-tools-item'>
            <IconWrapper
              className='zeta-chat-layout-sidebar-icon'
              badge={{ count: 100, dot: true }}
              tooltip={{ content: '消息', position: 'right' }}
            >
              <IconComment style={{ fontSize: '20px' }} />
            </IconWrapper>
          </li>
          <li className='zeta-chat-layout-sidebar-tools-item'>
            <IconWrapper className='zeta-chat-layout-sidebar-icon'>
              <IconUserGroup style={{ fontSize: '20px' }} />
            </IconWrapper>
          </li>
        </ul>
      </div>
      <div className='zeta-chat-layout-sidebar-footer'>
        <IconWrapper className='zeta-chat-layout-sidebar-icon'>
          <IconHelpCircle style={{ fontSize: '20px' }} />
        </IconWrapper>
        <IconWrapper className='zeta-chat-layout-sidebar-icon'>
          <IconSetting style={{ fontSize: '20px' }} />
        </IconWrapper>
      </div>
    </aside>
  )
}
