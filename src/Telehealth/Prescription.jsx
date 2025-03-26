import React from 'react';
import { jsPDF } from 'jspdf';

function Prescription() {
  const doctorName = "Dr. John Doe"; // Example, replace with actual data
  const patientName = "John Smith"; // Example, replace with actual data

  const tablets = [
    { name: "Tablet A", dosage: "1 tablet", instructions: "Take after meals" },
    { name: "Tablet B", dosage: "2 tablets", instructions: "Take in the morning" },
  ];

  const dietInstructions = [
    "Eat a balanced diet with plenty of fruits and vegetables.",
    "Avoid fatty foods and processed sugar.",
    "Drink at least 2 liters of water daily.",
  ];

  // Function to generate and download the prescription as PDF
  const generatePDF = () => {
    const doc = new jsPDF();

    // Add doctor and patient details
    doc.setFontSize(18);
    doc.text(`Prescription`, 20, 20);
    doc.setFontSize(14);
    doc.text(`Doctor: ${doctorName}`, 20, 30);
    doc.text(`Patient: ${patientName}`, 20, 40);

    // Add Tablets section
    doc.setFontSize(16);
    doc.text("Tablets:", 20, 50);
    let yPosition = 60;
    tablets.forEach((tablet) => {
      doc.setFontSize(12);
      doc.text(`${tablet.name} - ${tablet.dosage}`, 20, yPosition);
      doc.text(`Instructions: ${tablet.instructions}`, 20, yPosition + 10);
      yPosition += 20;
    });

    // Add Diet Instructions section
    doc.setFontSize(16);
    doc.text("Diet Instructions:", 20, yPosition + 10);
    yPosition += 20;
    dietInstructions.forEach((instruction) => {
      doc.setFontSize(12);
      doc.text(`• ${instruction}`, 20, yPosition);
      yPosition += 10;
    });

    // Save the document as a PDF
    doc.save("prescription.pdf");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Prescription</h2>
      <div style={styles.prescriptionDetails}>
        <h3 style={styles.subHeader}>Doctor: {doctorName}</h3>
        <h3 style={styles.subHeader}>Patient: {patientName}</h3>

        <div style={styles.section}>
          <h4 style={styles.sectionHeader}>Tablets:</h4>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Dosage</th>
                <th>Instructions</th>
              </tr>
            </thead>
            <tbody>
              {tablets.map((tablet, index) => (
                <tr key={index}>
                  <td>{tablet.name}</td>
                  <td>{tablet.dosage}</td>
                  <td>{tablet.instructions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={styles.section}>
          <h4 style={styles.sectionHeader}>Diet Instructions:</h4>
          <ul>
            {dietInstructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </div>
      </div>

      <button onClick={generatePDF} style={styles.downloadButton}>
        Download Prescription
      </button>
    <div> 
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSehWRQ5j75oAOYSNfHEDPMxrafTOflZY2IrSDX0e2LxCkyf6Q/viewform"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.googleFormLink}
      >
        Fill Feedback Form
      </a>
      </div>
    </div>
  );
}

// Styles
const styles = {
  container: {
    padding: '40px',
    backgroundColor: 'lightgrey',
    borderRadius: '8px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: '40px auto',
  },
  header: {
    textAlign: 'center',
    color: '#333',
    fontSize: '2.2rem',
    marginBottom: '30px',
  },
  prescriptionDetails: {
    marginBottom: '30px',
    marginTop: '20px',
  },
  subHeader: {
    fontSize: '20px',
    margin: '15px 0',
  },
  section: {
    marginBottom: '30px',
  },
  sectionHeader: {
    fontSize: '18px',
    marginBottom: '15px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHeader: {
    backgroundColor: '#f2f2f2',
    padding: '12px',
  },
  tableCell: {
    padding: '12px',
    border: '1px solid #ddd',
  },
  downloadButton: {
    padding: '12px 24px',
    fontSize: '18px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '30px',
  },
  googleFormLink: {
    display: 'inline-block',
    marginTop: '10px',
    fontSize: '16px',
    color: '#007bff',
    textDecoration: 'none',
    padding: '12px 24px',
    backgroundColor: '#f8f9fa',
    border: '1px solid #007bff',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
  },
};

export default Prescription;
