import React from 'react'
import './index.scss'
import { observer } from 'mobx-react-lite'
import IEmpty, { IEmptyType } from '../../i-empty'
import ConversationDetail from '../../conversation-detail'
import { NavTabItemName } from '../../../types/common.d'

interface Prop {
  currentConversation?: any
  currentTab: any
}

function wrapper(el: React.ReactNode) {
  return (
    <section className='chat-layout-main-container'>
      {el}
    </section>
  )
}

export default observer(function({ currentConversation, currentTab }: Prop) {
  if (currentTab === NavTabItemName.CONVERSATIONS_LIST) {
    if (!currentConversation) return wrapper(<IEmpty type={IEmptyType.NO_MSG}/>)
    else {
      return wrapper(<ConversationDetail detail={currentConversation} />)
    }
  } else if (currentTab === NavTabItemName.CONTACTS_LIST) {
    return wrapper(<IEmpty type={IEmptyType.NULL_DATA}/>)
  } else {
    return wrapper(<IEmpty type={IEmptyType.NO_DATA}/>)
  }
})
