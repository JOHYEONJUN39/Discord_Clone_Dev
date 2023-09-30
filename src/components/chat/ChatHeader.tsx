import React from 'react'
import './ChatHeader.scss'
import { Notifications, PushPin, People, Search, Send, Help } from '@mui/icons-material/';

export const ChatHeader = () => {
  return (
    <div className='chatHeader'>
      <div className='chatHeaderLeft'>
        <h3>
          <span className='chatHeaderHash'>#</span>
          Udemy
        </h3>
      </div>

      <div className='chatHeaderRight'>
        <Notifications />
        <PushPin />
        <People />
        <div className='chatHeaderSearch'>
          <input type="text" placeholder='検索' />
          <Search />
        </div>
        <Send />
        <Help />
      </div>
    </div>
  )
}
