import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Bar, Pie } from 'react-chartjs-2';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import axios from 'axios';
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

// Define PDF styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        padding: 30,
        fontSize: 12,
    },
    header: {
        marginBottom: 20,
        textAlign: 'center',
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    table: {
        display: 'table',
        width: 'auto',
        marginTop: 20,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#bfbfbf',
        flexGrow: 1,
    },
    tableRow: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
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
        flexGrow: 1,
    },
    headerCell: {
        width: '25%',
        fontSize: 12,
        fontWeight: 'bold',
    },
    cell: {
        width: '25%',
        fontSize: 10,
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
    },
    footerTextLeft: {
        fontSize: 10,
    },
    footerTextRight: {
        fontSize: 10,
    },
});

// Update the PDF Document component
const MyDocument = ({ data }) => {
    const totalPages = Math.ceil(data.length / 20); // Adjust the number of rows per page as needed

    return (
        <Document>
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <Page size="A4" style={styles.page} key={pageIndex}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Smart Crib Device Connection Report</Text>
                    </View>

                    <View style={styles.section}>
                        <View style={[styles.tableRow, styles.tableHeader]}>
                            <Text style={[styles.tableCell, styles.headerCell]}>QRCode</Text>
                            <Text style={[styles.tableCell, styles.headerCell]}>Serial Number</Text>
                            <Text style={[styles.tableCell, styles.headerCell]}>IMEI</Text>
                            <Text style={[styles.tableCell, styles.headerCell]}>Created At</Text>
                        </View>

                        {data.slice(pageIndex * 20, (pageIndex + 1) * 20).map((device, index) => (
                            <View style={styles.tableRow} key={index} wrap={false}>
                                <Text style={[styles.tableCell, styles.cell]}>{device.QRCode}</Text>
                                <Text style={[styles.tableCell, styles.cell]}>{device.SerialNumber}</Text>
                                <Text style={[styles.tableCell, styles.cell]}>{device.IMEI}</Text>
                                <Text style={[styles.tableCell, styles.cell]}>
                                    {new Date(device.CreatedAt).toLocaleString()}
                                </Text>
                            </View>
                        ))}
                    </View>

                    <View style={styles.footer}>
                        <Text style={styles.footerTextLeft}>Smart Baby Crib</Text>
                        <Text style={styles.footerTextRight} render={({ pageNumber }) => `${pageNumber} / ${totalPages}`} />
                    </View>
                </Page>
            ))}
        </Document>
    );
};

const Dashboard = () => {
    const [devices, setDevices] = useState([]);
    const [barChartData, setBarChartData] = useState({
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
    });

    const fetchDevices = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/devices'); // Adjust the URL as needed
            setDevices(response.data);
        } catch (error) {
            console.error('Error fetching devices:', error);
        }
    };

    useEffect(() => {
        fetchDevices();
    }, []);

    return (
        <div className="dashboard">
            <Navbar />
            <div className="dashboard-content">
                <div className="dashboard-header">
                    <h2>Dashboard Overview</h2>
                    <PDFDownloadLink
                        document={<MyDocument data={devices} />}
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
                            <Bar data={barChartData} options={{ responsive: true, maintainAspectRatio: false }} />
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
                            <Pie data={{ labels: ['Active', 'Inactive'], datasets: [{ data: [65, 35], backgroundColor: ['#4CAF50', '#ff9800'], borderWidth: 0 }] }} options={{ responsive: true, maintainAspectRatio: false }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard; 