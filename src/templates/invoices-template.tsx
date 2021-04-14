import * as React from 'react';

import type { CsvDataType, IParsedCsvData } from 'types/types';

import ColumnHeadingBox from 'components/atoms/column-heading-box/column-heading-box';
import ColumnBoldCentred from 'components/atoms/column-bold-centred/column-bold-centred';
import RowPosition from 'components/modules/row-position/row-position';

interface IInvoicesTeplateProps {
  data: IParsedCsvData[];
}

const InvoicesTemplate: React.FC<IInvoicesTeplateProps> = ({ data }) => {
  console.log(data);

  const countPositions = <T extends unknown>(counterData: T): number => {
    if (counterData instanceof Array) {
      return counterData.length;
    }
    return 0;
  };

  const sumColumn = <T extends unknown>(
    counterData: T,
    columnName: string,
  ): number => {
    if (counterData instanceof Array) {
      return counterData.reduce((acc, cur) => {
        Object.keys(cur).forEach((key) => {
          if (key !== columnName) return;
          acc += Number(cur[columnName]); // eslint-disable-line no-param-reassign
        });
        return acc;
      }, 0);
    }
    return 0;
  };

  return (
    <div className='box'>
      <div className='columns'>
        <ColumnHeadingBox>Invoice number</ColumnHeadingBox>
        <ColumnHeadingBox>NET IN PLN</ColumnHeadingBox>
        <ColumnHeadingBox>GROSS IN PLN</ColumnHeadingBox>
      </div>
      <div className='container'>
        <span className='mr-2'>Number of invoices:</span>
        <span>{countPositions(data)}</span>
      </div>
      <div className='container'>
        <span className='mr-2'>Total invoices NETT in branch currency:</span>
        <span>{sumColumn(data, 'nettInBranchCurrencyValue')}</span>
      </div>
      <div className='columns'>
        <ColumnBoldCentred />
        {/* <ColumnBoldCentred>{sumColumn(data, 'nett')}</ColumnBoldCentred>
        <ColumnBoldCentred>{sumColumn(data, 'gross')}</ColumnBoldCentred> */}
      </div>
    </div>
  );
};

export default InvoicesTemplate;
