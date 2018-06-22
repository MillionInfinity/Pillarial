import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import man from '../img/icons/man.png';
import ReactStars from '../components/Reactstars';
import { GetFromFB } from './UserIntr/auth';
import { rebase } from './UserIntr/constants';
import Nav from './Nav';
import './ListItem.css';
export function DeleteFromFB(endpoint, itemID) {
    return rebase.remove(endpoint + "/" + itemID, function (err) {
        if (err) {
            console.log("this is a scary error", err);
        } else if (!err) {
            // console.log("deleted item successfully");
        }
    })
}
class RequestModal1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            teacherCont: []
        };
        // this.handleCancel = this.handleCancel.bind(this);
        this.toggle = this.toggle.bind(this);
    }
    componentDidMount = () => {
        GetFromFB('contactTeacher').then(data => {
            let contactTeach = Object.values(data);
            // console.log("contact reqmodin line 18", contactTeach);
            this.setState({
                teacherCont: contactTeach
            })

        });

    }

    toggle() {
        this.setState({
            modal: !this.state.modal,
            visible: true
        });
    }
    render() {
        // console.log("requestModal line 38",this.state.teacherCont);
        const teacher = this.state.teacherCont.map((item, index) =>
            <div key={item.key} className="ListDiv">
                {/* <p>Teacher {item.subject}</p> */}
                <div id="reqeu" className="container">
                    <div id="rowlil" className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8 request">
                            <ul className="listl">
                                <a href="#" className="reqmore" onClick={this.toggle}>Request from {item.yourName}</a>
                            </ul>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>
                            <div className="row">
                                <div className="col-2">
                                    <img src={man} alt="" style={{ width: '50px' }} />
                                </div>
                                <div className="col-1"></div>
                                <div className="col-8">
                                    <h5>Request from Parent {item.yourName}</h5>
                                    <ReactStars />

                                    {/* <h6>{item.subject}</h6> */}
                                </div>
                            </div>
                        </ModalHeader>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" />
                        <ModalBody>

                            <div className="mt-4" style={{ margin: '15px' }}>


                                <p><strong>Subject:</strong>{item.subject}</p>
                                <p><strong>Topic:</strong>{item.topic}</p>
                                <p><strong>Sub-Topic:</strong>{item.subTopic}</p>
                                <p><strong>Meet At:</strong> {item.meetAt}</p>
                                <p><strong>Hours Requested:</strong> {item.hours}</p>
                                <p><strong>Date Requested:</strong> {item.Date}</p>
                                <p><strong>your Total Amount Gained:</strong> ${item.totalPaid} </p>


                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <div className='container-fluid'>
                                <div className='row'>
                                    <div className='col-2'>
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handleCancel}>Decline</button>
                                    </div>
                                    <div className='col-7'>

                                    </div>
                                    <div className='col-3'>
                                        <Button>Accept</Button>
                                    </div>
                                </div>
                            </div>

                        </ModalFooter>
                    </Modal>
                </div>
            </div>)

        console.log("teacher", teacher);
        return (

            <div className="container ">
                <h2 className="text-center requestModa">All Requests you Have</h2>
                <Nav />

                <div className="ListDiv">{teacher}</div>
                <p className="h_text-center"></p>

            </div>
        );

    }
}
export default RequestModal1;