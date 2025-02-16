import React from 'react';
import logo from '../assets/img/logo.png';

const Logo = () => {
    return (
        <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
        </div>
    );
};

export default Logo; 