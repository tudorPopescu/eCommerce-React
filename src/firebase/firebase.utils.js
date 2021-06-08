import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAtgeCdaM1O-jEMdBjLXt5LUR_POLRLMS8",
  authDomain: "react-ecommerce-bef8a.firebaseapp.com",
  projectId: "react-ecommerce-bef8a",
  storageBucket: "react-ecommerce-bef8a.appspot.com",
  messagingSenderId: "186014662724",
  appId: "1:186014662724:web:e714f334300f7b61df3c11"
};
const provider = new firebase.auth.GoogleAuthProvider();

firebase.initializeApp(config);
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
