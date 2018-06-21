import React, {Component} from 'react';
import { GetFromFB } from './UserIntr/auth';
import './ParentProfile.css';
import Nav from './Nav';
class ParentProfile extends Component{
    constructor(props){
        super(props);
        this.state={
        parentspro:[]
        };
    }
    componentDidMount = () => {
        GetFromFB('parent').then(data => {
            let parentuser = Object.values(data);
            console.log("parentProfile line 15", parentuser);
            this.setState({
                parentspro: parentuser
            })

        });
    }
    render(){
        console.log('parent profile line 23', this.state.parentspro);
        const myparent=this.state.parentspro.map((item,index) =>
            <div key={item.key} className="ListDiv">
              {/* {item.firstName} */}
              <div className="container card">
                  <div className="row">
                    <h2 className = "text-left" > Your Profile </h2>
                   <hr></hr>
                    <div className="col-12 parentprofile">
                      
                        <p><strong>First Name:-</strong> {item.firstName}</p>
                        <p><strong>Last Name:-</strong> {item.lastName}</p>
                        <p><strong>Phone:-</strong> {item.phone}</p>
                        <p><strong>Address:-</strong> {item.address}</p>
                        <p><strong>State:-</strong> {item.state}</p>
                    </div>
                   
                  </div>
              </div>

    </div>)
        return(
            <div className="container">
                <Nav/>
                {/* <img src={home} alt="a home " className='homeWelcome' /> */}
                <div className="ListDiv">{myparent}</div>
                <p className="h_text-center"></p>

            </div>
        );
    }
}
export default ParentProfile;