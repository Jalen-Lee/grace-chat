import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import ConversationList from '../../conversations-list'
import ContactsList from '../../contacts-list'
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
  //   [NavTabItemName.CONVERSATION_LIST]:<conversations-list conversationChange={conversationChange}/>,
  //   [NavTabItemName.FRIEND_LIST]: <ContactsList/>
  // }


  return (
    <aside className='chat-layout-sidebar-container'>
      {/*{*/}
      {/*  _map[currentTab]*/}
      {/*}*/}
      <ConversationList
        conversationChange={conversationChange}
        isShow={currentTab === NavTabItemName.CONVERSATIONS_LIST}
      />
      <ContactsList
        isShow={currentTab === NavTabItemName.CONTACTS_LIST}
      />
    </aside>
  )
})
