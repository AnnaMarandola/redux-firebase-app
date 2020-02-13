import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAVDy_Z7jv3LizZFO008qN_pZ8WCdaHp-0",
  authDomain: "miafina-c8b61.firebaseapp.com",
  databaseURL: "https://miafina-c8b61.firebaseio.com",
  projectId: "miafina-c8b61",
  storageBucket: "miafina-c8b61.appspot.com",
  messagingSenderId: "62384665367",
  appId: "1:62384665367:web:7ffbe23680e87e48357d52"
};
  
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;