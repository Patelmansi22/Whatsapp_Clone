import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCcHuwK2bAUzB4VllK_7BQZ4xyYraRYPUE",
  authDomain: "whatsapp-9bc6e.firebaseapp.com",
  projectId: "whatsapp-9bc6e",
  storageBucket: "whatsapp-9bc6e.appspot.com",
  messagingSenderId: "1067183888241",
  appId: "1:1067183888241:web:de0e4c2087382e6befc8d0",
  measurementId: "G-4SVTQ72H06"
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };

export default db;
