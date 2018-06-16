import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { loginWithGoogle, logout  } from './config/auth';
import {rebase} from './constants';
import Button from '../Button';
import logo from '../gologo.png';
import { MapContainer } from '../MapContainer';


class Login extends Component {
  authenticate(){
       const updateIt = this.props.changeAuth;
       loginWithGoogle(updateIt);

 }

 render() {


     return (
         <div className="container">
             <div className="d-flex flex-column justify-content-center text-center">
               <a onClick={() => this.authenticate('google')} className="login-btn  mx-auto"><img src={logo} alt="google" style={{ width: "50px" }}/></a>

             </div>
         </div>

        )
    }
}

export default Login;




// class Login extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       authed: false,
//       loading: true,
//       uid: null,
//       zip: '',
//       displayNone: null,
//       display: "none",

//     }

//     this.authenticate = this.authenticate.bind(this);
//     this.logoutApp = this.logoutApp.bind(this);

//   }

//   componentDidMount() {
//     console.log("login mounted");
//     this.authListener = rebase.initializedApp.auth().onAuthStateChanged((user) => {

//       if (user) {
//         this.setState({
//           authed: true,
//           loading: false,
//           uid: user.uid,
//           displayNone: "none",
//           display: null
//         });

//         console.log("Props updated?", this.props.uid);
//         //get DB stuff for user here
//       } else {
//         this.setState({
//           authed: false,
//           loading: false,
//           uid: null,
//         })
//       }
//     })
//   }

//   componentWillUnmount() {
//     console.log("login will unmount");
//     this.authListener();
//   }

//   authenticate() {
//     loginWithGoogle()
//       .then(() => {
//         this.setState({
//           authed: true
//         });

//         console.log("Authenticated: ", this);
//       });
//   }

//   logoutApp() {
//     logout()
//       .then(() => {
//         this.setState({
//           authed: false,
//           loading: false,
//           uid: null,
//           displayNone: null,
//           display: "none"
//         });
//         console.log('logged out state: ', this);
//       });
//   }

//   render() {
//     const { displayNone } = this.state;
//     return (
//       <div className="log-btn">
//         <button className="btn-red mr-6 " link="" style={{ display: this.state.displayNone }} type="button" onClick={() => this.authenticate('google')}>LogIn</button>
//         <button className="btn-red mr-6 " link="" style={{ display: this.state.display }} type="button" onClick={() => this.logoutApp()} >LogOut</button>
//       </div>
//     )
//   }
// }

// export default Login;
