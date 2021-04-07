import firebase from 'firebase/app'

const firebaseConfig = {
    // apiKey: "AIzaSyD9xJuDusoSPpgSMTw1Z39tRqeXCZ3QfEg",
    // authDomain: "clocker-brn.firebaseapp.com",
    // projectId: "clocker-brn",
    // storageBucket: "clocker-brn.appspot.com",
    // messagingSenderId: "554759099966",
    // appId: "1:554759099966:web:cc323dc0c7c9981a58236f",
    // measurementId: "G-5YM08F7YYC"
};

export default firebase.apps.length
    ? firebase.app()
    : firebase.initializeApp(firebaseConfig);