import * as React from 'react';
import LoaderInvoicesCsv from 'components/organisms/loader-invoices-csv/loader-invoices-csv';

interface IProps {
  title?: string;
  children: React.ReactNode;
}

const ImportCSVBlock: React.FC<IProps> = ({ title, children }) => (
  <div className='container'>
    <article className='message is-link my-5 is-small'>
      <div className='message-body'>
        <h3 className='title is-size-3 has-text-link has-text-weight-bold mb-5'>
          {title}
        </h3>
        {children}
      </div>
    </article>
    <LoaderInvoicesCsv />
  </div>
);

export default ImportCSVBlock;
