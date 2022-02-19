import React from "react";
import Avatar from '@mui/material/Avatar';
import MyAvatar from "../../assets/avatar.jpeg";
import './index.scss'

function MsgBubble(props:any){
  return (
    <div className='msg-bubble msg-bubble-receive'>
      <span className='msg-bubble-content'>{props.content}</span>
    </div>
  )
}


export default function MessageRecord(props:any){
  const { from,type,content } = props.message


  return (
    <div className={'message-wrapper'}>
      <div className={'message-body '+ from}>
        <div className={'message-body-sender'}>
          <Avatar src={MyAvatar} style={{
            width:'56px',height:'56px'
          }}/>
        </div>
        <div className={'message-body-content'}>
          <div className={'message-body-content-info'}>

            <MsgBubble content={content}/>
          </div>
          <div className={'message-body-content-date'}>
            <div>2022-01-11 20:51</div>
          </div>
        </div>
        <div className={'message-body-status'}>
        </div>
      </div>

    </div>
  )
}
