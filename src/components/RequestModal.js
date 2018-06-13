import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import man from '../img/icons/man.png';
import ReactStars from '../components/Reactstars';
// import Calculate from '../components/Calculate';
let ButtonToolbar='';
class RequestModal extends Component{
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
    render(){
        return(
          <div className="container">
            <div id="rowli" className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8 check">
                <h5 className="descrip"></h5>
                <p></p>
                <ul className="listl">

                  <a href="#" className="more" onClick={this.toggle}>Request modal</a>

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
                <h5>Request from Parent</h5>
                <ReactStars/>

                <h6>JavaScript, ReactJs, AngularJs</h6>
                </div>
                  </div>
                </ModalHeader>
              <ModalBody>

              <div className="mt-4" style={{margin:'15px'}}>
              <p>Subject:</p>
              <p>Topic:</p>
              <p>Sub-Topic:</p>
              <p>Meet At:</p>
              <p>Hours Requested</p>
              <p>Date Requested</p>
              <p>your Total Amount Gained: </p>

              </div>
             </ModalBody>
              <ModalFooter>
                <div className='container-fluid'>
                <div className='row'>
                  <div className='col-2'>
                    <Button>Decline</Button>
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
        );
    }
}
export default RequestModal;
