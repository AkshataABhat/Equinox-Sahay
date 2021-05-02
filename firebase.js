import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF1ICkNuHdoR48O8X5Phz7TAYhJ64cGHw",
  authDomain: "pet-pal-2f3be.firebaseapp.com",
  projectId: "pet-pal-2f3be",
  storageBucket: "pet-pal-2f3be.appspot.com",
  messagingSenderId: "521843387006",
  appId: "1:521843387006:web:9499d60b27dc1e8976062f",
  measurementId: "G-J18S8MYHVB"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
