import React from 'react'
import { Avatar } from 'antd'
import GIcon from '../../components/GIcon'
import Emotion from './Emotion'
import FileSelect from './FileSelect'
import EditBox from './EditBox'
import './style.scss'
export default function ChatArea() {
  return (
    <div className='grace-chat-BaseLayout-chartarea'>
      <div className='grace-chat-BaseLayout-chartarea-header'>
        <div className='chartarea-header-user'>
          <Avatar
            style={{
              width: '50px',
              height: '50px',
            }}
          >
            U
          </Avatar>
          <div className='chartarea-header-user-info'>
            <span className='chartarea-header-user-info-nick'>Jaylen Lee</span>
            <span className='chartarea-header-user-info-status'>Offline</span>
          </div>
        </div>
        <div className='chartarea-header-options'>
          <GIcon
            type='icon-zhibo'
            className='chartarea-header-options-video'
          ></GIcon>
          <GIcon
            type='icon-yuyin'
            className='chartarea-header-options-yuyin'
          ></GIcon>
          <GIcon
            type='icon-gengduo'
            className='chartarea-header-options-more'
          ></GIcon>
        </div>
      </div>
      <div className='grace-chat-BaseLayout-chartarea-body'></div>
      <div className='grace-chat-BaseLayout-chartarea-input'>
        <div className='chartarea-input-tools'>
          <Emotion></Emotion>
          <FileSelect></FileSelect>
        </div>
        <EditBox></EditBox>
      </div>
    </div>
  )
}
