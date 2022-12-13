import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClYEunucEghg5_lVVwvhi1Epdy0BQ4JEs",
  authDomain: "friendlychat-d23c7.firebaseapp.com",
  projectId: "friendlychat-d23c7",
  storageBucket: "friendlychat-d23c7.appspot.com",
  messagingSenderId: "836942352847",
  appId: "1:836942352847:web:9278cd80b4c46c93fd82ba"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export default firebase;