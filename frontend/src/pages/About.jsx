import React from 'react';
import Navbar from '../components/Navbar';
import { RiShieldCheckLine, RiWifiLine } from 'react-icons/ri';
import '../assets/css/About.css';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div className="about-page">
            <Navbar />
            <div className="about-content">
                <div className="about-container">
                    <h1>About Smart Crib</h1>
                    
                    <div className="about-card">
                        <h2>Our Mission</h2>
                        <p>
                            Smart Crib is dedicated to revolutionizing infant care through innovative technology, 
                            providing parents with peace of mind and babies with the safest sleeping environment possible.
                        </p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card">
                            <RiShieldCheckLine className="feature-icon" />
                            <h3>Safety First</h3>
                            <p>
                                Advanced sensors monitor your baby's environment 24/7, 
                                ensuring optimal temperature, humidity, and air quality levels.
                            </p>
                        </div>

                        <div className="feature-card">
                            <RiWifiLine className="feature-icon" />
                            <h3>Always Connected</h3>
                            <p>
                                Stay connected to your baby's crib from anywhere with 
                                our reliable wireless connectivity and instant notifications.
                            </p>
                        </div>
                    </div>

                    <div className="contact-support">
                        <h2>Contact Support</h2>
                        <p>Need help? Our support team is available 24/7.</p>
                        <p>Email: support@smartcrib.com</p>
                        <p>Phone: 1-800-SMARTCRIB</p>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default About; 