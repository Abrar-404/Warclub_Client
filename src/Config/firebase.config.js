// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDvR_WnnoBMjmaXBHtafn09NjIOmSOMAgA',
  authDomain: 'warclub-27642.firebaseapp.com',
  projectId: 'warclub-27642',
  storageBucket: 'warclub-27642.appspot.com',
  messagingSenderId: '1064829918960',
  appId: '1:1064829918960:web:2bfae3706c1d04c76a2c35',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
