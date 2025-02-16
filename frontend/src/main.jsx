import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/theme.css';
import './assets/css/index.css'; // Ensure this path is correct
import Login from './pages/Login';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
