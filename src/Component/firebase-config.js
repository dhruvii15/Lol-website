// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnHebDRT-KaDaN3HfFT8hHa_VfL4o4HTY",
  authDomain: "lol-project-3db36.firebaseapp.com",
  projectId: "lol-project-3db36",
  storageBucket: "lol-project-3db36.appspot.com",
  messagingSenderId: "341476956444",
  appId: "1:341476956444:web:dc3287a1b335ff1f5f82d9",
  measurementId: "G-CY8CMVZV49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };