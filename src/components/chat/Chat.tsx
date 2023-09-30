import React from 'react'
import './Chat.scss'
import { ChatHeader } from './ChatHeader'

export default function Chat() {
  return (
    <div className='chat'>
      {/* chat header */}
      <ChatHeader />
      {/* chat messages */}
      <div className='chatMessage'>

      </div>
      {/* chat input */}
      <div className='chatInput'>
        
      </div>
    </div>
  )
}
