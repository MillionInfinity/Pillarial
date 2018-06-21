import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import addUser1 from '../img/icons/man.png';
import ReactStars from '../components/Reactstars';
import '../App.css';
import { GetFromFB } from './UserIntr/auth';
import { rebase } from './UserIntr/constants';
import Nav from './Nav';
import Return1 from '../img/icons/return.png';
import Next from '../img/icons/next.png';
import { Link } from 'react-router-dom';


export class MapContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            teaFB: [],
            zoom: 25,
            imagePreviewUrl: ''
        };
        /* binding event to state */
        this.onMarkerClick = this.onMarkerClick.bind(this);
    }


        componentDidMount() {

        this.props.datas,
            GetFromFB('teacher').then(data => {
                let teachermap = Object.values(data);
                console.log("map-container line 34", teachermap);
                this.setState({
                    teaFB: teachermap
                })

            }).catch(err=>{
                console.error(err)
            })
    }

    /* marker event handler */
    onMarkerClick(props, marker, e) {

        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,

        });
    }
    render() {
        if (!this.props.google) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <Nav />

                <Map style={{ minWidth: "200px", minHeight: "200px" }}
                    google={this.props.google} zoom={14}
                    className={"map"} initialCenter={{ lat: 36.149937, lng: -86.812866 }}>
{
                      this.state.teaFB.map((item,index)=>(
                    <Marker key={item.key} title={'This is a point'} onClick={this.onMarkerClick} position={{ lat:parseFloat(item.address), lng:parseFloat(item.address1) }}
                        firstName={item.firstName}
                        lastName={item.lastName}
                        phone={item.phone}
                         />

                      ))
}
                    <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
                        <div className="MapMarkerInfo">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-4">
                                        <img className="img-fluid markerimg" src={addUser1} alt="the real teacher" style={{ width: "100px" }} />
                                    </div>
                                    <div className="col-6">
                                        <h6 className="mt-2 text-left"></h6>

                                        <p className="text-right dollar">$45 </p>
                                    </div>
                                </div>
                                <div className="row sub">
                                    <div className="col-4"></div>
                                    <div className="col-2">
                                        <p className="text-center">Javascript,</p>
                                    </div>
                                    <div className="col-2 subject">
                                        <p className="text-center"> React,</p>
                                    </div>

                                    <p className="text-center">Angular</p>

                                </div>
                                <div className="row review">
                                    <div className="col-4">

                                        <p className="text-right">Schedule</p>

                                    </div>
                                    <div className="col-4">
                                        <p className="text-right message">Message</p>
                                    </div>
                                    <div className="col-4">
                                        <p className="text-right">Review</p>
                                    </div>
                                </div>
                                <ReactStars />
                            </div>
                        </div>
                    </InfoWindow>
                </Map>

            </div>
        );
    }
} export default GoogleApiWrapper({
    apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",
    v: "3"
})(MapContainer);
