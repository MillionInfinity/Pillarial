import React, {Component} from 'react';
class MyTeacherProfile extends Component{
    render(){
        return(
            <div>
             <p> {this.props.firstName} </p>
            </div>
        );
    }
}
export default MyTeacherProfile;