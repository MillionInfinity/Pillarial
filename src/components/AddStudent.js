import React, {Component} from 'react';
import '../App.css';
import main1 from '../img/icons/add-user.png';
import Button from '../components/Button.js';
import { Link} from "react-router-dom";


class AddStudent extends Component {
    constructor(props) {
        super(props);
        this.state =
            {

                firstName: '',
                lastName: '',
                grade: '',
                subject: '',
                time: '',
                file: '',
                meet: '',
                state: ''
            };
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.getprofile = this.getprofile.bind(this);
        this.addUserProfile = this.addUserProfile.bind(this)
    }
    handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        };
        reader.readAsDataURL(file);
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
   


    addUserProfile(name) {
        let userProfileData = {
            "firstName": this.state.firstName,
            "lastName": this.state.lastName,
            "grade": this.state.grade,
            "subject": this.state.subject,
            "time": this.state.time,
            "meet": this.state.meet,
                       "imagePreviewUrl": this.state.imagePreviewUrl
        }

        console.log("profile to database");

        fetch('http://localhost:3000/Profile', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(userProfileData), // data can be `string` or {object}!
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
            .catch(error => console.error('sorry Error try to send it again', error))
            .then(response => console.log('Successfully posted to data base', response));
    }

    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />);
        }

        return (
            <div className="Profile">
                <div className="container-fluid" >
                    <div className="row">
                        <div className="col m-3">
                            <div className="text-center">

                                {$imagePreview}
                                <div className="form-group">
                                    <input id="Upload-photo" name="Upload photo" className="input-file" type="file" onChange={this.handleImageChange} />
                                    <label className="col-md-8 control-label" htmlFor="Upload photo" accept=".jpg, .jpeg ,.png"></label>
                                </div>
                            </div>
                        </div>
                        <div/>
                        </div>
                        <div>
                        <div className="row ">
                            <div className="col-1"></div>
                            <div className= "col-10 m-4" >
                                <legend className="text-center">ADD STUDENT</legend>
                                <form className="form-horizontal">
                                    <p><label></label><input className="form-control" name="firstName" placeholder="First Name" value={this.state.value} onChange={this.handleChange} /></p>
                                    <p><label></label><input className="form-control" name="lastName" placeholder="Last Name" value={this.state.value} onChange={this.handleChange} /></p>
                                    <p><label></label><input className="form-control" name="grade" placeholder="Grade" value={this.state.value} onChange={this.handleChange} /></p>
                                    <p><label></label><input className="form-control" name="subject" placeholder="Subjects Required Support" value={this.state.value} onChange={this.handleChange} /></p>
                                    <p><label></label><input className="form-control" name="time" placeholder="Your Convinent Time" value={this.state.value} onChange={this.handleChange} /></p>
                                    <p><label></label><input className="form-control" name="meet" placeholder="Where Do want to Meet" value={this.state.value} onChange={this.handleChange} /></p>

                                    <div className="text-center m-4">
                                        <Link to={'/MapContainer'}>
                                   <button className={"btn-red mr-4 "} link="" name="Submit" type="button" onClick={this.handleSubmit}>Add</button>
                                 </Link>
                                   </div>
                                </form>
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </div>


                </div>
            </div>

        );
    }
}


export default AddStudent;
