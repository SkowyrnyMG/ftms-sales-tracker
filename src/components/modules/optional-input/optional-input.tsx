import * as React from 'react';
import SelectOption from 'components/atoms/select-option/select-option';

import { IOptionalInput } from 'types/types';

const OptionalInput: React.FC<IOptionalInput> = ({
  inputValue,
  onValueChangeHandler,
  inputName,
  onNameChangeHandler,
  onDeleteHandler,
  countOption,
  handleChangeCountOption,
  inputID,
  placeholder,
}) => (
  <div className='columns'>
    <div className='column'>
      <input
        className='input is-info'
        type='text'
        placeholder='Wprowadź nazwę pola..'
        value={inputName}
        onChange={onNameChangeHandler}
      />
    </div>
    <div className='column'>
      <input
        className='input is-info'
        type='text'
        placeholder={placeholder}
        value={inputValue}
        onChange={onValueChangeHandler}
      />
    </div>

    <div className='column'>
      <div className='select is-link is-focused is-hovered is-fullwidth'>
        <select value={countOption} onChange={handleChangeCountOption}>
          <SelectOption value='toPay' name='Wszystkie' />
          <SelectOption value='leftToPay' name='Pozostało do zapłaty' />
          <SelectOption value='deductToPayAndLeftToPay' name='Zapłacone' />
        </select>
      </div>
    </div>
    <div className='column is-1 is-flex is-justify-content-flex-end'>
      <button
        id={`${inputID}`}
        type='button'
        className='button is-danger is-outlined ml-5'
        onClick={onDeleteHandler}
      >
        <span className='non-targetable'>Delete</span>
      </button>
    </div>
  </div>
);

export default OptionalInput;
