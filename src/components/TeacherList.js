import React, {Component} from 'react';
import TeachersProfile from '../components/TeachersProfile';

import man from '../img/icons/man.png';
import ReactStars from '../components/Reactstars';
import { googleProvider, rebase } from './UserIntr/constants';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export function SaveObjToFB(endpoint, objToSave, ) {

  return rebase.push(endpoint, {
    data: objToSave,
    then(err) {
      if (err) {
        <p>some thing wrong</p>
      } else if (!err) {

      }
    }
  })
    .then((result) => {
      // console.log("saved something to firebase and this was the result:", result);
      return result;
    })
}

class TeacherList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modal: false,
      subject: '',
      topic: '',
      subTopic: '',
      meetAt: '',
      time: '',
      date: '',
      due: '',
      state: '',
      rate: 3.25,
      hours: 0,
      totalPaid: 0
    };
    this.handleExpense = this.handleExpense.bind(this);
    this.handleIncomeChange = this.handleIncomeChange.bind(this);
    this.state.totalPaid = + this.state.hour * this.state.rate;
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  handleIncomeChange(e) {
    const newHour = e.target.value;
    this.setState({
      hours: newHour,
      totalPaid: newHour * this.state.rate
    });
  }
  handleExpense(e) {
    const newExpense = 3.25;
    this.setState({
      expense: newExpense,
      totalPaid: this.state.hour * 3.25
    });
  }
  handleChange(e) {
    console.log("user", e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    console.log("Submit button clicked", this.state);
    this.contactTeacher()
    let contactObj = this.state;
    SaveObjToFB(`contactTeacher/`, contactObj);
  }
  contactTeacher = () => {
    let teacherContactData = {
      "subject": this.state.subject,
      "topic": this.state.topic,
      "SubTopic": this.state.subTopic,
      "meetAt": this.state.meetAt,
      "hours": this.state.hours,
      "date": this.state.date,
      "due": this.state.due,
      "time": this.state.time,
      "totalPaid": this.state.totalPaid
    };
  }
  render() {
    return (
      <div className="container-fluid">

      <div className="container">
        <div id="rowli" className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 check">
            <h5 className="descrip">{this.props.firstName}</h5>
            <p>{this.props.lastName}</p>
            <ul className="listl">
              <p><strong>First Name:</strong> {this.props.firstName}</p>
              <p><strong>Last Name:</strong> {this.props.lastName}</p>
              <p><strong>Subjects:</strong> {this.props.specializedOn}</p>
              <br />
              <a href="#" className="more" onClick={this.toggle}>Teaachers List line 113</a>
            </ul>
          </div>
          <div className="col-md-2"></div>
        </div>
         {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>  */}
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>
                        <div className="row">
                            <div className="col-2">
                  <img src={man} alt='' className="img-circle" src={this.props.imagePreviewUrl}/>
                            </div>
                            <div className="col-1"></div>
                            <div className="col-8">
                <h5>Contact {this.props.firstName}</h5>
                             <div className="row">
                             <div className="col-8">
                                <ReactStars/>
                                </div>
                                <div className="col-4">
                                <p className="text-right yourRate">$ {this.props.yourRate}</p>
                                </div>
                                </div>
                                <h6>{this.props.specializedOn}</h6>
                            </div>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                     <div className="mt-4" style={{ margin: '15px' }}>
                        <form className="form-horizontal">
                                  <p><label></label><input className="form-control" name="subject" placeholder="Subjects you need support" value={this.state.value} onChange={this.handleChange}/></p>
                                  <p><label></label><input className="form-control" name="topic" placeholder="Title of your topic" value={this.state.value} onChange={this.handleChange}/></p>
                                  <p><label></label><input className="form-control" name="subTopic" placeholder="If it has sub-title" value={this.state.value} onChange={this.handleChange}/></p>
                                  <p><label></label><input className="form-control" name="meetAt" placeholder="Lets' meet at" value={this.state.value} onChange={this.handleChange}/></p>
                                 <p><label></label><input id="income" type="number" placeholder="Hours required" onChange={this.handleIncomeChange.bind(this)} className="form-control" value={this.state.hours}/></p>
                                  <p><label></label><input className="form-control" type="date" name="Date" placeholder="Date" value={this.state.value} onChange={this.handleChange} /></p>
                                  <div className="text-center m-4">
                                  <p>Total Due:{this.state.totalPaid}$</p>
                                 <button className={"btn-red mr-4 "} link="" name="Submit" type="button" onClick={this.handleSubmit}>Request</button>
                                 </div>
                              </form>

                        </div>
                    </ModalBody>
                    <ModalFooter>
                  </ModalFooter>
                </Modal>
          </div>
      </div>
    );
  }
}

export default TeacherList;