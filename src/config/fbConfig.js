import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyDLtqe9bV43GwbLdMEJjRoL6Zv2PdICu0o",
  authDomain: "net-ninja-marioplan-abe58.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-abe58.firebaseio.com",
  projectId: "net-ninja-marioplan-abe58",
  storageBucket: "net-ninja-marioplan-abe58.appspot.com",
  messagingSenderId: "890296420709",
  appId: "1:890296420709:web:04c39d476ef27ec5f6f98c",
  measurementId: "G-DZNR0VBNPS"
};
firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 