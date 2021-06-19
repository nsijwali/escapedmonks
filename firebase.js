// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyClLCR0ncpI23xeWqf0QRLhL6fYWRpdc68',
	authDomain: 'escapedmonk.firebaseapp.com',
	projectId: 'escapedmonk',
	storageBucket: 'escapedmonk.appspot.com',
	messagingSenderId: '270859679247',
	appId: '1:270859679247:web:56fb47dd53bc03e228557a',
	measurementId: 'G-936VTZD886',
};

let app;
// if (firebase.app.length === 0) {
// 	app = firebase.initializeApp(firebaseConfig);
// } else {
// 	app = firebase.app();
// }
app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
