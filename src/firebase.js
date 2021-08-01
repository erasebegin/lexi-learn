import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

console.log(process.env.REACT_APP_FIREBASE_API_KEY);
console.log('AIzaSyAK-euVdEeXJ-DZRJby0pG7QktCOqMP6Ks');

const app = initializeApp({
  apiKey: 'AIzaSyAK-euVdEeXJ-DZRJby0pG7QktCOqMP6Ks',
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
});
export const db = getFirestore();
export const auth = getAuth();
export default app;
