import React from 'react';
import Nav from './Nav';
import TeacherList from './TeacherList';
import Return1 from '../img/icons/return.png';
import Next from '../img/icons/next.png';
import {Link} from 'react-router-dom';
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
       <div>
        <div className="container-fluid">
            <Nav/>
                <Link to={`/Profile`} className='backLink'>

                    <a className="text-right"><img src={Return1} className='image-fluid return' alt="return" style={{ width: "35px" }} /></a>
                </Link>
                <Link to={`/MapContainer`} className='NextLink'>

                    <a className="text-right"><img src={Next} className='image-fluid next' alt="return" style={{ width: "35px" }} /></a>
                </Link>
           <div className="ListDiv">{allTeachers}</div>
           </div>
       
            </div>
    
    );
    
}
export default TeacherData;
