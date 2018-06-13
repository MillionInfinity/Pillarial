import React, {Component} from 'react';
import Button from '../components/Button';
import Payments from '../components/Payments';
import Nav from '../components/Nav';

class Payment extends Component {
    render(){
        return(
            <div>
            <Nav/>
              <Payments/>
            </div>
        );
    }
}
export default Payment;
