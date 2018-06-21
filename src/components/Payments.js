import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';
import Return1 from '../img/icons/return.png';
import Next from '../img/icons/next.png';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import './ListItem.css';
class Payments extends Component {
  constructor(props){
    super(props);
    this.state={
      CardNumber:[]
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
                  <Nav/>
                <Link to={`/Profile`} className='backLink'>
               
                    <a className="text-right"><img src = {Return1} className='image-fluid return' alt = "return" style = {{width:"35px"}}/></a>
                </Link>
                <Link to={`/MapContainer`} className='NextLink'>

                    <a className="text-right"><img src={Next} className='image-fluid next' alt="return" style={{ width: "35px" }} /></a>
                </Link>
            <div className="row">
                <div className="col-1"></div>
                  <div className= "col-10 m-4" >

                  <div className='text-center'>
                <legend className="text mt-5">PAYMENT METHOD</legend>
                </div>
                <form>
                 <p><label></label><input type="tel" className="form-control mt-1" name="cardNumber" placeholder="Valid Card Number" requiautofocus value={this.state.value} onChange={this.handleChange}/></p>
                 <p><input type="tel" className="form-control mt-2" name="cardExpiry" placeholder="MM / YY"  required value={this.state.value} onChange={this.handleChange}/></p>
                 <p><input type="tel" className="form-control mt-2 mb-4" name="cardCVC" placeholder="CVC"  required value={this.state.value} onChange={this.handleChange}/></p>
                <div className='text-center m-4'>
                <button className="btn-green" link="" name="Submit" type="button" onClick={this.handleSubmit}>Submit</button>
              </div>
             </form>
         </div>
         </div>


        </div>

        );
    }
}
export default Payments ;
