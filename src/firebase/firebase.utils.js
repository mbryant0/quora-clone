import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCv5xvKmiZ1GqVkV7MLMq4iK0WP0k1-YZk',
  authDomain: 'querria-6b07c.firebaseapp.com',
  projectId: 'querria-6b07c',
  storageBucket: 'querria-6b07c.appspot.com',
  messagingSenderId: '1011273017440',
  appId: '1:1011273017440:web:01be64df02584fc4d6bb05',
  measurementId: 'G-EM6VXCCVW5',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' });

export const SignInWithGoogle = (e) => {
  auth.signInWithPopup(googleProvider);
};
export const SignInWithGitHub = () => {
  auth.signInWithPopup(githubProvider);
};

export default firebase;
