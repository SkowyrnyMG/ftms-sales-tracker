import * as React from 'react';

interface IColumnHeadingBox {
  children: string;
}

const ColumnHeadingBox: React.FunctionComponent<IColumnHeadingBox> = ({
  children,
}) => (
  <div className='column has-text-centered has-shadow'>
    <div className='has-shadow box'>{children}</div>
  </div>
);

export default ColumnHeadingBox;
