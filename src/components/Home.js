import React, { Component } from 'react';
import Login from '../components/UserIntr/Login';
import Payments from '../components/Payments';
import MapContainer from '../components/MapContainer';
import main from '../img/icons/home.png';
import H1 from '../components/H1';
import Welcome from '../components/Welcome';
class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
          openData:false,
            authed: false,
          }

      this.changeAuth = this.changeAuth.bind(this);
          this.logoutApp = this.logoutApp.bind(this);

    }

  changeAuth(user){
            this.setState({
                authed: true,
                user:user,
            });

            console.log("Authenticated: ", this);
        };


      logoutApp(){
         this.setState({
            authed: false,

        })
        console.log('logged out state: ', this);
}
    

    render() {
        if (!this.state.authed) {
        return(
        <div>
          {/* <H1/> */}
          <div className="homee"></div>
          <p className="text-center">Please Sign-in</p>
            <Login changeAuth={this.changeAuth} />
          {console.log('Login Happening')}
            <img className='img-fluid align-items-end' src={main} alt="" />
        </div>
        );
      }
         else if(this.state.authed && this.state.openData){
           return(
             <div>
               <Welcome/> user={this.state.user} logoutApp={this.logoutApp}
            
             </div>
           )
         }else {
           return(
             <div>
              
               <Welcome />
            
              
             </div>
    
           );
         }

    }
}

export default Home;











// class App extends Component {
//   state={
//
//   }
//   render() {
//     return (
//       <div >
//
//
        {/* <Route exact path={'/'} component={Home}/>
        <Route exact path='/Profiles' component={Profiles}/>
        <Route exact path='/Payment' component={Payment} />
        <Route exact path='/TeacherProfile' component={TeacherProfile}/>
        <Route exact path='/AddStudents' component={AddStudents}/>
        <Route exact path = '/MapContainer' component={MapContainer}/> */}
//       </div>
//     );
//   }
// }
//
// export default App;
