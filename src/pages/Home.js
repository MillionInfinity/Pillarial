import React, {Component} from 'react';
import '../App.css';
import H1 from '../components/H1.js';
import main from '../img/icons/home.png';
import SignIn from '../components/SignIn';
import Button from '../components/Button';
class Home extends Component {
    render() {
        return (
            <div>
                <H1/>

                <img className='img-fluid align-items-end' src={main} alt = ""/>
                <SignIn/>

            </div>
        );
    }
}

export default Home;
