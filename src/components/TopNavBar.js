import React from 'react';
import logo from '../assets/images/nba-logoman-word-white.svg';

// need to export in order to be import by app.js

// This is the top header component of our web page
export class TopNavBar extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        );
    }
}