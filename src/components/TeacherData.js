import React from 'react';

import TeacherList from './TeacherList';
import './ListItem.css';

let TeacherData = (props) => {

    console.log("from TeacherData file line 8", props.data);

    const allTeachers = props.data.map((item, index) =>
     <div key={item.key} className="ListDiv">
            <TeacherList
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
            <p className="h_text-center"> TeacherData 27</p>
            <div className="ListDiv">{allTeachers}</div>
          

        </div>
    );
    
}
export default TeacherData;
