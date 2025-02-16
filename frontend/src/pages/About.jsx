import React from 'react';
import Navbar from '../components/Navbar';
import '../assets/css/Dashboard.css';

const About = () => {
    return (
        <div className="dashboard">
            <Navbar />
            <div className="dashboard-content">
                <div className="table-container">
                    <h2>About Smart Crib</h2>
                    <p>Smart Crib is an innovative solution for modern parenting...</p>
                    {/* Add your about content here */}
                </div>
            </div>
        </div>
    );
};

export default About; 