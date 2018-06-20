import React, {Component} from 'react';
import {GetFromFB} from './UserIntr/auth';
import TeacherList from './TeacherList';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import man from '../img/icons/man.png';
class Welcome extends Component{
    state={
       
    }
    
    render(){
       
        return(
            <div className="container">
            <div className= "d-flex flex-column justify-content-center text-center">
           <div className="mx-auto mt-4 pt-5 mb-0 pb-0">
            <img src={man} alt="User" style={{width:'50px'}}/>
            </div>
            <h4 className="text-center">Hi Million</h4>
               <h3 className="text-center">Welcome to PILLARIAL{this.props.user}</h3>
             <p>Are you </p>
             <div className="row">

                 <div className="col-6 text-right">
                     <Link to={'/Profile'}>
                      <button className={"btn-green mr-4 "} link="" name="Submit" type="button" >Parent</button>
                    </Link>
                 </div>
                 <div className="col-4 text-center">
                 <Link to={'/TeacherProfile'}>
                      <button className={"btn-red mr-4"} link="" name="Submit" type="button" >Teacher</button>
                     </Link>
                 </div>
                 </div>
             
             </div>
            </div>
        )
    }
}
export default Welcome;