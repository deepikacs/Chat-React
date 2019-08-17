import React, { Component } from 'react';
import Chat from '../Chat';
import Search from '../Search';

class Dashboard extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-6"><Search/></div>
            <div className="col-sm-6 col-md-6 col-lg-6"> <Chat /></div>
               
            </div>
        );
    }
}

export default Dashboard;