import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCut1EJYTqNvzJteC8EBUQ9L9dMqkDxB4M",
  authDomain: "learn-firebase-4ab5b.firebaseapp.com",
  projectId: "learn-firebase-4ab5b",
  storageBucket: "learn-firebase-4ab5b.appspot.com",
  messagingSenderId: "691724396816",
  appId: "1:691724396816:web:93ca527ed4087b7dd29d95",
  measurementId: "G-6J1N0BF5F3"
};

firebase.initializeApp(firebaseConfig);

console.log('firebaseInit', firebase);


/**
 * Function Click Analytics Event
 */
export function onClickAnalyticsEvent(event) {
    console.log('firebase event>>>   ', event);
    return firebase.analytics().logEvent(event);
}


/**
 * Function signInWithEmailAndPassword
 */
export function signInWithEmailAndPassword(email, password) {
  console.log('firebase signIn>>>   ', email, password);
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    // Signed in 
    console.log('Signed in user>>>', user);
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log('Sign in error', errorCode, errorMessage);
  });
}


/**
 * Function onAuthStateChanged
 */
export function onAuthStateChanged() {
  console.log('onAuthStateChanged>>>   ');
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;

      console.log('auth User', uid, user)
      // ...
    } else {
      // User is signed out
      console.log('user SignOut');
      // ...
    }
  });
}

/**
 * Function signOut
 */
export function signOut() {
  console.log('onAuthStateChanged>>>   ');
  firebase.auth().signOut().then(function() {
    console.log('Sign-out successful.')
  }).catch(function(error) {
    console.log('Sign-out error', error)
  });
}



