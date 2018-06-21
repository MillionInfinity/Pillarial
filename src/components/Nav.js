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
import RequestModal from './RequestModal';
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
                    
                    <nav class="navbar fixed-top">
                        <a class="navbar-brand" ></a>
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
                           <Link to={'/Profile'}>
                            <p>My Profile</p>
                            </Link>
                            <hr></hr>
                            <p>My Messages</p>
                            <hr></hr>
                            <p>My History</p>
                            {/* <CollapseExample title="Date of Crime" form={<DateInput handleChange={this.props.handleChange} />} /> */}
                            <hr></hr>

                            <p>My Request</p>

                            {/* <CollapseExample value={this.props.value} title="Location" form={<LocationInput handleChange={this.props.handleChange} />} /> */}
                            <hr></hr>
                            {/* <input className="submit" type="submit" value="Submit" onClick={(event) => { console.log("Submit pressed."), this.props.submit2(event), event.preventDefault() }} /> */}

                    </SlidingPane>
                </div>
                </nav>
                 
                {/* <RequestModal/> */}
                </div>
            );
        }
    }

export default Nav;
