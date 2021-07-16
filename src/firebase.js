import firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: "AIzaSyAks4j872WaPRqM2YlmsCgdwdhzBfkDiW4",
//   authDomain: "disney-clone-97e30.firebaseapp.com",
//   projectId: "disney-clone-97e30",
//   storageBucket: "disney-clone-97e30.appspot.com",
//   messagingSenderId: "567609214507",
//   appId: "1:567609214507:web:83c149b0a1ace6fbcbcc6e",
//   measurementId: "G-EWJSNNXHG3",
// }; 
const firebaseConfig = {
  apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  projectId: "disneyplus-clone-a33d5",
  storageBucket: "disneyplus-clone-a33d5.appspot.com",
  messagingSenderId: "37918794208",
  appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  measurementId: "G-DRVLJKWRWG",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };

export default db;