/* Import the functions you need from the SDKs you need */
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

/* TODO: Add SDKs for Firebase products that you want to use */
/* https://firebase.google.com/docs/web/setup#available-libraries */

/* Your web app's Firebase configuration */
/* For Firebase JS SDK v7.20.0 and later, measurementId is optional */
const firebaseConfig = {
  apiKey: "AIzaSyCR58apwJQi9DQzh5j7ke7V7HpjhnbEze8",
  authDomain: "netflixgpt-93052.firebaseapp.com",
  projectId: "netflixgpt-93052",
  storageBucket: "netflixgpt-93052.firebasestorage.app",
  messagingSenderId: "384481007706",
  appId: "1:384481007706:web:25f8c98299606b00ec2063",
  measurementId: "G-55HFXRW2TG"
};

/* Initialize Firebase */
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();