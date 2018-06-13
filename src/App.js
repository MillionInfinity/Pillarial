import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import {Route} from 'react-router-dom';
import Profiles from './pages/Profiles';
import Payment from './pages/Payment';
import Nav from './components/Nav';
import TeacherProfile from './pages/TeacherProfile';
import AddStudents from './pages/AddStudent';
import MapContainer from './components/MapContainer';

class App extends Component {
  state={

  }
  render() {
    return (
      <div >


        <Route exact path={'/'} component={Home}/>
        <Route exact path='/Profiles' component={Profiles}/>
        <Route exact path='/Payment' component={Payment} />
        <Route exact path='/TeacherProfile' component={TeacherProfile}/>
        <Route exact path='/AddStudents' component={AddStudents}/>
        <Route exact path = '/MapContainer' component={MapContainer}/>
      </div>
    );
  }
}

export default App;
