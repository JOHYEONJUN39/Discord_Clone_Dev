import React from 'react'
import './Chat.scss'
import { ChatHeader } from './ChatHeader'
import { AddCircleOutline, CardGiftcard, Gif, EmojiEmotions } from '@mui/icons-material/';
import ChatMessage from './ChatMessage';

export default function Chat() {
  return (
    <div className='chat'>
      {/* chat header */}
      <ChatHeader />
      {/* chat messages */}
      <div className='chatMessage'>
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </div>
      {/* chat input */}
      <div className='chatInput'>
        <AddCircleOutline />
        <form action="">
          <input type="text" placeholder='#Udemyへメッセージを送信' />
          <button type='submit' className='chatInputButton'>
            送信
          </button>
        </form>

        <div className='chatInputIcons'>
          <CardGiftcard />
          <Gif />
          <EmojiEmotions />
        </div>
      </div>
    </div>
  )
}
