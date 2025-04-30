import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC077KsWA-20LnsgcYLGstxvD18V_BL9NA",
  authDomain: "medtrack-2c654.firebaseapp.com",
  projectId: "medtrack-2c654",
  storageBucket: "medtrack-2c654.firebasestorage.app",
  messagingSenderId: "546567964285",
  appId: "1:546567964285:web:dd701f04883af7dbc15314",
  measurementId: "G-QD2VWJW5T0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, githubProvider };
