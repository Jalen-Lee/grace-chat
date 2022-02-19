import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import ConversationList from '../../ConversationList'
import ContactsList from '../../contactsList'
import {NavTabItemName} from '../../../types/common.d'


import './index.scss'

interface Prop {
  currentTab:NavTabItemName,
  conversationChange:(conversation:any)=>void
}


export default observer(function({
  currentTab, conversationChange
}:Prop) {

  // const _map:any = {
  //   [NavTabItemName.CONVERSATION_LIST]:<ConversationList conversationChange={conversationChange}/>,
  //   [NavTabItemName.FRIEND_LIST]: <ContactsList/>
  // }


  return (
    <aside className='chat-layout-sidebar-container'>
      {/*{*/}
      {/*  _map[currentTab]*/}
      {/*}*/}
      <ConversationList
        conversationChange={conversationChange}
        isShow={currentTab === NavTabItemName.CONVERSATION_LIST}
      />
      <ContactsList
        isShow={currentTab === NavTabItemName.FRIEND_LIST}
      />
    </aside>
  )
})
