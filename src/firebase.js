import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDUSwnWHkvlGW9tfppp_tcfq8ncDHvJx60",
    authDomain: "todoist-tut-6152b.firebaseapp.com",
    databaseURL: "https://todoist-tut-6152b.firebaseio.com",
    projectId: "todoist-tut-6152b",
    storageBucket: "todoist-tut-6152b.appspot.com",
    messagingSenderId: "328109841266",
    appId: "1:328109841266:web:5e2b117ee262b5b2c3dbeb"
});

export {firebaseConfig as firebase}; 
