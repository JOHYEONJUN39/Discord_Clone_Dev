import './Sidebar.scss'
import {  ExpandMore, Add, Mic, Headphones, Settings } from '@mui/icons-material/';
import SidebarChannel from './SidebarChannel';
import { auth, db } from '../../firebase';
import { useAppSelector } from '../../app/hooks';
import useCollection from '../hooks/useCollection';
import { addDoc, collection } from 'firebase/firestore';

const Sidebar = () => {
  const user = useAppSelector((state) => state.user.user);
  const { documents: channels } = useCollection('channels');

  const addChannel = async () => {
    let channelName: string | null = prompt("新しいチャンネルを作成します。");
    // channelName이 존재하면 firebase db에 채널 추가
    if(channelName) {
      // collection의 "channels"에 새로운 document를 추가
      await addDoc(collection(db, "channels"), {
        channelName: channelName,
      });
    }
  }

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
            <Add className='sidebarAddIcon' onClick={() => addChannel()} />
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