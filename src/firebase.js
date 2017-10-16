import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDDeElwA-w0-bdurib27IPxCmbzpB15dSY",
  authDomain: "goalcoach-30bf4.firebaseapp.com",
  databaseURL: "https://goalcoach-30bf4.firebaseio.com",
  projectId: "goalcoach-30bf4",
  storageBucket: "goalcoach-30bf4.appspot.com",
  messagingSenderId: "203500507082"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
