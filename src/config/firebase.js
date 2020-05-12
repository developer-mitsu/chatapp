import * as firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    // 各人の認証情報を記述
    apiKey: "AIzaSyDm17QW9A0NUmH-iU7o3Cygq1md0E5Me4c",
    authDomain: "chat-app-5c079.firebaseapp.com",
    databaseURL: "https://chat-app-5c079.firebaseio.com",
    projectId: "chat-app-5c079",
    storageBucket: "chat-app-5c079.appspot.com",
    messagingSenderId: "402205614197",
    appId: "1:402205614197:web:0e4b72ed80986c0512983c"

}

firebase.initializeApp(firebaseConfig)

export default firebase