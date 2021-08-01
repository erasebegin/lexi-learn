import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function useGetCards(submittedCard) {
  const [currentWords, setCurrentWords] = useState([]);
  const [loading, setLoading] = useState([]);

  async function getCards() {
    setLoading(true);
    try {
      const cardData = await getDocs(collection(db, 'cards'));
      let wordList = [];
      cardData.forEach((doc) => {
        wordList.push(doc.data());
      });
      setCurrentWords(wordList);
      setLoading(false);
    } catch (e) {
      console.error('Error reading document: ', e);
      setLoading(false);
    }
  }

  useEffect(() => {
    getCards();
  }, [submittedCard]);
  return { currentWords, loading };
}
