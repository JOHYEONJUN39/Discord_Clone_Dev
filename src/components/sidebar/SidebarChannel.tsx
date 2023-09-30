import React from 'react'
import './SidebarChannel.scss'
import { Channel } from '../../types/Channel.interface';
import { useAppDispatch } from '../../app/hooks';
import { setChannelInfo } from '../../features/channelSlice';

const SidebarChannel = (props: Channel) => {
  const { id, channel } = props;
  const dispatch = useAppDispatch();

  return (
    <div className='sidebarChannel' onClick={() => dispatch(setChannelInfo({
      channelId: id,
      channelName: channel.channel.channelName,
    }))}>
      <h4>
        <span className='sidebarChannelHash'>#</span>
        {channel.channel.channelName}
      </h4>
    </div>
  )
}

export default SidebarChannel