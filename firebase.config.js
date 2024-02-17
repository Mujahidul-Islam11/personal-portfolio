// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNQNI6Qj6-m5N8ejEdicScn8-XOXRP0pQ",
  authDomain: "dd-second-portfolio.firebaseapp.com",
  projectId: "dd-second-portfolio",
  storageBucket: "dd-second-portfolio.appspot.com",
  messagingSenderId: "485407474256",
  appId: "1:485407474256:web:96b2689bc7b5414aba8755"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
