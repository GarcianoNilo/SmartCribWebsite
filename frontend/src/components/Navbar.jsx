import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { RiDashboardLine, RiListUnordered, RiInformationLine, RiLogoutBoxLine } from 'react-icons/ri';
import '../assets/css/Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h1>Smart Crib</h1>
            </div>
            <div className="nav-links">
                <NavLink to="/dashboard" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    <RiDashboardLine />
                    <span>Dashboard</span>
                </NavLink>
                <NavLink to="/list" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    <RiListUnordered />
                    <span>Devices</span>
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    <RiInformationLine />
                    <span>About</span>
                </NavLink>
            </div>
            <button className="logout-btn" onClick={handleLogout}>
                <RiLogoutBoxLine />
                <span>Logout</span>
            </button>
        </nav>
    );
};

export default Navbar; 