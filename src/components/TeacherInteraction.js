import React, {Component} from 'react';
import MapContainer from './MapContainer';
import TeacherData from './TeacherData';
import { GetFromFB } from './UserIntr/auth';



class TeacherInteraction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teaFb: [],
           
        }
      
    }
    componentDidMount = () => {
        GetFromFB('teacher').then(data => {
            //   console.log("teacher from firebase",data);
            let teacherstuff = Object.values(data);
            console.log("teacher ready to printing", teacherstuff);
            this.setState({
                teaFb: teacherstuff
            })

        });

    }
    


    render() {
        const mapview = this.state.mapview;

        let view = mapview ?
            (<div className="map">
                <MapContainer data={this.state.teaFb} />
            </div>)
            :
            (<div className="listDiv">
                <TeacherData data={this.state.teaFb} />
            </div>);

        return (
            <div className="App">
                <div className="filter">
                    {/* <Filter submit={this.getFormData} submit2={this.submit} value={this.locationValue} handleChange={this.handleChange} /> */}
                </div>
                <div mapview={mapview}>{view}</div>
                <div className="footerNav row">
                    {/* <div className="col-auto mx-auto borderRule" onClick={this.viewMap}><img src={MapIcon} className="footer-icon" alt="Map Icon"></img><br />Map</div><div className="col-auto mr-auto" onClick={this.viewList}><img src={ListIcon} className="footer-icon" alt="List Icon"></img><br />List</div> */}
                </div>
            </div>
        );
    }
}


export default TeacherInteraction;
