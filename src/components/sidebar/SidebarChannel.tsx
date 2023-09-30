import React from 'react'
import './SidebarChannel.scss'
import { Channel } from '../../types/Channel.interface';

const SidebarChannel = (props: Channel) => {
  const { id, channel } = props;
  console.log(channel);

  return (
    <div className='sidebarChannel'>
      <h4>
        <span className='sidebarChannelHash'>#</span>
        {channel.channel.channelName}
      </h4>
    </div>
  )
}

export default SidebarChannel