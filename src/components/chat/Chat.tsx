import './Chat.scss'
import { ChatHeader } from './ChatHeader'
import { AddCircleOutline, CardGiftcard, Gif, EmojiEmotions } from '@mui/icons-material/';
import ChatMessage from './ChatMessage';
import { useAppSelector } from '../../app/hooks';
import { useEffect, useState } from 'react';
import { CollectionReference, DocumentData, addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { Messages } from '../../types/Messages.interface';

export default function Chat() {
  const [inputText, setInputText] = useState<string>("");
  const [messages, setMessages] = useState<Messages[]>([]);
  const channelId: string | null = useAppSelector((state) => state.channel.channelId);
  const user = useAppSelector((state) => state.user.user);
  // channelId를 연관배열에 추가함으로 인해 channelId가 변경될 때마다 useEffect가 실행됨
  useEffect(() => {
    let collectionRef = collection(db, "channels", String(channelId), "messages")
    // 날자별로 정렬
    const collectionRefOrderBy = query(collectionRef, orderBy("timestamp", "asc"));

    // 실시간으로 정보를 가져옴
    // 1번째 인자로 무엇을 참조하는지 콜렉션의 위치를 넣어줌
    // 2번째 인자로 콜렉션의 정보를 가져오는 함수를 넣어줌
    onSnapshot(collectionRefOrderBy, (snapshot) => {
      let results: Messages[] = [];
      snapshot.forEach((doc) => {
        // 배열에 push 해줌
        results.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        });
      });
      // 배열을 setMessages에 넣어줌
      setMessages(results);
    })
  }, [channelId])
  
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
