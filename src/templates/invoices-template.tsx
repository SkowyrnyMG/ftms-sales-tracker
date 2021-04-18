import * as React from 'react';
import type { IParsedCsvData } from 'types/types';
import { PDFViewer } from '@react-pdf/renderer';

import SelectOption from 'components/atoms/select-option/select-option';
import Hero from 'components/modules/hero/hero';
import ActionsContainer from 'components/organisms/actions-container/actions-container';
import Modal from 'components/organisms/modal/modal';
import ButtonLink from 'components/atoms/button-link/button-link';
import PDFDocument from 'components/modules/pdf-document/pdf-document';
import { invoicesReportSchema } from 'utils/reports-schemas';

interface IInvoicesTeplateProps {
  data: IParsedCsvData[];
}

interface IDateOfSummary {
  year: string | number;
  period: string;
}

const InvoicesTemplate: React.FC<IInvoicesTeplateProps> = ({ data }) => {
  const date = new Date();
  const [dateOfSummary, setDateOfSummary] = React.useState<IDateOfSummary>({
    year: date.getUTCFullYear(),
    period: '',
  });
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  const salesReportFieldsArr = invoicesReportSchema(data);

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <div className='container'>
      <Modal isModalOpen={isModalOpen} toggleModal={toggleModal}>
        <PDFViewer>
          <PDFDocument data={salesReportFieldsArr} />
        </PDFViewer>
      </Modal>
      <Hero
        title='Raport sprzedaży'
        subtitle='Podaj odpowiedni miesiąc i rok, aby wyświetlić poprawne dane na raporcie PDF.'
      />
      <div className='box'>
        <div className='columns'>
          <div className='column'>
            <input
              className='input is-info'
              type='text'
              placeholder='Wprowadź miesiąc, np. Styczeń'
              value={dateOfSummary.period}
              onChange={(e) =>
                setDateOfSummary((prevState) => ({
                  ...prevState,
                  period: e.target.value,
                }))
              }
            />
          </div>
          <div className='column'>
            <div className='select is-link is-focused is-hovered is-fullwidth'>
              <select
                value={dateOfSummary.year}
                onChange={(e) =>
                  setDateOfSummary((prevState) => ({
                    ...prevState,
                    year: e.target.value,
                  }))
                }
              >
                <SelectOption value={2021} />
                <SelectOption value={2020} />
                <SelectOption value={2019} />
                <SelectOption value={2018} />
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* -- End of input fields -- */}

      <div className='box is-size-5'>
        <div className='container my-3'>
          <h1 className='title is-2 has-text-centered has-text-weight-bold is-uppercase'>
            Podsumowanie
          </h1>
        </div>
        <div className='columns'>
          <div className='column is-four-fifths'>
            <div className='container my-3'>
              <span className='mr-2'>Miesiąc:</span>
              <span className='has-text-weight-bold'>
                {dateOfSummary.period}
              </span>
            </div>
            <div className='container my-3'>
              <span className='mr-2'>Rok:</span>
              <span className='has-text-weight-bold'>{dateOfSummary.year}</span>
            </div>
            {salesReportFieldsArr.map(({ name, value }) => (
              <div className='container my-3'>
                <span className='mr-2'>{name}</span>
                <span className='has-text-weight-bold'>{value}</span>
              </div>
            ))}
          </div>
          <ActionsContainer>
            {data.length > 0 && (
              <ButtonLink handleClick={toggleModal}>Exportuj PDF</ButtonLink>
            )}
          </ActionsContainer>
        </div>
      </div>
    </div>
  );
};

export default InvoicesTemplate;
