import * as React from 'react';

interface IProps {
  value: string | number;
}

const SelectOption: React.FC<IProps> = ({ value }) => (
  <option value={value}>{value}</option>
);

export default SelectOption;
