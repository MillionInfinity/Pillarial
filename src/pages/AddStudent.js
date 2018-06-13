import React, {Component} from 'react';
import AddStudent from '../components/AddStudent';
import Nav from '../components/Nav';
class AddStudents extends Component {
  render(){
    return(
      <div>
      <Nav/>
      <AddStudent/>
      </div>

    );
  }
}
export default AddStudents;
