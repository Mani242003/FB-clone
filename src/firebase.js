import {initializeApp} from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore,serverTimestamp} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDpIcDlbLCIwyvPJbRjElR3I2RgPy8qonY",
    authDomain: "facebook-clone-3c2df.firebaseapp.com",
    projectId: "facebook-clone-3c2df",
    storageBucket: "facebook-clone-3c2df.appspot.com",
    messagingSenderId: "1008399335441",
    appId: "1:1008399335441:web:69ab74a1714044c9b6b1b0"
  };




const app=initializeApp(firebaseConfig)
const db=getFirestore();
const  auth =getAuth();
const storage=getStorage();
const provider=new GoogleAuthProvider();
const timeStamp=serverTimestamp();

export {app,db,auth,storage,provider,timeStamp}