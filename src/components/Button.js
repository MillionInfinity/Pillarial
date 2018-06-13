import React, {Component} from 'react';
import '../App.css';

function Button(props) {
    return (
        <div>
            <a className={props.class} href={props.link}>{props.name}</a>
        </div>
    );
}

export default Button;