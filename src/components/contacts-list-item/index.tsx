import React from 'react'
import { observer } from 'mobx-react-lite'
import './index.scss'



export default observer(function(prop:any) {
  const {info} = prop
  return (
    <div className='contacts-item'>
      <div className='avatar'>
        <img src={info.icon} alt={info.name} />
      </div>
      <div className='name'>{info.name}</div>
    </div>
  )
})
