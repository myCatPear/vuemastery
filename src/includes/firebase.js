import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBXVL0iG0qhMVt30qgk7saDlXVaQ2qx6sc',
  authDomain: 'music-19047.firebaseapp.com',
  projectId: 'music-19047',
  storageBucket: 'music-19047.appspot.com',
  messagingSenderId: '327371727470',
  appId: '1:327371727470:web:60599112794d030fc4bc7f'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

db.enablePersistence().catch((error) => {
  console.log(`firebase persistence error ${error.code}`)
})

const userCollection = db.collection('users')
const songsCollection = db.collection('songs')
const commentsCollection = db.collection('comments')

export { auth, db, userCollection, storage, songsCollection, commentsCollection }
