import firebase from 'firebase';
import 'firebase/storage';

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
if (!firebase.apps.length) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}
// app = firebase.initializeApp(firebaseConfig);

export { app };
