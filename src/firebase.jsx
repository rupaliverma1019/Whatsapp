
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import { getAuth } from 'firebase/compat/auth';
// import { GoogleAuthProvider } from "firebase/auth"
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyAD3rFT1oee-85p1Z-uwF0VBConLyjk5r4",
    authDomain: "watsapp-clone-4da76.firebaseapp.com",
    projectId: "watsapp-clone-4da76",
    storageBucket: "watsapp-clone-4da76.appspot.com",
    messagingSenderId: "415391033180",
    appId: "1:415391033180:web:02b181da86c3aee3b88399"
  };
  // this special line of code connect everything
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  //this is for database connection
  const db = firebaseApp.firestore();

  // this is for authentication 
  
   const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider()
 
  
  
  export {auth , provider}
  //export {result};
  export default db;






