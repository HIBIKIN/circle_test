import 'firebase/firestore';
import 'firebase/firebase-storage';

var firebaseConfig = {
  apiKey: "AIzaSyDTwRxHZW9OKFtxvri8FInX9RqTjzbsfSQ",
  authDomain: "circle-test-21c10.firebaseapp.com",
  databaseURL: "https://circle-test-21c10.firebaseio.com",
  projectId: "circle-test-21c10",
  storageBucket: "circle-test-21c10.appspot.com",
  messagingSenderId: "920933433661",
  appId: "1:920933433661:web:f9ab7ff30d73f086714554",
  measurementId: "G-G3YST7PGH3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;