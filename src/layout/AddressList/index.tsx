import React from 'react'
import Search from './Search'
import Contact from './Contact'
import { PlusOutlined } from '@ant-design/icons'
import './style.scss'
export default function AddressList() {
  return (
    <div className='grace-chat-BaseLayout-address'>
      <div className='grace-chat-BaseLayout-address-header'>
        <Search />
        <PlusOutlined
          style={{
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            backgroundColor: '#ffd449',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#ffffff',
            fontSize: '14px',
            fontWeight: 800,
          }}
        />
      </div>
      <div className='grace-chat-BaseLayout-address-body'>
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </div>
    </div>
  )
}
