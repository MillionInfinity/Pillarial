import React, { Component } from 'react';
import '../App.css';
import Login from './Login';
import {rebase, googleProvider} from './config/constants';
import {saveUser} from './helpers/auth';
import {loginWithGoogle, logout } from './config/auth';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
        authed: false,
        loading: true,
        uid: null,
        zip: '',
      }

}

componentDidMount() {
  rebase.initializedApp.auth().onAuthStateChanged((user) => {
    console.log("componentDidMount() fired");
      if (user) {
       this.setState({
          authed: true,
          loading: false,
          uid: user.uid,
          photo: user.photoURL,
          name: user.displayName,
          user: user
        });
      } else {
          this.setState({authed: false, loading: false, uid: null})
      }
  })
}

loginWithGoogle = () => {
return rebase.initializedApp.auth().signInWithPopup(googleProvider)
.then((data) => {
  // Check FB for the authenticated user
  rebase.fetch(`wakeupappusers/${data.user.uid}/deets`, {
    context: this,
    then(userData){
      // if the user does not exist add them to FB
      if(Object.keys(userData).length === 0){
        saveUser(data.user);
      // otherwise, set state with the stuff from FB
      }else{
        this.setState({
          zip: userData.zip,
        })
      }
    }
  });
});
}

  render() {
    return (


    <div id="masterContainer">
      <div id="header"  className="container justify-content-center">
        <div  className = "row">
          <div id="login" className="col-2 mt-4">
              <Login />
          </div>
         </div>
         </div>
      </div>
    );
  }
}


export default User;
