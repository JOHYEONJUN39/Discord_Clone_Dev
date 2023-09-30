import { useEffect, useState } from 'react'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase';
import { Messages } from '../../types/Messages.interface';
import { useAppSelector } from '../../app/hooks';

const useSubCollection = (collectionName: string, subCollectionName: string) => {
  const channelId: string | null = useAppSelector((state) => state.channel.channelId);
  const [subDocuments, setSubDocuments] = useState<Messages[]>([]);
  
  useEffect(() => {
    let collectionRef = collection(db, collectionName, String(channelId), subCollectionName)
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
      setSubDocuments(results);
    })
  }, [channelId])
  return { subDocuments };
}

export default useSubCollection