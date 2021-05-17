import firebase from  'firebase/app'
import 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBSTNuO6lGUmxKoBzVtRkBMT3cW2d5b7S0",
  authDomain: "voice-demo-63198.firebaseapp.com",
  projectId: "voice-demo-63198",
  storageBucket: "voice-demo-63198.appspot.com",
  messagingSenderId: "449529948067",
  appId: "1:449529948067:web:8b333eccad947a0f8a5c16",
  measurementId: "G-FF8Q8RFK15"
};
// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export default auth;