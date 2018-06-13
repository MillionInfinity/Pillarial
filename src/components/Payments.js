import React, {Component} from 'react';
import Button from '../components/Button';
import Return1 from '../img/icons/return.png';
class Payments extends Component {
  constructor(props){
    super(props);
    this.state={
      CardNumber:'',
      CardExpiry:'',
      CardCVC:''
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleChange(event) {
         console.log("user", event.target.name);
         this.setState({
             [event.target.name]: event.target.value
         });
         console.log("change", event.target.value);

     }
     getprofile() {
     fetch('http://localhost:3000/profile')
         .then((response) => response.json())
         .then((responseJson) => {
             console.log("i got you server", responseJson);
         })
         .catch((error) => {
             console.error(error);
         });
 }


 addUserProfile(name) {
     let userProfileData = {
         "cardNumber": this.state.cardNumber,
         "CardExpiry": this.state.cardExpiry,
         "cardCVC": this.state.cardCVC
      }

     console.log("profile to database");

     fetch('http://localhost:3000/Profile', {
         method: 'POST', // or 'PUT'
         body: JSON.stringify(userProfileData), // data can be `string` or {object}!
         headers: new Headers({
             'Content-Type': 'application/json'
         })
     }).then(res => res.json())
         .catch(error => console.error('sorry Error try to send it again', error))
         .then(response => console.log('Successfully posted to data base', response));
 }

     handleSubmit(event) {
         console.log("some thing", this.state);
         this.state,
             this.addUserProfile()
     }
    render(){
        return(
         <div className="container-fluid">
          <p><a><img src = {Return1} className='image-fluid ml-12' alt = "return" style = {{width:"35px"}}/></a></p>
            <div className="row">
                <div className="col-1"></div>
                  <div className= "col-10 m-4" >

                  <div className='text-center'>
                <legend class="text mt-5">PAYMENT METHOD</legend>
                </div>
                <form>
                 <p><label></label><input type="tel" class="form-control mt-1" name="cardNumber" placeholder="Valid Card Number" autocomplete="cc-number" requiautofocus value={this.state.value} onChange={this.handleChange}/></p>
                 <p><input type="tel" class="form-control mt-2" name="cardExpiry" placeholder="MM / YY" autocomplete="cc-exp" required value={this.state.value} onChange={this.handleChange}/></p>
                 <p><input type="tel" class="form-control mt-2 mb-4" name="cardCVC" placeholder="CVC" autocomplete="cc-csc" required value={this.state.value} onChange={this.handleChange}/></p>
                <div className='text-center m-4'>
                <Button class="btn-red" link="" name="Submit" type="button" onClick={this.handleSubmit}>Submit</Button>
              </div>
             </form>
         </div>
         </div>
        </div>

        );
    }
}
export default Payments ;
