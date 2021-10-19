import React from 'react'
import Sidebar from './Sidebar'
import AddressList from './AddressList'
import ChatArea from './ChatArea'
import ChatPanel from './ChatPanel'

import './style.scss'

export default function BaseLayout() {
  return (
    <div className='grace-chat-BaseLayout'>
      <Sidebar />
      <AddressList />
      <ChatArea />
      <ChatPanel />
    </div>
  )
}
