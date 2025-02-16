import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import '../assets/css/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/login', { email, password });
            localStorage.setItem('token', response.data.token);
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="login-page">
            <div className="login-left">
                <div className="login-content">
                    <h1>Welcome Back!</h1>
                    <p className="subtitle">Please enter your credentials to access your account</p>
                    
                    <form onSubmit={handleLogin} className="login-form">
                        {error && <div className="error-message">{error}</div>}
                        
                        <div className="form-field">
                            <div className="input-icon">
                                <MdEmail className="icon" />
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder=" "
                                    required
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>

                        <div className="form-field">
                            <div className="input-icon">
                                <RiLockPasswordLine className="icon" />
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder=" "
                                    required
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>

                        <button type="submit" className="login-button">
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
            <div className="login-right">
                <div className="brand-showcase">
                    <h2>Smart Crib</h2>
                    <p>Your baby's comfort is our priority</p>
                </div>
            </div>
        </div>
    );
};

export default Login; 