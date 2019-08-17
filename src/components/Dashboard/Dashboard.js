import React, { Component } from 'react';
import Chat from '../Chat';
import Search from '../Search';
import './Dashboard.css';

class Dashboard extends Component {
    render() {
        return (
            <div className="row dasboard-align">
            <div className="col-sm-4 col-md-4 col-lg-4 bg-color-gray pt-3"><Search/></div>
            <div className="col-sm-8 col-md-8 col-lg-8 pt-3 pad-150"> <Chat /></div>
               
            </div>
        );
    }
}

export default Dashboard;