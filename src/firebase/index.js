import firebase from 'firebase/app'
import 'firebase/storage'
var firebaseConfig = {
apiKey: "AIzaSyB116yyCK9Bx4-cJOHo-vw4yXvjRGEFUxU",
authDomain: "jojo-react-app.firebaseapp.com",
databaseURL: "https://jojo-react-app.firebaseio.com",
projectId: "jojo-react-app",
storageBucket: "jojo-react-app.appspot.com",
messagingSenderId: "640342459185",
appId: "1:640342459185:web:56c1ef1cdcb38856382610"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const storage = firebase.storage()
// firebase.analytics();

export {
    storage, firebase, firebaseApp as default
}