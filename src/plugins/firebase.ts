import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const clientCredentials = {
  apiKey: "AIzaSyD0APVPlTvxTkotaz08oiKYz8quT2IBwVI",
  authDomain: "escaper-20e33.firebaseapp.com",
  databaseURL: "https://escaper-20e33.firebaseio.com",
  projectId: "escaper-20e33",
  storageBucket: "escaper-20e33.appspot.com",
  messagingSenderId: "904806966059",
  appId: "1:904806966059:web:752619caf2033926df9b6e",
  measurementId: "G-VTLTVWT8V2",
};

if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
}

export default firebase;
export const db = firebase.firestore();
