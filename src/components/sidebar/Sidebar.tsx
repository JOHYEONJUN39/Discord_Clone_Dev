import React from 'react'
import './Sidebar.scss'

import {  ExpandMore, Add } from '@mui/icons-material/';
import SidebarChannel from './SidebarChannel';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* sidebar Left */}
      <div className='sidebarLeft'>
        <div className='serverIcon'>
          <img src="./logo192.png" alt="" />
        </div>
        <div className='serverIcon'>
          <img src="./logo192.png" alt="" />
        </div>
      </div>
      {/* sidebar Right */}
      <div className='sidebarRight'>
        <div className='sidebarTop'>
          <h3>Discord</h3>
          <ExpandMore />
        </div>

        {/* sidebar Channels */}
        <div className='sidebarChannels'>
          <div className='sidebarChannelsHeader'>
            <div className='sidebarHeader'>
              <ExpandMore />
              <h4>프로그래밍 채널</h4>
            </div>
            <Add className='sidebarAddIcon' />
          </div>

          <div className='sidebarChannelList'>
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar