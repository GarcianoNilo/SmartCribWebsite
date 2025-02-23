import React from 'react';
import Navbar from '../components/Navbar';
import { Bar, Pie } from 'react-chartjs-2';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
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
import '../assets/css/DashboardPage.css';
import '../assets/css/shared.css';
import { RiFileDownloadLine } from 'react-icons/ri';

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

// Update the PDF styles to include table styling
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        padding: 30
    },
    section: {
        margin: 10,
        padding: 10,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center'
    },
    table: {
        display: 'table',
        width: 'auto',
        marginTop: 20,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#bfbfbf',
    },
    tableRow: {
        flexDirection: 'row',
    },
    tableHeader: {
        backgroundColor: '#f0f0f0',
        fontWeight: 'bold',
    },
    tableCell: {
        padding: 8,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#bfbfbf',
    },
    headerCell: {
        width: '25%',
        fontSize: 12,
        fontWeight: 'bold',
    },
    cell: {
        width: '25%',
        fontSize: 10,
    }
});

// Update the PDF Document component
const MyDocument = ({ data }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.title}>Device Report</Text>
                
                {/* Table Header */}
                <View style={[styles.tableRow, styles.tableHeader]}>
                    <Text style={[styles.tableCell, styles.headerCell]}>Serial Number</Text>
                    <Text style={[styles.tableCell, styles.headerCell]}>IMEI</Text>
                    <Text style={[styles.tableCell, styles.headerCell]}>Last Connection</Text>
                    <Text style={[styles.tableCell, styles.headerCell]}>Status</Text>
                </View>

                {/* Table Body */}
                {data.map((device, index) => (
                    <View style={styles.tableRow} key={index}>
                        <Text style={[styles.tableCell, styles.cell]}>{device.serialNumber}</Text>
                        <Text style={[styles.tableCell, styles.cell]}>{device.imei}</Text>
                        <Text style={[styles.tableCell, styles.cell]}>
                            {new Date(device.lastConnection).toLocaleString()}
                        </Text>
                        <Text style={[styles.tableCell, styles.cell]}>
                            {device.status.toUpperCase()}
                        </Text>
                    </View>
                ))}
            </View>
        </Page>
    </Document>
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

    const barChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top'
            }
        }
    };

    const pieChartOptions = {
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

    return (
        <div className="dashboard">
            <Navbar />
            <div className="dashboard-content">
                <div className="dashboard-header">
                    <h2>Dashboard Overview</h2>
                    <PDFDownloadLink
                        document={<MyDocument data={reportData} />}
                        fileName={`device_report_${new Date().toISOString().split('T')[0]}.pdf`}
                        className="generate-report-btn"
                        style={{ textDecoration: 'none' }}
                    >
                        {({ loading }) => (
                            <>
                                <RiFileDownloadLine style={{ marginRight: '8px' }} />
                                {loading ? 'Generating PDF...' : 'Generate Report'}
                            </>
                        )}
                    </PDFDownloadLink>
                </div>

                <div className="charts-grid">
                    <div className="chart-container bar-chart-container">
                        <div className="chart-header">
                            <h2>Weekly User Activity</h2>
                            <div className="chart-legend">
                                <div className="legend-item">
                                    <div className="legend-color user-activity-color"></div>
                                    <span className="legend-label">User Activity</span>
                                </div>
                            </div>
                        </div>
                        <div className="chart-wrapper">
                            <Bar data={barChartData} options={barChartOptions} />
                        </div>
                    </div>
                    
                    <div className="chart-container pie-chart-container">
                        <div className="chart-header">
                            <h2>User Status Distribution</h2>
                            <div className="chart-legend">
                                <div className="legend-item">
                                    <div className="legend-color active-color"></div>
                                    <span className="legend-label">Active</span>
                                </div>
                                <div className="legend-item">
                                    <div className="legend-color inactive-color"></div>
                                    <span className="legend-label">Inactive</span>
                                </div>
                            </div>
                        </div>
                        <div className="chart-wrapper">
                            <Pie data={pieChartData} options={pieChartOptions} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard; 