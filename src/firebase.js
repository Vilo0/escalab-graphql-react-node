import * as firebase from 'firebase';

// firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCseEVSET6RjDfdaGzogOAqJuN0yV09hHo",
    authDomain: "graphql-escalab-2021.firebaseapp.com",
    projectId: "graphql-escalab-2021",
    storageBucket: "graphql-escalab-2021.appspot.com",
    // messagingSenderId: "847651493416",
    appId: "1:847651493416:web:d8a4641d20525d2acd871d"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();