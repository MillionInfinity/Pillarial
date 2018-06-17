import React, { Component } from 'react';
import MapContainer from '../src/components/MapContainer';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Home from './pages/Home';
import Profiles from './pages/Profiles';
import Payments from './components/Payments';
import TeachersProfile from './components/TeachersProfile';
import AddStudent from './components/AddStudent';
class App extends Component {
      render() {

           return(
             <div>

               <Route exact path={'/'} component={Home} />
               <Route exact path='/Profiles' component={Profiles} />
               <Route exact path='/Payments' component={Payments} />
               <Route exact path='/TeachersProfile' component={TeachersProfile} />
               <Route exact path='/AddStudent' component={AddStudent} />
               <Route exact path='/MapContainer' component={MapContainer} />
            
             </div>
           );
         }

    }


export default App;
