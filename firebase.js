import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCO_waq4AwdHZMXvp0M-dFiO_G0MU-0904",
  authDomain: "signal-cline.firebaseapp.com",
  projectId: "signal-cline",
  storageBucket: "signal-cline.appspot.com",
  messagingSenderId: "617288765080",
  appId: "1:617288765080:web:742c5f49a18512b4470aed",
};

let app;

if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
