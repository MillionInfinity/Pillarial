import React, { Component } from 'react';
import { GetFromFB } from './UserIntr/auth';
import { rebase } from './UserIntr/constants';
import  './NavTea.css';
import RequestModal from './RequestModal';
import {Link} from "react-router-dom";
import Return1 from '../img/icons/return.png';
import NavTea from './NavTea';
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
            // modal: false,
            teacherCont: []
        };
        // this.handleCancel = this.handleCancel.bind(this);
        // this.toggle = this.toggle.bind(this);
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

    // toggle() {
    //     this.setState({
    //         modal: !this.state.modal,
    //         visible: true
    //     });
    // }
    render() {
        // console.log("requestModal line 38",this.state.teacherCont);
        // const teacher = this.state.teacherCont.map((item, index) =>
            {/* <div key={item.key} className="ListDiv"> */}
                {/* <p>Teacher {item.subject}</p> */}
                {/* <div id="reqeu" className="container"> */}
                    {/* <div id="rowlil" className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8 request">
                            <ul className="listl">
                                <a href="#" className="reqmore" onClick={this.toggle}>Request from {item.yourName}</a>
                            </ul>
                        </div>
                        <div className="col-md-2"></div>
                    </div> */}
            
                      
                            {/* <div className="row">
                                <div className="col-2">
                                    <img src={man} alt="" style={{ width: '50px' }} />
                                </div>
                                <div className="col-1"></div>
                                <div className="col-8">
                                    <h5>Request from Parent {item.yourName}</h5>
                                    <ReactStars />

                                    {/* <h6>{item.subject}</h6> 
                                </div>
                            </div> */}
                      
                      

                            {/* <div className="mt-4" style={{ margin: '15px' }}>


                                <p><strong>Subject:</strong>{item.subject}</p>
                                <p><strong>Topic:</strong>{item.topic}</p>
                                <p><strong>Sub-Topic:</strong>{item.subTopic}</p>
                                <p><strong>Meet At:</strong> {item.meetAt}</p>
                                <p><strong>Hours Requested:</strong> {item.hours}</p>
                                <p><strong>Date Requested:</strong> {item.Date}</p>
                                <p><strong>your Total Amount Gained:</strong> ${item.totalPaid} </p>


                            </div> */}
                       
                 
                {/* </div>
            </div>) */}

     
        return (

            <div className="container ">
                <h2 className="text-center requestM">You are Accepted a Tutor for the Coming Days.</h2>
                <NavTea/>
                <Link to={`/RequestModal`} className='backLink'>

                    <a className="text-right"><img src={Return1} className='image-fluid return' alt="return" style={{ width: "35px" }} /></a>
                </Link>
                {/* <div className="ListDiv">{teacher}</div> */}
                <p className="h_text-center"></p>

            </div>
        );

    }
}
export default RequestModal1;
