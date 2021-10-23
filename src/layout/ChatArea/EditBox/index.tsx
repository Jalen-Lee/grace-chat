import React, { useRef, useState, useEffect } from 'react'
import { Button } from 'antd'

import './index.scss'

export default function EditBox() {
  const inputRef = useRef<HTMLPreElement>(null)
  const [inputVal, setInputVal] = useState('')

  useEffect(() => {
    console.log(inputRef)
  }, [])

  const onInput: React.FormEventHandler<HTMLPreElement> = function (e) {
    const { current} = inputRef
    let nativeEvent = e.nativeEvent as InputEvent
    if (!current || nativeEvent.isComposing) return
    setInputVal(current.innerText)
  }

  const onCompositionEnd: React.CompositionEventHandler<HTMLPreElement> =
    function (e) {
      const { current } = inputRef
      current && setInputVal(current.innerText)
    }

  const onKeyDown: React.KeyboardEventHandler<HTMLPreElement> = function (e) {
    console.log('键盘按下', e)
    let { key, ctrlKey } = e
    const { current } = inputRef
    if (!current) return
    switch (key) {
      case 'Enter':
        e.preventDefault()
        if (!ctrlKey) {
          console.log('发送消息')
          current.innerHTML = '<div><br/></div>'
        } else {
          current.innerHTML += '<div><br/></div>'
          let o = current.lastChild
          let sel = window.getSelection()
          let range = document.createRange()
          range.selectNodeContents(current)
          range.collapse(false)
          range.setEndAfter(o as Node)
          range.setStartAfter(o as Node)
          sel?.removeAllRanges()
          sel?.addRange(range)
          current.scrollTop = current.scrollHeight
        }
        break
      default:
        break
    }
  }

  const onKeyUp: React.KeyboardEventHandler<HTMLPreElement> = function (e) {
    let { key, ctrlKey } = e
  }

  return (
    <div className='edit-box'>
      <pre
        id='editArea'
        contentEditable='true'
        onCompositionEnd={onCompositionEnd}
        onInput={onInput}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        ref={inputRef}
        suppressContentEditableWarning
      >
        <div>
          <br />
        </div>
      </pre>
      <div className='edit-box-footer'>
        <span>字数：{inputVal.length}</span>
        <Button type='primary'>发送</Button>
      </div>
    </div>
  )
}
