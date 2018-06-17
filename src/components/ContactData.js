import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ContactModal from './ContactModal';
import './ListItem.css';

let ContactData = (props) => {

    console.log("from TeacherData file line 8", props.data);

    const allTeachers = props.data.map((item, index) =>
        <div key={item.key} className="ListDiv">
            <ContactModal
                firstName={item.firstName}
                lastName={item.lastName}
                address={item.address}
                address1={item.address1}
                phone={item.phone}
                states={item.state}
                zipCode={item.zipCode}
                specializedOn={item.specializedOn}
                imagePreviewUrl={item.imagePreviewUrl}

            />
        </div>)
    return (
        <div className="container-fluid">
            <p className="h_text-center">Teacher Around Me</p>
            <div className="ListDiv">{allTeachers}</div>

        </div>
    );
}

export default ContactData;
