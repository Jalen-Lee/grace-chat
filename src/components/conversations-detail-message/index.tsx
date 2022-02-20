import React from "react";
import { Avatar } from 'antd'
import MyAvatar from "../../assets/avatar.jpeg";
import './index.scss'
import classNames from 'classnames'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

dayjs.extend(relativeTime)
dayjs.locale('zh-cn')


function TextContent({content}:any){
  return <span className='message-body-text'>{content}</span>
}

function FileContent(){
  return <div></div>
}

function ImageContent(){
  return <div></div>
}

function VideoContent(){
  return <div></div>
}

function MessageBody(props:any){
  return (
    <div className='message-body'>
      <TextContent content={props.content}/>
    </div>
  )
}


export default function ConversationsDetailMessage(props:any){
  const { from,type,content } = props.data


  return (
    <div className={'conversation-detail-message'}>
      <div className={classNames('message-wrap ',from)}>
        <div className={'message-sender'}>
          <Avatar
            src={MyAvatar}
            shape={'square'}
            size={50}
            draggable={false}
          />
        </div>
        <div className={'message-content'}>
          {/*<div className={'message-content-header'}>*/}
          {/*  jaylenl*/}
          {/*</div>*/}
          <div className={'message-content-main'}>
            <MessageBody content={content}/>
          </div>
          <div className={'message-content-post-time'}>
            <span>{dayjs().fromNow()}</span>
          </div>
        </div>
        <div className={'message-status'}>
        </div>
      </div>

    </div>
  )
}
