import React from 'react'
import { observer } from 'mobx-react-lite'
import './index.scss'
import {
  KeyboardVoice as KeyboardVoiceIcon,
  Videocam as VideocamIcon
} from '@mui/icons-material'
import Message from '../conversations-detail-message'
import TextBox from '../conversation-detail-textbox'

const message1 = {
  from: 'opposite',
  type: 'text',
  content: '自动调整字符大小\n' +
    '对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。也可使用 gap 来设置字符距离左右两侧边界单位像素。',
}
const message2 = {
  from: 'self',
  type: 'text',
  content: '自动调整字符大小\n' +
    '对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。也可使用 gap 来设置字符距离左右两侧边界单位像素。',
}

interface ConversationDetailProps{
  detail:any
  children?:React.ReactNode
}


const ConversationDetail = observer(function ({ detail }:ConversationDetailProps){
  const {name,avatar} = detail

  return (
    <div className={'conversation-detail'}>
      <header className='header'>
        <div className='left'>
          <div className='friend-name'>{name}</div>
        </div>
        <div className='right'>
          <div className='video-call'>
            <KeyboardVoiceIcon fontSize={'medium'}/>
          </div>
          <div className='voice-call'>
            <VideocamIcon fontSize={'medium'}/>
          </div>
        </div>
      </header>
      <main className='content'>
        <div className='msg-scroller'>
          <div className='no-more'>没有更多了</div>
          <Message data={message1} />
          <Message data={message2} />
          <Message data={message2} />
          <Message data={message2} />
          <Message data={message2} />
          <Message data={message2} />
          <div className='no-more'>17:15</div>
          <Message data={message2} />
        </div>
      </main>
      <div className='input-area'>
        <TextBox />
      </div>
    </div>
  )
})

export default ConversationDetail


