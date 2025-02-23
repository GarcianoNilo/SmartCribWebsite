import React from 'react';
import { Link } from 'react-router-dom';
import { RiHeartFill } from 'react-icons/ri';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../assets/css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Smart Crib</h4>
                    <p>Making parenting smarter and safer</p>
                </div>
                
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                        <li><Link to="/terms">Terms of Service</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact</h4>
                    <ul>
                        <li>Email: support@smartcrib.com</li>
                        <li>Phone: 1-800-SMARTCRIB</li>
                        <li>Address: 123 Smart Street</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>© 2024 Smart Crib. All rights reserved.</p>
                <p>Made with <RiHeartFill className="heart-icon" /> by Smart Crib Team</p>
            </div>
        </footer>
    );
};

export default Footer; 