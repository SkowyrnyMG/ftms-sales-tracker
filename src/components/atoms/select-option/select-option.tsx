import * as React from 'react';

interface IProps {
  name?: string;
  value: string | number;
}

const SelectOption: React.FC<IProps> = ({ value, name }) => (
  <option value={value}>{name ?? value}</option>
);

export default SelectOption;
