import React, {Component} from 'react';
import { Link} from "react-router-dom";
import {Collapse, Button, CardBody, Card} from 'reactstrap';
import CollapseExample from './CollapseExample';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import ribbonmark from '../img/icons/ribbon-mark.png';
import './ListItem.css';
import TeacherList from './TeacherList';
import  Profile from './Profile';

import ParentProfile from './ParentProfile';
import RequestModal from './RequestModal';
import Payments from './Payments';
import TeacherInteraction from './TeacherInteraction';
class Nav extends Component{

        constructor(props) {
            super(props);
            this.state = {
                isPaneOpenLeft: false,
                locationValue: ''
            };

            this.submit = this.submit.bind(this);
        }


        componentDidMount() {
            Modal.setAppElement(this.el);
        }


        handleSubmit = () => {
            alert('A location was submitted: ' + this.state);
        }


        submit(event){
            this.props.submit(this.state);
            event.preventDefault();
        }

        render() {
            return (
                <div>
                <nav className="navbar fixed-top">
                        <a className="navbar-brand" ></a>
                <div ref={ref => this.el = ref}>
                    <div className='text-left sidemark'>
                    <img src={ribbonmark} alt="sidemark" onClick={() => this.setState({isPaneOpenLeft: true})} style={{width:'35px'}}/>
                     </div>
                    <SlidingPane

                        isOpen={this.state.isPaneOpenLeft}

                        title='WELCOME'
                        from='left'
                        width='80%'

                        onRequestClose={() => this.setState({ isPaneOpenLeft: false })}>
                            <Link to={'/Payments'}>
                            <p>Payment</p>
                            </Link>
                            <hr></hr>
                            <Link to={'/TeacherInteraction'}>
                            <p>Request a teacher</p>
                            </Link>

                    </SlidingPane>
                </div>
                </nav>

                </div>
            );
        }
    }

export default Nav;
