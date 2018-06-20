import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import MapContainer from './MapContainer';
import Home from './Home';
import Profile from './Profile';
import Payments from './Payments';
import TeachersProfile from './TeachersProfile';
import AddStudent from './AddStudent';
import TeacherList from './TeacherList';
import Nav from './Nav';
import MyTeacherProfile from './MyTeacherProfile';
import TeacherInteraction from './TeacherInteraction';
import TeacherData from './TeacherData';
import RequestModal from './RequestModal';
// import RequestModalData from './RequestModalData';
// import RequestModalInteraction from './RequestModalInteraction';
import PaymentRequest from './PaymentRequest';
import Welcome from './Welcome';
import H1 from './H1';
import WelcomeInteraction from './WelcomeInteraction';
import * as routes from './router/routes';
import WelcomeData from './WelcomeData';
class Main extends Component{
  render (){
    return(
      <div>
        {/* <MyTeacherProfile/> */}
      <Switch>
      <Route exact path={routes.HOME} component={Home} />
      <Route exact path={routes.PROFILE} component={Profile} />
      <Route exact path={routes.PAYMENT} component={Payments} />
      <Route exact path={routes.TEACHERPROFILE} component={TeachersProfile}/>
      <Route exact path={routes.TEACHERINTERACTION} component={TeacherInteraction}/>
      <Route exact path={routes.ADDSTUDENT} component={AddStudent} />
      <Route exact path={routes.MAP} component={MapContainer} />
      <Route exact path={routes.TEACHERLIST} component={TeacherList}/>
      <Route exact path={routes.TEACHERDATA} component={TeacherData}/>
      <Route exact path={routes.NAV} component={Nav}/>
      <Route exact path={routes.MYTEACHERPROFILE} component={MyTeacherProfile}/>
      <Route exact path={routes.H1} component={H1}/>
      {/* <Route exact path={routes.PAYMENTREQUEST} component={PaymentRequest}/> */}
      <Route exact path={routes.REQUESTMODAL} component={RequestModal}/>
      {/* <Route exact path={routes.REQUESTMODALDATA} component={RequestModalData}/> */}
        {/* <Route exact path={routes.REQUESTMODALINTERACTION}component={RequestModalInteraction}/> */}
      <Route exact path={routes.WELCOME} component={Welcome}/>
      <Route exact path={routes.WECOMEINTERACTION} component={WelcomeInteraction}/>
       <Route exact path={routes.WELCOMEDATA} component={WelcomeData}/>
      </Switch>
      </div>

    );
  }
}

export default Main;
