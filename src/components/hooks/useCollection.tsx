import { useEffect, useState } from 'react'
import { Channel } from '../../types/Channel.interface';
import { DocumentData, Query, collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../../firebase';

const useCollection = (data: string) => {
  const [documents, setDocuments] = useState<Channel[]>([]);
  const collectionRef: Query<DocumentData> = query(collection(db, data));

  useEffect(() => {
    onSnapshot(collectionRef, (querySnapshot) => {
      const channelsResults: Channel[] = [];
      querySnapshot.docs.forEach((doc) => channelsResults.push({
        id: doc.id,
        channel: doc.data(),
      }));
      setDocuments(channelsResults);
    })
  }, [])
  return { documents };
}

export default useCollection