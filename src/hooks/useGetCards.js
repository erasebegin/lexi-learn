import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function useGetCards(submittedCard) {
  const [currentWords, setCurrentWords] = useState([]);
  const [currentIDs, setCurrentIDs] = useState([]);
  const [loading, setLoading] = useState([]);

  async function getCards() {
    setLoading(true);
    try {
      const cardData = await getDocs(collection(db, 'cards'));
      let wordList = [];
      let idList = [];
      cardData.forEach((doc) => {
        wordList.push(doc.data());
        idList.push(doc.id);
      });
      setCurrentWords(wordList);
      setCurrentIDs(idList);
      setLoading(false);
    } catch (e) {
      console.error('Error reading document: ', e);
      setLoading(false);
    }
  }

  let mergedWithIDs = currentWords

  for(let i=0; i<currentWords.length; i++){
    mergedWithIDs[i].id = currentIDs[i]
  }
  
  useEffect(() => {
    getCards();
  }, [submittedCard]);
  return { mergedWithIDs, loading };
}
