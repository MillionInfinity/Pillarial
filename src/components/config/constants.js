import Rebase from 're-base';
import firebase from 'firebase';


const config = {
  apiKey: "AIzaSyCHcM0uDfOEiWjz6QnKvwwFRWplrg56sVk",
 authDomain: "pillarial-a4c0f.firebaseapp.com",
 databaseURL: "https://pillarial-a4c0f.firebaseio.com",
 projectId: "pillarial-a4c0f",
 storageBucket: "pillarial-a4c0f.appspot.com",
 messagingSenderId: "342408903028"

}

const app = firebase.initializeApp(config)


export const rebase = Rebase.createClass(app.database());

// //add the authProvides your app needs: google, facebook, twitter, github,
export const googleProvider = new firebase.auth.GoogleAuthProvider();
