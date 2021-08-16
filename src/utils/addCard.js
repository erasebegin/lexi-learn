import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

export default async function addCard(enteredWord, translations) {
  try {
    let wordList = [];
    translations.forEach((trans) => wordList.push(trans.l2_text));
    const docRef = await addDoc(collection(db, 'cards'), {
      word: enteredWord,
      translations: wordList
    });
    console.log('Document written with ID: ', docRef.id);
    return docRef.id;
  } catch (e) {
    console.error('Error adding document: ', e);
    return e.response;
  }
}
