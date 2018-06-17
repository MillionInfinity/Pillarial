import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';
import Return1 from '../img/icons/return.png';
import { Link } from 'react-router-dom';
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
   handleSubmit(event) {
         console.log("some thing", this.state);
         this.state,
             this.addUserProfile()
     }
    render(){
        return(
         <div className="container-fluid">

                <Link to={`/Profile`} className='backLink'>
                Back to Future
                    <img src = {Return1} className='image-fluid ml-12' alt = "return" style = {{width:"35px"}}/>
                </Link>

            <div className="row">
                <div className="col-1"></div>
                  <div className= "col-10 m-4" >

                  <div className='text-center'>
                <legend className="text mt-5">PAYMENT METHOD</legend>
                </div>
                {/* <form>
                 <p><label></label><input type="tel" className="form-control mt-1" name="cardNumber" placeholder="Valid Card Number" requiautofocus value={this.state.value} onChange={this.handleChange}/></p>
                 <p><input type="tel" className="form-control mt-2" name="cardExpiry" placeholder="MM / YY"  required value={this.state.value} onChange={this.handleChange}/></p>
                 <p><input type="tel" className="form-control mt-2 mb-4" name="cardCVC" placeholder="CVC"  required value={this.state.value} onChange={this.handleChange}/></p>
                <div className='text-center m-4'>
                <Button className="btn-red" link="" name="Submit" type="button" onClick={this.handleSubmit}>Submit</Button>
              </div>
             </form> */}
         </div>
         </div>


        </div>

        );
    }
}
export default Payments ;
