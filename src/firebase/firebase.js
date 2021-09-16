import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBVitr7NObGXU4HA_EMC0-KgKSMkl-0CAY",
    authDomain: "react-auth-a9fe1.firebaseapp.com",
    databaseURL: "https://react-auth-a9fe1-default-rtdb.firebaseio.com",
    projectId: "react-auth-a9fe1",
    storageBucket: "react-auth-a9fe1.appspot.com",
    messagingSenderId: "87178370403",
    appId: "1:87178370403:web:970afbc48c243f8080c756"
})

export const auth = app.auth();
export default app;