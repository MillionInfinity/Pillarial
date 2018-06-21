import { googleProvider, rebase }  from '../constants';

export function logout () {
  return rebase.initializedApp.auth().signOut()
}


export function loginWithGoogle (update) {
  return rebase.initializedApp.auth().signInWithPopup(googleProvider)
  .then((data) => {
    console.log('user data', data);
    saveUser(data.user);
    update(data.user)
  });
}

export function saveZip(uid, zip) {
  console.log("save zip", zip);
  return rebase.initializedApp.database().ref().child(`users/${uid}`)
    .update({
      zip: zip
    })
    .then(() => {
      return uid;
    });
}
export function checkUser () {
  rebase.initializedApp.auth().onAuthStateChanged(function (user) {
      if (user) {
        this.setState({
          authed: true,
        });
      }
  })
  }
export function saveUser (user) {
  console.log("save user", user);
  return rebase.initializedApp.database().ref().child(`users/${user.uid}`)
    .set({
      email: user.email,
      user:user.displayName,
      uid: user.uid,
      portrait: user.photoURL,
      zip: ''
    })
    .then((data) => {
      console.log("configauth line48", data);
      return data;
      
    })
}


export function DeleteFromFB(endpoint, itemID) { //example "users" endpoint and itemID of specific user "userid"
  return rebase.remove(endpoint + "/" + itemID, function (err) {
    if (err) {
      // console.log("this is a scary error", err);
    } else if (!err) {
      // console.log("deleted item successfully");
    }
  })
}

export function GetFromFB(endpoint) {
  console.log('Getting Stuff from FB:', endpoint);
  return rebase.fetch(endpoint, {
    context: this,
    asArray: true,
    then(data) {
      let myObj = JSON.stringify(data);
      return myObj;
    }

  })
}
