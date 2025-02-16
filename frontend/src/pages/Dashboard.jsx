import React from 'react';

const Dashboard = () => {
    const token = localStorage.getItem('token');

    return (
        <div className="dashboard-container">
            <h2>Dashboard</h2>
            {token ? (
                <p>Welcome! You are logged in.</p>
            ) : (
                <p>Please log in to access the dashboard.</p>
            )}
        </div>
    );
};

export default Dashboard; 