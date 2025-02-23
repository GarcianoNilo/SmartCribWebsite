import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { RiSearchLine, RiFilterLine } from 'react-icons/ri';
import '../assets/css/Dashboard.css';
import '../assets/css/List.css';

const List = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');

    // Sample data - replace with your actual data
    const [devices] = useState([
        {
            serialNumber: 'SCB001',
            imei: '354857095625801',
            lastConnection: '2024-03-20T14:25:00',
            status: 'active'
        },
        {
            serialNumber: 'SCB002',
            imei: '354857095625802',
            lastConnection: '2024-03-20T09:45:00',
            status: 'active'
        },
        {
            serialNumber: 'SCB003',
            imei: '354857095625803',
            lastConnection: null,
            status: 'inactive'
        },
        {
            serialNumber: 'SCB004',
            imei: '354857095625804',
            lastConnection: '2024-03-19T16:30:00',
            status: 'active'
        },
        {
            serialNumber: 'SCB005',
            imei: '354857095625805',
            lastConnection: '2024-03-18T13:15:00',
            status: 'inactive'
        }
    ]);

    // Filter and search logic
    const filteredDevices = devices.filter(device => {
        const matchesSearch = (
            device.serialNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
            device.imei.toLowerCase().includes(searchTerm.toLowerCase())
        );
        const matchesFilter = statusFilter === 'all' || device.status === statusFilter;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="dashboard">
            <Navbar />
            <div className="dashboard-content">
                <div className="list-header">
                    <h2>Device List</h2>
                    <div className="list-controls">
                        <div className="search-bar">
                            <RiSearchLine className="search-icon" />
                            <input
                                type="text"
                                placeholder="Search by Serial Number or IMEI"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="filter-dropdown">
                            <RiFilterLine className="filter-icon" />
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                            >
                                <option value="all">All Status</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="devices-grid">
                    {filteredDevices.map(device => (
                        <div key={device.serialNumber} className="device-card">
                            <div className="device-card-header">
                                <a href="#" className="serial-number">{device.serialNumber}</a>
                                <span className={`status-badge ${device.status}`}>
                                    {device.status}
                                </span>
                            </div>
                            <div className="device-info">
                                <div className="info-item">
                                    <span className="info-label">IMEI</span>
                                    <span className="info-value">{device.imei}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Last Connection</span>
                                    <span className="info-value">
                                        {device.lastConnection 
                                            ? new Date(device.lastConnection).toLocaleString() 
                                            : 'Never'
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default List; 