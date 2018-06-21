import React, {Component} from 'react';
import '../App.css';
import { Link} from "react-router-dom";
import {googleProvider, rebase} from './UserIntr/constants';
import Profile from './Profile';
import MapContainer from './MapContainer';
import Nav from './Nav';
import Return1 from '../img/icons/return.png';
import Next from '../img/icons/next.png';
import './ListItem.css';


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
class AddStudent extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
         studentpro:[],
           imagePreviewUrl:''
            };
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
      console.log(this.state);
              this.setState({
            [event.target.name]: event.target.value
        });
      }

    handleSubmit(event) {
        console.log("some thing", this.state);
      let studentpro=this.State
       SaveObjToFB(`student/`,studentpro);
    }


    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} style={{ width:'100px'}}/>);
        }

        return (
           <div>
           <Nav/>
                <Link to={`/Profile`} className='backLink'>

                    <a className="text-right"><img src={Return1} className='image-fluid return' alt="return" style={{ width: "35px" }} /></a>
                </Link>
                <Link to={`/MapContainer`} className='NextLink'>

                    <a className="text-right"><img src={Next} className='image-fluid next' alt="return" style={{ width: "35px" }} /></a>
                </Link>
            <div className="student">
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

                                   <button className={"btn-red mr-4 "} link="" name="Submit" type="button" onClick={this.handleSubmit}>Add</button>

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


export default AddStudent;
