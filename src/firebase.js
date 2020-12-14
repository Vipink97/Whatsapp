import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDVuM6-m00QkqwifwnA6aJprTbIK6VKmHY",
    authDomain: "whatsapp-clone-72fd2.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-72fd2.firebaseio.com",
    projectId: "whatsapp-clone-72fd2",
    storageBucket: "whatsapp-clone-72fd2.appspot.com",
    messagingSenderId: "6064328606",
    appId: "1:6064328606:web:19afca85d5f50a27d5d08f",
    measurementId: "G-LGMYXXHFDY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;