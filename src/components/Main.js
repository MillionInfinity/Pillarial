import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import MapContainer from './MapContainer';
import Home from './Home';
import Profile from './Profile';
import Payments from './Payments';
import TeacherProfile1 from './TeacherProfile1';
import AddStudent from './AddStudent';
import TeacherList from './TeacherList';
import Nav from './Nav';
import MyTeacherProfile from './MyTeacherProfile';
import TeacherInteraction from './TeacherInteraction';
import TeacherData from './TeacherData';
import RequestModal from './RequestModal';
import NavTea from './NavTea';
import Welcome from './Welcome';
import H1 from './H1';
import AllButtons from './AllButtons';
import * as routes from './router/routes';
 
class Main extends Component{
  render (){
    return(
      <div>
     
      <Switch>
      <Route exact path={routes.HOME} component={Home} />
      <Route exact path={routes.PROFILE} component={Profile} />
      <Route exact path={routes.PAYMENT} component={Payments} />
      <Route exact path={routes.TEACHERPROFILE1} component={TeacherProfile1}/>
      <Route exact path={routes.TEACHERINTERACTION} component={TeacherInteraction}/>
      <Route exact path={routes.ADDSTUDENT} component={AddStudent} />
      <Route exact path={routes.MAPCONTAINER} component={MapContainer} />
      <Route exact path={routes.TEACHERLIST} component={TeacherList}/>
      <Route exact path={routes.TEACHERDATA} component={TeacherData}/>
      <Route exact path={routes.NAV} component={Nav}/>
      <Route exact path={routes.MYTEACHERPROFILE} component={MyTeacherProfile}/>
      <Route exact path={routes.H1} component={H1}/>
      <Route exact path={routes.NAVTEA} component={NavTea}/>
      <Route exact path={routes.REQUESTMODAL} component={RequestModal}/>
      <Route exact path={routes.WELCOME} component={Welcome}/>
       <Route exact path={routes.ALLBUTTONS} components={AllButtons}/>
      </Switch>
      </div>

    );
  }
}

export default Main;
