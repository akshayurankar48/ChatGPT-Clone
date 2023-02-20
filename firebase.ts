import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgswdSFjbh2JI6Zg8DtZ3iJiyYazUpsbk",
  authDomain: "chat-gpt-3f6be.firebaseapp.com",
  projectId: "chat-gpt-3f6be",
  storageBucket: "chat-gpt-3f6be.appspot.com",
  messagingSenderId: "660706185940",
  appId: "1:660706185940:web:453f28a0bbb048cd1c6141"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };