// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3Qz_6AwKYoF170fTFNjXnX4Tcz95cEA8",
  authDomain: "twitter-clone-react-cdcef.firebaseapp.com",
  projectId: "twitter-clone-react-cdcef",
  storageBucket: "twitter-clone-react-cdcef.appspot.com",
  messagingSenderId: "56058221489",
  appId: "1:56058221489:web:9ab43017f98272df836390"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export default db