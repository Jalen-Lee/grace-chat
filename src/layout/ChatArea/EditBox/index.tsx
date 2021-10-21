import React from 'react'
import { Button } from 'antd'

import './index.scss'

const onInput: React.FormEventHandler = function (e) {}

const onCompositionEnd: React.CompositionEventHandler<HTMLPreElement> =
  function (e) {}

const onKeyDown: React.KeyboardEventHandler<HTMLPreElement> = function (e) {
  console.log('键盘按下', e)
  let { key, ctrlKey } = e
  const target = e.target as HTMLElement
  switch (key) {
    case 'Enter':
      e.preventDefault()
      if (!ctrlKey) {
        console.log('发送')
        target.innerHTML = '<br/>'
      } else {
        target.innerHTML += '<br/><br/>'
        var o = target.lastChild
        var sel = window.getSelection()
        var range = document.createRange()
        range.selectNodeContents(target)
        range.collapse(false)
        range.setEndAfter(o as Node)
        range.setStartAfter(o as Node)
        sel?.removeAllRanges()
        sel?.addRange(range)
      }

      console.log(target.innerText)
      // console.log(e.target)

      break
    default:
      break
  }
}

const onKeyUp: React.KeyboardEventHandler<HTMLPreElement> = function (e) {
  let { key, ctrlKey } = e
  const target = e.target as HTMLElement
  // if(target.lastChild?.nodeName !== 'BR'){
  //   let br = document.createElement('br')
  //   target.appendChild(br)
  // }
  // console.log(target.lastChild)

  switch (key) {
    case 'Enter':
      e.preventDefault()
      if (!ctrlKey) {
      } else {
      }
      break
    default:
      break
  }
}

export default function EditBox() {
  return (
    <div className='edit-box'>
      <pre
        id='editArea'
        contentEditable='true'
        onCompositionEnd={onCompositionEnd}
        onInput={onInput}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
      >
        <br />
      </pre>
      <div className='edit-box-footer'>
        <span>字数：123</span>
        <Button type='primary'>发送</Button>
      </div>
    </div>
  )
}
