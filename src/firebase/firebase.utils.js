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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt: createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();

firebase.initializeApp(config);
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
