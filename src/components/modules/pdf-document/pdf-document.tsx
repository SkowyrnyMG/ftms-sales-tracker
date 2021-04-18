import * as React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { IReportData } from 'types/types';
import { relative } from 'node:path';

// Create styles
const styles = StyleSheet.create({
  document: {
    height: '100vh',
  },
  page: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
  },
  section: {
    position: 'relative',
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

interface IPDFDocumentProps {
  data: IReportData[];
}
// Create Document Component
const PDFDocument: React.FC<IPDFDocumentProps> = ({ data }) => (
  <Document>
    <Page size='A4' style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>

      {data.map(({ name, value }) => (
        <View style={styles.section}>
          <Text>{name}</Text>
          <Text>{value}</Text>
        </View>
      ))}
    </Page>
  </Document>
);

export default PDFDocument;
