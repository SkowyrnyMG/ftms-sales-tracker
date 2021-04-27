import * as React from 'react';
import { useDispatch } from 'react-redux';
import CSVReader, { IFileInfo } from 'react-csv-reader';
import { Link } from 'react-router-dom';

import type {
  IInvoiceCsvDataType,
  IParsedInvoiceCsvData,
  IPaymentsCsvDataType,
  IParsedPaymentsCsvData,
} from 'types/types';
import { invoicesParser, paymentsParser } from 'utils/parsers';
import { routes } from 'utils/routes';

interface ICSVLoaderProps {
  path: string;
  stateSetterFn: (
    parsedData: IParsedInvoiceCsvData[] | IParsedPaymentsCsvData[],
  ) => void;
}

const CSVLoader: React.FC<ICSVLoaderProps> = ({ path, stateSetterFn }) => {
  const dispatch = useDispatch();

  const [csvInfo, setCsvInfo] = React.useState<{
    name: string;
    size: number;
  }>();
  const [csvInvoiceData, setCsvInvoiceData] = React.useState<
    IInvoiceCsvDataType[]
  >();

  const [csvPaymentsData, setCsvPaymentsData] = React.useState<
    IPaymentsCsvDataType[]
  >();

  const BYTES_IN_KILOBYTE = 1024;

  const handleInvoiceSubmit = () => {
    if (csvInvoiceData) {
      const parsedData: IParsedInvoiceCsvData[] = invoicesParser(
        csvInvoiceData,
      );
      dispatch(stateSetterFn(parsedData));
    }
  };
  const handlePaymentsSubmit = () => {
    if (csvPaymentsData) {
      const parsedData: IParsedPaymentsCsvData[] = paymentsParser(
        csvPaymentsData,
      );
      dispatch(stateSetterFn(parsedData));
    }
  };

  const handleSubmitConditionaly = () => {
    if (path.includes(routes.invoices)) {
      handleInvoiceSubmit();
    }
    if (path.includes(routes.payments)) {
      handlePaymentsSubmit();
    }
  };

  // * The reason why I've disabled line below is because I can't type data conditionaly with pyaments and invoices
  const handleFileLoad = (data: any, fileInfo: IFileInfo) => { // eslint-disable-line
    setCsvInfo(fileInfo);
    if (path.includes(routes.invoices)) {
      setCsvInvoiceData(data);
    }
    if (path.includes(routes.payments)) {
      setCsvPaymentsData(data);
    }
  };
  return (
    <div className='box p-5'>
      <CSVReader
        onFileLoaded={(data, fileInfo) => {
          handleFileLoad(data, fileInfo);
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
            Rozmiar pliku: {(csvInfo.size / BYTES_IN_KILOBYTE).toFixed(2)}Kb
          </span>
          <Link
            to={path}
            className='button is-link  mx-5 is-small is-outlined'
            onClick={handleSubmitConditionaly}
          >
            Generuj raport
          </Link>
        </div>
      )}
    </div>
  );
};

export default CSVLoader;
