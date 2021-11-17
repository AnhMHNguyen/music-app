import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC8U58ob35uJj74ZdPu5DFWH4FSsozIzCs',
  authDomain: 'music-55377.firebaseapp.com',
  projectId: 'music-55377',
  storageBucket: 'music-55377.appspot.com',
  appId: '1:357165514899:web:05000791f2631c35a10d66',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
