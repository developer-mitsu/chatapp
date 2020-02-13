import firebase from 'firebase/app'
// import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAlHRugTHWtMp9BTXPFP2BrfNJIrc9m2xo",
    authDomain: "chatclass-8962e.firebaseapp.com",
    databaseURL: "https://chatclass-8962e.firebaseio.com",
    projectId: "chatclass-8962e",
    storageBucket: "chatclass-8962e.appspot.com",
    messagingSenderId: "140270243286",
    appId: "1:140270243286:web:d27a4267cafa498c896877"
}

firebase.initializeApp(firebaseConfig)

export default firebase