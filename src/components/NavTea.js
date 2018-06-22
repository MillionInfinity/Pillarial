import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import './NavTea.css';

class NavTea extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // isPaneOpenLeft: false,
          
        };
    }
componentDidMount() {
     
    }
 render() {
        return (
            <div>
                <nav class="navbar navbar-light sm-dark fixed-top">
                    <a class="navbar-brand pillar" href="#">PILLARIA</a>
                </nav>
             </div>
        );
    }
}

export default NavTea;
