import React, { Component } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

class Baner extends Component {
    render() {
        return (
       
            <div className="baner" style={{ backgroundImage: 'url(./assets/img/baner.jpg)' }}>
                
            </div>
        );
    }
}

export default Baner;