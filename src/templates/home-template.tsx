import * as React from 'react';
import { useDispatch } from 'react-redux';

import ImportCSVBlock from 'components/organisms/import-csv-block/import-csv-block';
import { importInvoicesSchema } from 'content/home';
import { setDefault } from 'store/slices/invoicesSlice';

const HomeTemplate: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setDefault());
  });
  return (
    <>
      <h1 className='title is-1 my-5 py-5 has-text-centered has-text-weight-bold'>
        Welcome into FIRETRACKER reprort module!
      </h1>
      <div className='box'>
        <ImportCSVBlock title='Invoice import CSV schema'>
          <p className='ml-1 mb-2'>
            Prepare your CSV in the order listed below:
          </p>
          <table className='table is-bordered is-hoverable is-fullwidth'>
            <thead>
              <tr>
                <th>Collumn positon</th>
                <th>Field Name</th>
                <th>Example data</th>
              </tr>
            </thead>
            <tbody>
              {importInvoicesSchema.map(({ pos, name, exampleData }) => (
                <tr key={name}>
                  <th>{pos}</th>
                  <td>{name}</td>
                  <td>{exampleData}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className='ml-1'>
            If your CSV is formated save it and import it below
          </p>
        </ImportCSVBlock>
      </div>
    </>
  );
};

export default HomeTemplate;
