import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export default class Lists extends Component {

    componentDidMount() {
        this.props.requestGetList();
    }

    render() {
        if (this.props.gettingList) {
            return (
                <div className="List">
                    <div className="Loading" />
                </div>
            );
        }
        return (
            <div>
                <ul className="List">
                    <li>list</li>
                </ul>
            </div>
        );
    }
}
