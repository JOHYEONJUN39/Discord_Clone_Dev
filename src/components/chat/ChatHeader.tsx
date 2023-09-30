import React from 'react'
import './ChatHeader.scss'
import { Notifications, PushPin, People, Search, Send, Help } from '@mui/icons-material/';

type Props = {
  channelName: string | null;
}

export const ChatHeader = (props: Props) => {
  const { channelName } = props;
  return (
    <div className='chatHeader'>
      <div className='chatHeaderLeft'>
        <h3>
          <span className='chatHeaderHash'>#</span>
          {channelName}
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
