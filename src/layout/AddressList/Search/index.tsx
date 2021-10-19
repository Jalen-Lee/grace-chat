import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import './style.scss'

export default function Search() {
  return (
    <div className='grace-chat-search'>
      <SearchOutlined style={{color:'#c8cad2',fontSize:'22px'}}/>
      <input
        className='grace-chat-search-input'
        type='text'
        placeholder='Enter for search'
      />
    </div>
  )
}
