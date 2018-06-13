import React, {Component} from 'react';
import TeachersProfile from '../components/TeachersProfile';
import Nav from '../components/Nav';
class TeacherProfile extends Component {
  render(){
    return(
      <div>
      <Nav/>
      <TeachersProfile/>
      </div>

    );
  }
}
export default TeacherProfile;
