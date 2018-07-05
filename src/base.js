import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBOQkMuyhSUcD9WDP3wXaNwqrbL6AZW2AY",
    authDomain: "reactjs-oauth.firebaseapp.com",
    databaseURL: "https://reactjs-oauth.firebaseio.com",
    projectId: "reactjs-oauth",
    storageBucket: "reactjs-oauth.appspot.com",
    messagingSenderId: "963746680378"
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };
export default base;



