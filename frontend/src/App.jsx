import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import List from './pages/List';
import About from './pages/About';
import './assets/css/App.css';
import './assets/css/theme.css';
import './assets/css/shared.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/list" element={<List />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}

export default App;
