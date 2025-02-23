import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import { useState, useEffect } from 'react';

// Define PDF styles
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
  text: {
    fontSize: 12,
    marginBottom: 10
  }
});

// Create PDF Document component
const MyDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Smart Crib Report</Text>
        <Text style={styles.text}>Date: {new Date().toLocaleDateString()}</Text>
        <Text style={styles.text}>Temperature: {data.temperature}°C</Text>
        <Text style={styles.text}>Humidity: {data.humidity}%</Text>
        <Text style={styles.text}>Sound Level: {data.soundLevel} dB</Text>
      </View>
    </Page>
  </Document>
);

function Dashboard() {
  const [sensorData, setSensorData] = useState({
    temperature: 0,
    humidity: 0,
    soundLevel: 0
  });

  // Remove any existing onClick handlers or Excel-related functions
  
  return (
    <div className="dashboard-container">
      {/* Your other dashboard content */}
      
      {/* Make sure there's only one report generation button */}
      <PDFDownloadLink
        document={<MyDocument data={sensorData} />}
        fileName="smart-crib-report.pdf"
        style={{
          backgroundColor: '#818cf8',
          padding: '10px 20px',
          borderRadius: '8px',
          color: 'white',
          textDecoration: 'none',
          cursor: 'pointer'
        }}
      >
        {({ loading }) => loading ? 'Generating PDF...' : 'Generate Report'}
      </PDFDownloadLink>
    </div>
  );
}

export default Dashboard; 