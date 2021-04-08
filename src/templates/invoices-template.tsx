import * as React from 'react';

import type { IRowPositionProps } from 'types/types';

import ColumnHeadingBox from 'components/atoms/column-heading-box/column-heading-box';
import ColumnBoldCentred from 'components/atoms/column-bold-centred/column-bold-centred';
import RowPosition from 'components/modules/row-position/row-position';

interface IInvoicesTeplateProps {
  data: IRowPositionProps[];
}

const sumColumn = (
  columnValues: IRowPositionProps[],
  columnName: keyof IRowPositionProps,
): number =>
  columnValues.reduce((accu, curr) => {
    accu += Number(curr[columnName]); // eslint-disable-line no-param-reassign
    return accu;
  }, 0);

const InvoicesTemplate: React.FunctionComponent<IInvoicesTeplateProps> = ({
  data,
}) => {
  return (
    <div className='box'>
      <div className='columns'>
        <ColumnHeadingBox>Invoice number</ColumnHeadingBox>
        <ColumnHeadingBox>NET IN PLN</ColumnHeadingBox>
        <ColumnHeadingBox>GROSS IN PLN</ColumnHeadingBox>
      </div>
      {data?.map(({ invoice, nett, gross }) => (
        <RowPosition
          key={invoice}
          invoice={invoice}
          nett={nett}
          gross={gross}
        />
      ))}
      <div className='columns'>
        <ColumnBoldCentred />
        <ColumnBoldCentred>{sumColumn(data, 'nett')}</ColumnBoldCentred>
        <ColumnBoldCentred>{sumColumn(data, 'gross')}</ColumnBoldCentred>
      </div>
    </div>
  );
};

export default InvoicesTemplate;
