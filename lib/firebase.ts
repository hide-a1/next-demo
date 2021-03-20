import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCGFVZ8CHP8Tj--6yoT1-ugNz9r8DzXUzM',
  authDomain: 'next-demo-962e6.firebaseapp.com',
  projectId: 'next-demo-962e6',
  storageBucket: 'next-demo-962e6.appspot.com',
  messagingSenderId: '149936717564',
  appId: '1:149936717564:web:ada6ebe029ea14b441e179',
  measurementId: 'G-7KDY07RE5K',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
