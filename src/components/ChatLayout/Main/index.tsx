import React from 'react'
import './index.scss'
import { observer } from 'mobx-react-lite'
import MessageRecord from '../../MessageRecord'
import InputBar from '../../InputBar'

import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

interface Prop {
  currentConversation: any
}

export default observer(function({ currentConversation }: Prop) {
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

  return (
    <section className='chat-layout-main-container'>
      <header className='header'>
        <div className='left'>
          <div className='friend-name'>{currentConversation.name}</div>
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
          <MessageRecord message={message1} />
          <MessageRecord message={message2} />
          <MessageRecord message={message1} />
          <MessageRecord message={message2} />
          <MessageRecord message={message1} />
          <MessageRecord message={message2} />
          <MessageRecord message={message1} />
        </div>
      </main>
      <div className='input-area'>
        <InputBar />
      </div>
    </section>
  )
})
