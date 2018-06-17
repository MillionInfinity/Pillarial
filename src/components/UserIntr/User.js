import React, { Component } from 'react';
// import './src/App.css';
import Login from './Login';
import {rebase, googleProvider} from './constants';
import {saveUser} from './auth';
import {loginWithGoogle, logout } from './config/auth';

export function Signout() {
  return rebase.initializedApp.auth().signOut()
}

export function SigninWithGoogle(update) {
  return rebase.initializedApp.auth().signInWithPopup(googleProvider)
    .then((data) => {
      // console.log('user data', data);
      saveUser(data.user);
      // console.log('has updated?', update());
      update(data.user);
    });
}

export function CheckUser() {
  rebase.initializedApp.auth().onAuthStateChanged(function (user) {
    if (user) {
      this.setState({
        authed: true,
      });
    }
  })
}

export function SaveUser(user) {
  // console.log("save user", user);
  return rebase.initializedApp.database().ref().child(`users/${user.uid}`)
    .update({
      email: user.email,
      name: user.displayName,
      portrait: user.photoURL,
      uid: user.uid,
    })
    .then(() => {
      return user;
    })
}