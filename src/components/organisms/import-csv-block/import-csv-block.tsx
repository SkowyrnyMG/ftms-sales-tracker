import * as React from 'react';

import { IExampleTable } from 'types/types';

interface IProps {
  title?: string;
  loaderComponent: React.ReactNode;
  tableSchema: IExampleTable[];
}

const ImportCSVBlock: React.FC<IProps> = ({
  title,
  loaderComponent,
  tableSchema,
}) => (
  <div className='container box mb-5 pb-5'>
    <article className='message is-link my-5 is-small'>
      <div className='message-body'>
        <h3 className='title is-size-3 has-text-link has-text-weight-bold mb-5'>
          {title}
        </h3>
        {/* {children} */}
        <p className='ml-1 mb-2'>
          Przygotuj plik CSV z danymi w kolejności, jak poniżej:
        </p>
        <table className='table is-bordered is-hoverable is-fullwidth'>
          <thead>
            <tr>
              <th>Pozycja kolumny</th>
              <th>Nazwa kolumny</th>
              <th>Przykładowe adane</th>
            </tr>
          </thead>
          <tbody>
            {tableSchema.map(({ pos, name, exampleData }) => (
              <tr key={name}>
                <th>{pos}</th>
                <td>{name}</td>
                <td>{exampleData}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className='ml-1'>
          Jeżeli Twój plik CSV jest przygotowany zgodnie z powyższym schematem
          zaimportuj go poniżej, żeby wytworzyć raport sprzedaży.
        </p>
      </div>
    </article>
    {loaderComponent}
  </div>
);

export default ImportCSVBlock;
