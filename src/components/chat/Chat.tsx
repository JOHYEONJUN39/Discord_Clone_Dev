import './Chat.scss'
import { ChatHeader } from './ChatHeader'
import { AddCircleOutline, CardGiftcard, Gif, EmojiEmotions } from '@mui/icons-material/';
import ChatMessage from './ChatMessage';
import { useAppSelector } from '../../app/hooks';
import { CollectionReference, DocumentData, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import useSubCollection from '../hooks/useSubCollection';
import { useState } from 'react';


export default function Chat() {
  const [inputText, setInputText] = useState<string>("");
  const channelId: string | null = useAppSelector((state) => state.channel.channelId);
  const user = useAppSelector((state) => state.user.user);
  // channelId를 연관배열에 추가함으로 인해 channelId가 변경될 때마다 useEffect가 실행됨
  const { subDocuments: messages } = useSubCollection("channels", "messages");
  
  const sendMessage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    // channels 콜렉션 안에 있는 message컬렉션 안의 메세지정보를 기입
    // channelId를 String으로 캐스팅 하여 사용
    const collectionRef: CollectionReference<DocumentData> = collection(
      db, "channels", String(channelId), "messages"
    );

    await addDoc(collectionRef, {
      message: inputText,
      timestamp: serverTimestamp(),
      user: user,
    });
    const chatMessage = document.querySelector(".chatMessage");
    chatMessage?.scrollTo(0, chatMessage.scrollHeight);
    setInputText("");
  }
  const channelName = useAppSelector((state) => state.channel.channelName)
  
  return (
    <div className='chat'>
      {/* chat header */}
      <ChatHeader channelName={channelName}/>
      {/* chat messages */}
      <div className='chatMessage'>
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.message}
            timestamp={message.timestamp}
            user={message.user}
          />
        ))}
      </div>
      {/* chat input */}
      <div className='chatInput'>
        <AddCircleOutline />
        <form action="">
          <input
            type="text"
            placeholder='#Udemyへメッセージを送信'
            value={inputText}
            onChange={(e : React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}/>
          <button
            type='submit'
            className='chatInputButton'
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => sendMessage(e)}>
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
