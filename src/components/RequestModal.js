import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import man from '../img/icons/man.png';
import ReactStars from '../components/Reactstars';
import {GetFromFB} from './UserIntr/auth';
import { googleProvider, rebase } from './UserIntr/constants';


export function DeleteFromFB(endpoint, itemID){
  return rebase.remove(endpoint + "/" + itemID, function (err) {
    if (err) {
      console.log("this is a scary error", err);
    } else if (!err) {
      // console.log("deleted item successfully");
    }
  })
}
class RequestModal extends Component{
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      teacherCont:[]
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
  // handleCancel(e) {
  //   console.log("this delete line 40", this.state.teacherCont);
  //        visible: false
  //        let deleteCard=this.state.teacherCont;
  //        DeleteFromFB(`contactTeacher`,deleteCard)
  // }

  toggle() {
    this.setState({
      modal: !this.state.modal,
      visible : true
    });
  }
    render(){
    // console.log("requestModal line 38",this.state.teacherCont);
    const teacher=this.state.teacherCont.map((item, index)=>
          <div key={item.key} className="ListDiv">
              <p>Teacher {item.subject}</p>
        <div className="container">
           <div id="rowli" className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8 check">
              
                <h5 className="descrip"></h5>
                <p></p>
                <ul className="listl">

                  <a href="#" className="more" onClick={this.toggle}>Request from{this.props.subject}</a>

                </ul>
              </div>
              <div className="col-md-2"></div>
            </div>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>
                <div className="row">
                <div className="col-2">
                 <img src={man} alt="" style={{width:'50px'}}/>
                 </div>
                 <div className="col-1"></div>
                 <div className="col-8">
                <h5>Request from Parent{this.props.subject}</h5>
                <ReactStars/>

                <h6>{item.subject}</h6>
                </div>
                  </div>
                </ModalHeader>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"/>
              <ModalBody>

              <div className="mt-4" style={{margin:'15px'}}>
                   

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

      console.log("teacher",teacher);
      return (
         <div className="container-fluid">
          {/* <p className="h_text-center"> RequestModal line 47</p> */}
          <div className="ListDiv">{teacher}</div>
          <p className="h_text-center"></p>

        </div> 
      );
    
    }
}
export default RequestModal;
