import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import addUser1 from '../img/icons/man.png';
import ReactStars from '../components/Reactstars';
import '../App.css';



export class MapContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},

            call:null,
            // lat:null,
            // lng:null,
            complain:null,
            zoom:25,
            imagePreviewUrl:''
        };
        /* binding event to state */
        this.onMarkerClick = this.onMarkerClick.bind(this);
    }

    componentWillUpdate(){
        console.log("Rendered", this.props.data);
    }

    /* marker event handler */
    onMarkerClick(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }



    render() {
        if (!this.props.google) {
            return <div>Loading...</div>
        }
        // const style = {
        //   width: '100%',
        //   height: '100%',
        // //   border:'2px solid green',
        //   color:'black'
        // }

        return (
            <div>
                <Map style={{minWidth: "200px",minHeight: "200px"}} google={this.props.google} zoom={14} className={"map"} initialCenter={{lat: 36.149937, lng: -86.812866}} >
                 {
                // this.props.data.map((item, index) => {
                   <Marker  title={'This is a point'} onClick={this.onMarkerClick} position={{ lat:36.149937, lng:-86.812866 }}
                                          name="TeachersName"

                                          />
                // })

                 }

                 <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
                    {/* <div className="MapMarkerInfo"> */}
                  <div className="container-fluid">
                  <div className="row">
                  <div className="col-4">
                  <img className="img-fluid markerimg" src={addUser1} alt="the real teacher" style={{width:"100px"}}/>
                  </div>
                  <div className="col-6">
                   <h6 className="mt-2 text-left">{this.state.selectedPlace.name}</h6>
                    <p className="text-left">1 2 3 4 5:{this.state.selectedPlace.complaint} </p>
                    <p className="text-right dollar">$45{this.state.selectedPlace.complaint} </p>
                     </div>
                     </div>
                     <div className="row sub">
                      <div className="col-4"></div>
                     <div className="col-2">
                    <p className="text-center">Javascript,{this.state.selectedPlace.complaint}</p>
                    </div>
                    <div className="col-2 subject">
                    <p className="text-center"> React,{this.state.selectedPlace.complaint}</p>
                     </div>
                     
                    <p className="text-center">Angular{this.state.selectedPlace.complaint}</p>
                   
                     </div>
                     <div className="row review">
                         <div className="col-4">
                           <p className="text-right">Schedule{this.state.selectedPlace.street_name}</p>
                        </div>
                         <div className="col-4">
                        <p className="text-right message">Message{this.state.selectedPlace.street_name}</p>
                        </div>
                       <div className="col-4">
                        <p className="text-right">Review{this.state.selectedPlace.street_name}</p>
                        </div>
                   </div>
                        <ReactStars/>
                
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
