import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC5LreWxeqSetHyCeBB2z9nGGo5poYTgmc",
  authDomain: "uiu-canteey.firebaseapp.com",
  //   databaseURL: "https://uiu-canteey-default-rtdb.firebaseio.com",
  projectId: "uiu-canteey",
  storageBucket: "uiu-canteey.appspot.com",
  messagingSenderId: "389770343456",
  appId: "1:389770343456:web:83b46e618148e178357845",
  measurementId: "G-F60V28VNL5",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);
