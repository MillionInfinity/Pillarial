import React, { Component } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import './Filter.css';

class CollapseExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            toggle: true
        };
        this.eventHandler = this.eventHandler.bind(this);
    }

    // toggle() {
    //     this.setState({ collapse: !this.state.collapse });
    // }

    eventHandler(event) {
        this.setState((prevState) => ({
            toggle: !prevState.toggle,
            collapse: !this.state.collapse
        })
        );
    }

    render() {
        return (
            <div>
                <div className="filterBtn" onClick={this.toggle} style={{ marginBottom: '1rem' }}>
                    <div className="add">
                        <div>{this.props.title}</div>
                        <button onClick={this.eventHandler} className="button mr-3">{this.state.toggle ? '+' : '-'}</button>
                    </div>
                </div>
                <Collapse isOpen={this.state.collapse}>
                    <div>{this.props.form}</div>
                </Collapse>
            </div>
        );
    }
}

export default CollapseExample;