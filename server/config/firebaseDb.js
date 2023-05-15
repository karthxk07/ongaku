// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getDatabase } = require("firebase/database");
const { getAnalytics } = require("firebase/analytics");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuBq9zN9htnZnND83mY1ULg8YlpyGveWY",
  authDomain: "ongaku-ae959.firebaseapp.com",
  projectId: "ongaku-ae959",
  storageBucket: "ongaku-ae959.appspot.com",
  messagingSenderId: "569538910021",
  appId: "1:569538910021:web:a5701e7c9bf6b0660dd02c",
  measurementId: "G-84Z86EQ07D",
  databaseURL:
    "https://ongaku-ae959-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseDb = getDatabase(firebaseApp);
//const analytics = getAnalytics(firebaseApp);
const string = "Hello";

module.exports = { firebaseDb };
