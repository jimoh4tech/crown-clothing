import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyC1CZbBV4P478m-UcmTdt7ujY3fDSkTxKw",
    authDomain: "crown-db-71392.firebaseapp.com",
    projectId: "crown-db-71392",
    storageBucket: "crown-db-71392.appspot.com",
    messagingSenderId: "849300336945",
    appId: "1:849300336945:web:f0a8892404eef967730010",
    measurementId: "G-GG8HJE4M0F"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.error(error)
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;