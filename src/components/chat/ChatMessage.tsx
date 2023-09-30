import React from 'react'
import './ChatMessage.scss'
import { Avatar } from '@mui/material/';
import { Messages } from '../../types/Messages.interface';

const ChatMessage = (props: Messages) => {
  const { message, timestamp, user } = props;
  return (
    <div className='message'>
      <Avatar src={user?.photo}/>
      <div className='messageInfo'>
        <h4>
          {user?.displayName}
          <span className='messageTimestamp'>
            {new Date(timestamp?.toDate()).toLocaleString()}
          </span>
        </h4>

        <p>{message}</p>
      </div>
    </div>
  )
}

export default ChatMessage