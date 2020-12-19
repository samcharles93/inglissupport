import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: "inglis-support-711a9.firebaseapp.com",
  projectId: "inglis-support-711a9",
  storageBucket: "inglis-support-711a9.appspot.com",
  messagingSenderId: "2313319847",
  appId: "1:2313319847:web:d0083426aa5d80c5c9b282",
  measurementId: "G-00WBK4MF70"
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { db, auth, storage, timestamp }