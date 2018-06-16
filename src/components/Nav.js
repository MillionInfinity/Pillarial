import React, {Component} from 'react';
import userCircle from '../img/icons/man.png';
import './css/Nav.css';
class Nav extends Component{
    render(){
// const user = this.props.user.ProviderData[0];
        // const name = user.displayName;
        // const profileImg = user.photoURL ? user.photoURL : userCircle;
        return(
           
                <div className="d-flex justify-content-between ml-4">
                
                    <div className="top-nav-user-img mr-4">
                        {/* <img className="img-thumbnail" src={profileImg} alt="user" onClick={this.props.viewProfile} /> */}
                    </div>
                </div>
           
        );
    }
}
export default Nav;