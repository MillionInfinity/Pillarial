import React, {Component} from 'react';
import {googleProvider, rebase} from './UserIntr/constants';

import Return1 from '../img/icons/return.png';
import Next from '../img/icons/next.png';
// import './ListItem.css';
import MapContainer from './MapContainer';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import NavTea from './NavTea';



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
class TeacherProfile1 extends Component{
     constructor(props){
         super(props);
         this.state={
           teacherProfile:[],
            imagePreviewUrl:''
         };
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
         this.handleImageChange = this.handleImageChange.bind(this);
     }

handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0]

    reader.onloadend = () => {
        this.setState({file: file, imagePreviewUrl: reader.result});
    };
    reader.readAsDataURL(file);
}
     handleChange(e){
        //  console.log(this.state);

         this.setState({
             [e.target.name]: e.target.value
         });
       e.preventDefault();
     }
     handleSubmit(e){
         console.log("submit clicked",this.props.user);
         let userId=this.props.user
         let teacherfile=this.state

         SaveObjToFB(`teacher/`,teacherfile);
       console.log(`users.uid`,)
       e.preventDefault();
     }

    render(){
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} style={{ width: '100px' }} />);
        }

        return(
            <div>
                <NavTea/>
                <Link to={`/`} className='backLink'>

                    <a className="text-right"><img src={Return1} className='image-fluid return' alt="return" style={{ width: "35px" }} /></a>
                </Link>
                <Link to={`/RequestModal`} className='NextLink'>

                    <a className="text-right"><img src={Next} className='image-fluid next' alt="return" style={{ width: "35px" }} /></a>
                </Link>


                <div className="tProfile ">
                    <div className="container-fluid" >
                        <div className="row">
                            <div className="col m-3">
                                <div className="text-center">
                                    {$imagePreview}
                                    <div className="form-group text-center">
                                        <input id="Upload-photo" name="Upload photo" className="input-file mt-4" type="file" onChange={this.handleImageChange} />
                                        <label className="col-md-8 control-label" htmlFor="Upload photo" accept=".jpg, .jpeg ,.png"></label>
                                    </div>
                                </div>
                            </div>
                            <div />
                        </div>
                        <div>
                            <div className="row ">
                                <div className="col-1"></div>
                                <div className="col-10 m-4" >
                                    <legend className="text-center">Instructor's Profile</legend>
                                    <form className="form-horizontal">
                                        <p><label></label><input className="form-control" name="firstName" placeholder="First Name" value={this.state.value} onChange={this.handleChange} /></p>
                                        <p><label></label><input className="form-control" name="lastName" placeholder="Last Name" value={this.state.value} onChange={this.handleChange} /></p>
                                        <p><label></label><input className="form-control" name="phone" placeholder="Phone Number" value={this.state.value} onChange={this.handleChange} /></p>
                                        <p><label></label><input className="form-control" name="address" placeholder="Permanent Address" value={this.state.value} onChange={this.handleChange} /></p>
                                        <p><label></label><input className="form-control" name="address1" placeholder="Permanent Address" value={this.state.value} onChange={this.handleChange} /></p>
                                        <p><label></label><input className="form-control" name="specializedOn" placeholder="Specialized On" value={this.state.value} onChange={this.handleChange} /></p>
                                        <p><label></label><input className="form-control" name="yourRate" placeholder="Your rate per hour" value={this.state.value} onChange={this.handleChange} /></p>

                                        <div className="row">
                                            <div className="col-6">
                                                <p><label></label><input className="form-control" name="zipCode" id="zipCode" placeholder="Zip Code" required value={this.state.value} onChange={this.handleChange} /></p>
                                            </div>
                                            <div className="col-6">
                                                <p><label htmlFor="state"></label>
                                                    <select className="form-control" name="state" value={this.value} onChange={this.handleChange}><option value="---">State</option><option value="Alabama">Alabama</option><option value="Alaska">Alaska</option><option value="Arizona">Arizona</option><option value="Arkansas">Arkansas</option><option value="California">California</option><option value="Colorado">Colorado</option><option value="Connecticut">Connecticut</option><option value="Delaware">Delaware</option><option value="District of Columbia">District of Columbia</option><option value="Florida">Florida</option><option value="Georgia">Georgia</option><option value="Guam">Guam</option><option value="Hawaii">Hawaii</option><option value="Idaho">Idaho</option><option value="Illinois">Illinois</option><option value="Indiana">Indiana</option><option value="Iowa">Iowa</option><option value="Kansas">Kansas</option><option value="Kentucky">Kentucky</option><option value="Louisiana">Louisiana</option><option value="Maine">Maine</option><option value="Maryland">Maryland</option><option value="Massachusetts">Massachusetts</option><option value="Michigan">Michigan</option><option value="Minnesota">Minnesota</option><option value="Mississippi">Mississippi</option><option value="Missouri">Missouri</option><option value="Montana">Montana</option><option value="Nebraska">Nebraska</option><option value="Nevada">Nevada</option><option value="New Hampshire">New Hampshire</option><option value="New Jersey">New Jersey</option><option value="New Mexico">New Mexico</option><option value="New York">New York</option><option value="North Carolina">North Carolina</option><option value="North Dakota">North Dakota</option><option value="Northern Marianas Islands">Northern Marianas Islands</option><option value="Ohio">Ohio</option><option value="Oklahoma">Oklahoma</option><option value="Oregon">Oregon</option><option value="Pennsylvania">Pennsylvania</option><option value="Puerto Rico">Puerto Rico</option><option value="Rhode Island">Rhode Island</option><option value="South Carolina">South Carolina</option><option value="South Dakota">South Dakota</option><option value="Tennessee">Tennessee</option><option value="Texas">Texas</option><option value="Utah">Utah</option><option value="Vermont">Vermont</option><option value="Virginia">Virginia</option><option value="Virgin Islands">Virgin Islands</option><option value="Washington">Washington</option><option value="West Virginia">West Virginia</option><option value="Wisconsin">Wisconsin</option><option value="Wyoming">Wyoming</option></select>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-center m-4">
                                            <Link to={'/RequestModal'}>
                                            <button className={"btn-red mr-4 "} link="" name="Submit" type="button" onClick={this.handleSubmit}> Save and Next </button>
                                             </Link>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-1"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default TeacherProfile1;
