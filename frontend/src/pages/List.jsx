import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../assets/css/Dashboard.css';

const List = () => {
    // Dummy data for testing
    const [devices] = useState([
        {
            _id: '1',
            serialNumber: 'SCB001',
            imei: '354857095625801',
            lastConnection: '2024-03-20T14:25:00',
            status: 'active'
        },
        {
            _id: '2',
            serialNumber: 'SCB002',
            imei: '354857095625802',
            lastConnection: '2024-03-20T09:45:00',
            status: 'active'
        },
        {
            _id: '3',
            serialNumber: 'SCB003',
            imei: '354857095625803',
            lastConnection: null,
            status: 'inactive'
        },
        {
            _id: '4',
            serialNumber: 'SCB004',
            imei: '354857095625804',
            lastConnection: '2024-03-19T16:30:00',
            status: 'active'
        },
        {
            _id: '5',
            serialNumber: 'SCB005',
            imei: '354857095625805',
            lastConnection: '2024-03-18T13:15:00',
            status: 'inactive'
        }
    ]);

    return (
        <div className="dashboard">
            <Navbar />
            <div className="dashboard-content">
                <div className="table-container">
                    <h2>Device List</h2>
                    <table className="accounts-table">
                        <thead>
                            <tr>
                                <th>Serial Number</th>
                                <th>IMEI</th>
                                <th>Last Connection</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {devices.map((device) => (
                                <tr key={device._id}>
                                    <td>{device.serialNumber}</td>
                                    <td>{device.imei}</td>
                                    <td>
                                        {device.lastConnection 
                                            ? new Date(device.lastConnection).toLocaleString() 
                                            : 'Never'
                                        }
                                    </td>
                                    <td>
                                        <span className={`status ${device.status}`}>
                                            {device.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default List; 