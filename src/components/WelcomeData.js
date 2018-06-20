import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Welcome from './Welcome';
import './ListItem.css';

let WelcomeData = (props) => {

    console.log("from WelcomeData file line 8", props.data);

    const userPicture = props.data.map((item, index) =>
        <div key={item.email} className="WelcomeDiv">
            <Welcome
                user={item.user}
                email={item.email}
                portrait={item.portrait}
                ZipCode={item.ZipCode}
               
               
            />
        </div>)
    return (
        <div className="container-fluid">
            <p className="h_text-center">Teacher in WelcomeData</p>
            <div className="WelcomeDiv">{userPicture}</div>

        </div>
    );
}

export default WelcomeData;
