import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD5Z5Pa8J_8KMluoDakqJmP6N_QTOfGBRw",
  authDomain: "ecomm-mart-db.firebaseapp.com",
  databaseURL: "https://ecomm-mart-db.firebaseio.com",
  projectId: "ecomm-mart-db",
  storageBucket: "ecomm-mart-db.appspot.com",
  messagingSenderId: "684773616441",
  appId: "1:684773616441:web:ddf1d68cc7fd85876616e8",
  measurementId: "G-0YL6BB86BV",
};
firebase.initializeApp(config);

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
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
