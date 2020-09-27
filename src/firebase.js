import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyArtpz4HTJrvq9lNlj_hJHpAW3BWtzsOOs",
    authDomain: "e-99d98.firebaseapp.com",
    databaseURL: "https://e-99d98.firebaseio.com",
    projectId: "e-99d98",
    storageBucket: "e-99d98.appspot.com",
    messagingSenderId: "895983377199",
    appId: "1:895983377199:web:f4af7700141e6974539fda",
    measurementId: "G-9T96931CS9"
})

//const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};