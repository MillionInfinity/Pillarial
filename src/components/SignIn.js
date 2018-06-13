
import React from 'react';
import { Button, Form, Grid, Header, Segment, Divider } from 'semantic-ui-react';
import User from './User';
export default class SignIn extends React.Component{
   state={
     field:{
       password:'',
       email:''
     },
     fieldError:{},

   }

     onSubmit = evt => {
     const user = this.state.fields;
     const fieldErrors = this.validate(user);
     this.setState({fieldErrors});
     evt.preventDefault();

     if (Object.keys(fieldErrors).length) return;

     /********* PLACE INVERSE DATA FLOW HERE ************/
       this.props.sendDeets(evt.target.id, user.email, user.password);

       evt.preventDefault();
   };

   validate = user => {
     const errors = {};
     if (!user.email) errors.email = 'Email Required';
     if (!user.password) errors.password = 'Password Required';
     return errors;
   };

   onChange = evt => {
     const fields = Object.assign({}, this.state.fields);
     fields[evt.target.name] = evt.target.value;
     this.setState({fields});
   };
    render() {
        return (
            <div className='login-form'>
             <div className="p-5 mx-auto my-5 mb-4">
                    <div className="col text-center">
                        <User/>
                        <h6>Please Sign-in</h6>
                <span style={{color: 'red'}}>{this.props.errorMessage}</span>

                <form>
                <Segment stacked>

                <div className="form-group">

                    <input className="m-2 form-control" type="email" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.onChange}/>
                     </div>

                     <div className="form-group">
                        <input className="m-2 form-control" name="password" type="password" id="exampleInputPassword1" placeholder="Password" onChange={this.onChange}/>
                         </div>
                        <div className="col">
                            <LoginButtons id="login" className="btn m-2" type="submit" onFormSubmit={this.onFormSubmit} >Sign In</LoginButtons>
                            </div>
                            </Segment>
                            </form>
                        <p className="my-2"><a href="#">Forgot your Password?</a></p>
                    </div>
                </div>

                <div className="container absoluteFooter">
                    <div className="py-3 text-center">
                        Dont you have an account? <a href="#">Create One</a>
                     
                    </div>
                </div>
            </div>
        );
    };
}
const LoginButtons = (props) => (
  <Segment padded>
    <Button id="login" positive fluid onClick={props.onSubmit}>Login</Button>
    <Divider horizontal>Or</Divider>
    <Button id="signup" secondary fluid  onClick={props.onFormSubmit}>Sign Up Now</Button>
  </Segment>
)
