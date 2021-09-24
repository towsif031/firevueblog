import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCxJnOLFgK7MnSYRk8tIPlbKSvMAgxq-rg',
	authDomain: 'firevueblog-8053b.firebaseapp.com',
	projectId: 'firevueblog-8053b',
	storageBucket: 'firevueblog-8053b.appspot.com',
	messagingSenderId: '568774394139',
	appId: '1:568774394139:web:0f052fb316b6cac02593be'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
