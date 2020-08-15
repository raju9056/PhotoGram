import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDlyj_Z3BlbXWZrhW99iW45hHziCaIRSsI",
  authDomain: "rey-photogram-93896.firebaseapp.com",
  databaseURL: "https://rey-photogram-93896.firebaseio.com",
  projectId: "rey-photogram-93896",
  storageBucket: "rey-photogram-93896.appspot.com",
  messagingSenderId: "117321279162",
  appId: "1:117321279162:web:0cd880eb6dd19bafdc4483",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamp };
