import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import MyTeacherProfile from './MyTeacherProfile';
import './ListItem.css';

let MyTeacherData = (props) => {

    console.log("from TeacherData file line 8", props.data);

    const allTeachers = props.data.map((item, index) =>
        <div key={item.key} className="Lis">
            <MyTeacherProfile
                firstName={item.firstName}
                lastName={item.lastName}
                address={item.address}
                address1={item.address1}
                phone={item.phone}
                states={item.state}
                zipCode={item.zipCode}
                specializedOn={item.specializedOn}
                imagePreviewUrl={item.imagePreviewUrl}
                yourRate={item.yourRate}
            />
        </div>)
    return (
        <div className="container-fluid">
            <p className="h_text-center"> MyTeacherData 27</p>
            <div className="Lis">{allTeachers}</div>

        </div>
    );
}

export default MyTeacherData;
