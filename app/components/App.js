import React, { Component } from 'react';
import { Link } from 'react-router';
import Navigation from './Navigation';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App__left">
                    <Navigation />
                </div>
                <div className="App__right">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
