import './Sidebar.scss'
import {  ExpandMore, Add, Mic, Headphones, Settings } from '@mui/icons-material/';
import SidebarChannel from './SidebarChannel';
import { auth, db } from '../../firebase';
import { useAppSelector } from '../../app/hooks';
import { useEffect, useState } from 'react';
import { onSnapshot, collection, query } from 'firebase/firestore';
import { Channel } from '../../types/Channel.interface';

const Sidebar = () => {
  const [channels, setChannels] = useState<Channel[]>([]);

  const user = useAppSelector((state) => state.user);

  const q = query(collection(db, "channels"));

  useEffect(() => {
    onSnapshot(q, (querySnapshot) => {
      const channelsResults: Channel[] = [];
      querySnapshot.docs.forEach((doc) => channelsResults.push({
        id: doc.id,
        channel: doc.data(),
      }));
      setChannels(channelsResults);
    })
  }, [])

  return (
    <div className='sidebar'>
      {/* sidebar Left */}
      <div className='sidebarLeft'>
        <div className='serverIcon'>
          <img src="./discordIcon.png" alt="" />
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
              <h4>プログラミングチャンネル</h4>
            </div>
            <Add className='sidebarAddIcon' />
          </div>

          <div className='sidebarChannelList'>
            {channels.map((channel) => (
              <SidebarChannel key={channel.id} channel={channel} id={channel.id}/>
            ))}
          </div>
        </div>

        <div className='sidebarFooter'>
          <div className='sidebarAccount'>
            <img src={user?.photo} alt=""  onClick={() => auth.signOut()}/>
            <div className='accountName'>
              <h4>{user?.displayName}</h4>
              <span>#{user?.uid.substring(0, 4)}</span>
            </div>
          </div>

          <div className='sidebarVoice'>
            <Mic />
            <Headphones />
            <Settings />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar