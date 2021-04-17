import * as React from 'react';
import { useDispatch } from 'react-redux';
import CSVReader from 'react-csv-reader';
import { Link } from 'react-router-dom';

import type { CsvDataType, IParsedCsvData } from 'types/types';
import { setInvoices } from 'store/slices/invoicesSlice';
import { invoicesParser } from 'utils/parsers';

const CSVLoader: React.FC = () => {
  const dispatch = useDispatch();

  const [csvInfo, setCsvInfo] = React.useState<{
    name: string;
    size: number;
  }>();
  const [csvData, setCsvData] = React.useState<CsvDataType[]>();

  const BYTES_IN_KILOBYTE = 1024;

  const handleSubmit = () => {
    if (csvData) {
      const parsedData: IParsedCsvData[] = invoicesParser(csvData);
      dispatch(setInvoices(parsedData));
    }
  };
  return (
    <div className='box p-5'>
      <CSVReader
        onFileLoaded={(data, fileInfo) => {
          setCsvInfo(fileInfo);
          setCsvData(data);
        }}
        parserOptions={{ skipEmptyLines: true }}
        label='Wybierz plik CSV z Twojego komputera:  '
      />
      {csvInfo && (
        <div className='my-3 p-2'>
          <span className='has-text-weight-bold mr-5'>
            Nazwa pliku: {csvInfo.name}
          </span>
          <span className='has-text-weight-bold mx-5'>
            Rozmiar pliku:
            {(csvInfo.size / BYTES_IN_KILOBYTE).toFixed(2)}Kb
          </span>
          <Link
            to='/invoices'
            className='button is-link  mx-5 is-small is-outlined'
            onClick={handleSubmit}
          >
            Generuj raport
          </Link>
        </div>
      )}
    </div>
  );
};

export default CSVLoader;
