import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import {
  ChatNavigation,
  ChatSidebar,
  ChatMain
} from '../../components/ChatLayout'
import { NavTabItemName } from '../../types/common.d'

import './index.scss'

export default function Chat() {
  const [ currentTab,setCurrentTab ] = useState<NavTabItemName>(NavTabItemName.CONVERSATION_LIST)
  const [ currentConversation,setCurrentConversation] = useState<any>('')

  function onTabChange(tabId:NavTabItemName){
    setCurrentTab(tabId)
  }

  function onConversationChange(conversation:any){
    setCurrentConversation(conversation)
    console.log("#11",conversation)
  }

  return (
    <div id='chat-container'>
      <div className='bg'/>
      <div className='layout'>
        <Grid container height='100%'>
          <Grid item width={'80px'}>
            <ChatNavigation
              tabChange={onTabChange}
            />
          </Grid>
          <Grid item xs={3}>
            <ChatSidebar
              currentTab={currentTab}
              conversationChange={onConversationChange}
            />
          </Grid>
          <Grid item xs>
            <ChatMain
              currentConversation={currentConversation}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
