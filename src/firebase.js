import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAlS902Ik4pCbuiyLrMWQCNAuPpqvu_bsc",
  authDomain: "disneyplus-clone-3389f.firebaseapp.com",
  projectId: "disneyplus-clone-3389f",
  storageBucket: "disneyplus-clone-3389f.appspot.com",
  messagingSenderId: "29844212960",
  appId: "1:29844212960:web:60202dd699900b0b965485",
  measurementId: "G-FVCJQ729VQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };

export default db;