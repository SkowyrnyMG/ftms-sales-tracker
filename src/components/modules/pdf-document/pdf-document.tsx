import * as React from 'react';
import {
  Document,
  Page,
  Text,
  Font,
  View,
  StyleSheet,
} from '@react-pdf/renderer';
import { IDateOfSummary, IReportData } from 'types/types';
import { localFonts } from 'fonts/fonts';
import { useCurrentDate } from 'hooks/useCurrentDate';

Font.register({
  family: 'Lato',
  fonts: [
    {
      src: localFonts.lato.thin,
      fontStyle: 'normal',
      fontWeight: 100,
    },
    {
      src: localFonts.lato.regular,
      fontStyle: 'normal',
      fontWeight: 300,
    },
    {
      src: localFonts.lato.bold,
      fontStyle: 'normal',
      fontWeight: 900,
    },
  ],
});

// Create styles
const styles = StyleSheet.create({
  document: {
    height: '100vh',
  },
  page: {
    position: 'relative',
    padding: '15pt 10pt',
    flexDirection: 'column',
    fontFamily: 'Lato',
    fontSize: '15pt',
    lineHeight: 1.5,
    backgroundColor: '#fff',
  },
  section: {
    position: 'relative',
    margin: 10,
    padding: '0 10',
    // flexGrow: 1,
  },
  headingSection: {
    position: 'relative',
    margin: '10 10 -10 10',
    padding: '0 10',
  },
  sectionSmall: {
    position: 'relative',
    margin: 10,
    padding: '0 10',
    fontSize: '10pt',
    // flexGrow: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: '40pt',
    fontWeight: 900,
  },
  subtitle: {
    fontSize: '16pt',
    fontWeight: 900,
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  halfFlexContainer: {
    flexGrow: 1,
    flexShrink: 1,
    padding: '3pt',
    flexBasis: 50,
  },
  halfFlexContainerRight: {
    flexGrow: 1,
    padding: '3pt',
    flexBasis: 40,
    borderLeft: '1px solid black',
    borderBottom: '1px solid black',
  },
  halfFlexContainerLeft: {
    flexGrow: 1,
    padding: '3pt',
    flexBasis: 60,
    // borderRight: '1px solid black',
    borderBottom: '1px solid black',
  },
  centeredItem: {
    textAlign: 'center',
  },
  bordered: {
    border: '1px solid black',
  },
  borderBottomDotted: {
    borderBottom: '1px dotted black',
    padding: '3pt',
  },
});

interface IPDFDocumentProps {
  title: string;
  period: IDateOfSummary;
  data: IReportData[];
  comments?: string;
}
// Create Document Component
const PDFDocument: React.FC<IPDFDocumentProps> = ({
  title,
  period,
  data,
  comments = '---',
}) => {
  const currentDate = useCurrentDate();

  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.headingSection}>
          <Text style={styles.subtitle}>1. Dane ogólne</Text>
        </View>
        <View style={styles.section}>
          <View style={styles.bordered}>
            <View style={styles.borderBottomDotted}>
              <Text>Zakres raportu:</Text>
            </View>
            <View style={styles.flex}>
              <View style={styles.halfFlexContainer}>
                <Text>Rok: {period.year}</Text>
              </View>
              <View style={styles.halfFlexContainer}>
                <Text>Miesiąc/Miesiące: {period.period}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.headingSection}>
          <Text style={styles.subtitle}>2. Dane szczegółowe</Text>
        </View>
        <View style={styles.sectionSmall}>
          <View style={styles.bordered}>
            {data.map(({ name, value }) => (
              <View key={name} style={styles.flex}>
                <Text style={styles.halfFlexContainerLeft}>{name}</Text>
                <Text style={styles.halfFlexContainerRight}>{value}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.headingSection}>
          <Text style={styles.subtitle}>3. Uwagi</Text>
        </View>
        <View style={styles.sectionSmall}>
          <Text>{comments}</Text>
        </View>
        <View style={styles.sectionSmall}>
          <Text>Raport utworzony dnia: {currentDate}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFDocument;
