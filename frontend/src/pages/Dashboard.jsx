import React from 'react';
import Navbar from '../components/Navbar';
import { Bar, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import * as XLSX from 'xlsx';
import '../assets/css/Dashboard.css';

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const Dashboard = () => {
    const barChartData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'User Activity',
                data: [12, 19, 3, 5, 2, 3, 9],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                    '#FF9F40',
                    '#7CBA3B'
                ]
            }
        ]
    };

    const pieChartData = {
        labels: ['Active', 'Inactive'],
        datasets: [
            {
                data: [65, 35],
                backgroundColor: ['#4CAF50', '#ff9800'],
                borderWidth: 0
            }
        ]
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top'
            }
        }
    };

    // Sample data for the report
    const reportData = [
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
        // ... more data
    ];

    const generateReport = () => {
        // Create workbook and worksheet
        const workbook = XLSX.utils.book_new();
        
        // Format the data for Excel
        const formattedData = reportData.map(item => ({
            'Serial Number': item.serialNumber,
            'IMEI': item.imei,
            'Last Connection': new Date(item.lastConnection).toLocaleString(),
            'Status': item.status.toUpperCase()
        }));

        // Convert data to worksheet
        const worksheet = XLSX.utils.json_to_sheet(formattedData);

        // Add worksheet to workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Device Report');

        // Generate Excel file
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        
        // Save to file
        const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        
        // Create download link
        const url = window.URL.createObjectURL(data);
        const link = document.createElement('a');
        link.href = url;
        link.download = `device_report_${new Date().toISOString().split('T')[0]}.xlsx`;
        
        // Trigger download
        document.body.appendChild(link);
        link.click();
        
        // Cleanup
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    };

    return (
        <div className="dashboard">
            <Navbar />
            <div className="dashboard-content">
                <div className="dashboard-header">
                    <h2>Dashboard Overview</h2>
                    <button className="generate-report-btn" onClick={generateReport}>
                        Generate Report
                    </button>
                </div>

                <div className="charts-grid">
                    <div className="chart-container">
                        <h2>Weekly User Activity</h2>
                        <div className="chart-wrapper">
                            <Bar data={barChartData} options={chartOptions} />
                        </div>
                    </div>
                    
                    <div className="chart-container">
                        <h2>User Status Distribution</h2>
                        <div className="chart-wrapper">
                            <Pie data={pieChartData} options={chartOptions} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard; 