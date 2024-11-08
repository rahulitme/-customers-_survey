// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCzPNCKePxc8RyY7gfDoi_Jrc6YzxbcDDs",
  authDomain: "survey-a42c4.firebaseapp.com",
  projectId: "survey-a42c4",
  storageBucket: "survey-a42c4.firebasestorage.app",
  messagingSenderId: "444119330232",
  appId: "1:444119330232:web:48a68c0140afcd599c334d",
  measurementId: "G-9JCVJP9PZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };