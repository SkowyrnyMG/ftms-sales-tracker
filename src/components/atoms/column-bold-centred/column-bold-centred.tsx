import * as React from 'react';

const ColumnBoldCentred: React.FunctionComponent<{ children?: number }> = ({
  children,
}) => (
  <div className='column has-text-centred has-text-weight-bold pl-5'>
    {typeof children === 'number' && children}
  </div>
);

export default ColumnBoldCentred;
