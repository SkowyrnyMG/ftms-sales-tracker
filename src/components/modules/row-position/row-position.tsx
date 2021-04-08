import * as React from 'react';

interface IRowPositionProps {
  invoice: string;
  nett: number;
  gross: number;
}

const RowPositon: React.FC<IRowPositionProps> = ({ invoice, nett, gross }) => (
  <div className='columns'>
    <div className='column pl-5 '>{invoice}</div>
    <div className='column pl-5 '>{nett}</div>
    <div className='column pl-5 '>{gross}</div>
  </div>
);

export default RowPositon;
