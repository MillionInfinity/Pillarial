import React, {Component} from 'react';
import './ListItem.css';
import {GetFromFB} from './UserIntr/auth';
import TeacherProfile1 from './TeacherProfile1';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import home from '../img/icons/home.png';
import { ItemMeta } from 'semantic-ui-react';
class Welcome extends Component{
    constructor(props) {
        super(props);
        this.state = {
       userData:[]
    }
}
    componentDidMount = () => {
        GetFromFB('users').then(data => {
            let welcomeUser = Object.values(data);
            console.log("welcome line 16", welcomeUser);
            this.setState({
                userData: welcomeUser
            })

        });
    }
    render(){
        console.log('welcome line 24', this.state.userData);
        const teacheruser = this.state.userData.map((item, index) =>
            <div key={item.key} className="ListDiv">
                {/* {item.email} */}
                {/* {itememail} */}
               
               <div className="container">
                   <div className="d-flex flex-column justify-content-center text-center">
                       <div className="mx-auto mt-4 pt-5 mb-0 pb-0">
                            <img className="userPicture"src={item.portrait} alt="User" style={{ width:'50px'}}/>
                       </div>
                       <h4 className="text-center">Hi  {item.user}</h4>
                       <h3 className="text-center">Welcome to PILLARIAL</h3>
                       <p>Are you </p>
                       <div className="row">

                           <div className="col-6 text-right">
                               <Link to={'/Profile'}>
                                   <button className={"btn-green mr-4 "} link="" name="Submit" type="button" >Parent</button>
                               </Link>
                           </div>
                           <div className="col-4 text-center">
                               <Link to={'/TeacherProfile1'}>
                                   <button className={"btn-red mr-4"} link="" name="Submit" type="button" >Teacher</button>
                               </Link>
                           </div>
                       </div>
                    </div>
                    </div>
                   </div>)
    
        return(
            <div className="container">
                <img src={home} alt="a home " className='homeWelcome'/>
                <div className="ListDiv">{teacheruser}</div>
            <p className="h_text-center"></p>
            
            </div>
        );
    }
}
export default Welcome;