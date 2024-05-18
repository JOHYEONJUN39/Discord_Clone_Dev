import './SidebarChannel.scss'
import { Channel } from '../../types/Channel.interface';
import { useAppDispatch } from '../../app/hooks';
import { setChannelInfo } from '../../features/channelSlice';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const SidebarChannel = (props: Channel) => {
  const { id, channel } = props;
  const dispatch = useAppDispatch();

  const deleteChannel = async () => {
    // web에서 collection을 삭제하는 것은 보안 문제가 있기 때문에 보류
    // let channelName: boolean = window.confirm("新しいチャンネルを作成します。");
  
    // if(channelName) {
    //   // collection의 "channels"에서 해당 채널 삭제
    //   await deleteDoc(doc(db, "channels", id));
    // }
    alert("権限がございません。")
  }

  return (
    <div className='sidebarChannel' onClick={() => dispatch(setChannelInfo({
      channelId: id,
      channelName: channel.channel.channelName,
    }))}>
      <h4>
        <span className='sidebarChannelHash'>#</span>
        <span className="channelName">{channel.channel.channelName}</span>
        <DeleteForeverIcon onClick={() => deleteChannel()} />
      </h4>
    </div>
  )
}

export default SidebarChannel