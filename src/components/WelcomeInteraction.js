import React, { Component } from 'react';
import { GetFromFB } from './UserIntr/auth';
import WelcomeData from './WelcomeData';
import Welcome from './Welcome';
class WelcomeInteraction extends Component {
    state = {
        picture: []
    }
    componentDidMount = () => {
        GetFromFB('users').then(data => {
            //   console.log("user from firebase",data);
            let userPic = Object.values(data);
            console.log("Welcome line 11", userPic);
            this.setState({
                picture: userPic
            })

        });

    }
    render() {

      <div className="welcomeDiv">
          (<WelcomeData data={this.state.picture}/>)
          </div> 

     
        return (
            <div>
            {/* <p>hi {this.state.picture.email}</p> */}
           </div>
        )
    }
}
export default WelcomeInteraction;