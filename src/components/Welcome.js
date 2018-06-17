import React, {Component} from 'react';
import {Signout} from './UserIntr/User';
import profileImg from '../img/icons/man.png';
import MapContainer from '../components/MapContainer';
import Login from '../components/UserIntr/Login';
import Home from '../pages/Home';

import AddStudents from '../components/AddStudent';
import Profiles from '../pages/Profiles';
import TeachersProfile from '../components/TeachersProfile';
import {BrowserRouter as Router,Route,Link,Switch,Redirect } from "react-router-dom";
import Payment from '../pages/Payment';
export default class Welcome extends Component{
    constructor(props) {
        super(props);
        this.state = {
            

        };
        this.logoutGoogle=this.logoutGoogle.bind(this);
        
    }

   

    logoutGoogle() {
        Signout();
        this.props.logoutApp;
    }

    render() {
        // const user = this.props.user.providerData[0];
        // const name = user.displayName;
        // const profileImg = user.photoURL;
        <li><Link to='/MapContainer/'>Homes</Link></li>
            {/* <li><Link to='/Payments/'>Payments</Link></li> */}
       
        return (
            <div>
                <div className="d-flex justify-content-between">
                   <div className="top-nav-user-img mr-4 d-flex align-items-center">
                        <h4 onClick={this.logoutGoogle()}>Sign Out</h4>
                    </div>
                </div>

                <div className="d-flex flex-column justify-content-center">
                    <img className="main-profile-pic mx-auto" alt="user profile" src={profileImg} style={{width:'100px'}} />
                    <h2 className="mt-3 text-center">Welcome Million !</h2>
                    {/* <li><Link to='/MapContainer/'>Student</Link></li>
                    <li><Link to='/Payments/'>Teacher</Link></li>
                     */}
                 </div>
              
                    {/* <Route exact path={'/'} component={Home} />
                    <Route exact path='/Profiles' component={Profiles} />
                    <Route exact path='/Payment' component={Payment} />
                    <Route exact path='/TeachersProfile' component={TeachersProfile} />
                    <Route exact path='/AddStudents' component={AddStudents} />
                    <Route exact path='/MapContainer' component={MapContainer} /> */}
                     {/* <Route exact path='/MapContainer/'  component={MapContainer} /> */}
           
              
                }
            </div>
        )
    }
}