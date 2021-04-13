import * as React from 'react';
import CSVReader from 'react-csv-reader';

type CsvDataType = [
  invoice: string,
  status: string,
  payer: string,
  saleDate: Date,
  issueDate: Date,
  dueDate: Date,
  nettValue: number,
  nettCurrency: string,
  taxValue: number,
  taxCurrency: string,
  grossValue: number,
  grossCurrency: string,
  nettInBranchCurrencyValue: number,
  nettInBranchCurrency: string,
  taxInBranchCurrencyValue: number,
  taxInBranchCurrency: string,
  grossInBranchCurrencyValue: number,
  grossInBranchCurrency: string,
];

const CSVLoader: React.FC = () => {
  const [csvInfo, setCsvInfo] = React.useState<{
    name: string;
    size: number;
  }>();
  const [csvData, setCsvData] = React.useState<CsvDataType[]>();
  const BYTES_IN_KILOBYTE = 1024;
  return (
    <div className='box p-5'>
      <CSVReader
        onFileLoaded={(data, fileInfo) => {
          setCsvInfo(fileInfo);
          setCsvData(data);
        }}
        label='Choose a file from your PC:  '
      />
      {csvInfo && (
        <div className='my-3 p-2'>
          <span className='has-text-weight-bold mr-5'>
            File name: {csvInfo.name}
          </span>
          <span className='has-text-weight-bold mx-5'>
            File size: {(csvInfo.size / BYTES_IN_KILOBYTE).toFixed(2)}Kb
          </span>
          <button
            type='button'
            className='button is-link  mx-5 is-small is-outlined'
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default CSVLoader;
