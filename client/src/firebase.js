import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey:"AIzaSyA_lhkL2XGtSWlaRU9WN4IVWAdc39TBugg",
//   process.env.REACT_APP_FIREBASE_KEY,
  authDomain:"shopping-cart-705aa.firebaseapp.com",
//   process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId:"shopping-cart-705aa",
//   process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: "https://shopping-cart-705aa-default-rtdb.firebaseio.com",

  storageBucket:"shopping-cart-705aa.appspot.com",
//   process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:"680389323882",
//   process.env.REACT_APP_FIREBASE_SENDER_ID,
});

export const auth=app.auth()
export default app;
