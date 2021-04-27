import * as React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import uniqid from 'uniqid';

import {
  IDateOfSummary,
  IParsedPaymentsCsvData,
  IOptionalInput,
} from 'types/types';
import {
  paymentsReportAdditionalFieldsSchema,
  paymentsReportSchema,
} from 'utils/reports-schemas';

import ButtonLink from 'components/atoms/button-link/button-link';
import SelectOption from 'components/atoms/select-option/select-option';
import Hero from 'components/modules/hero/hero';
import PDFDocument from 'components/modules/pdf-document/pdf-document';
import ActionsContainer from 'components/organisms/actions-container/actions-container';
import Modal from 'components/organisms/modal/modal';
import OptionalInput from 'components/modules/optional-input/optional-input';

interface IPaymentsTemplateProps {
  data: IParsedPaymentsCsvData[];
}

const PaymentsTemplate: React.FC<IPaymentsTemplateProps> = ({ data }) => {
  const date = new Date();
  const [dateOfSummary, setDateOfSummary] = React.useState<IDateOfSummary>({
    year: date.getUTCFullYear(),
    period: '',
  });
  const [comments, setComments] = React.useState<string>();
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [additionalInputs, setAdditionalInputs] = React.useState<
    IOptionalInput[]
  >([]);

  const paymentReportFieldsArr = paymentsReportSchema(data);
  const additionalPaymentReportFieldsArr = paymentsReportAdditionalFieldsSchema(
    data,
    additionalInputs,
  );

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const handleAddNewInput = () => {
    const inputID = uniqid();
    const defaultInputValue = {
      inputValue: ``,
      inputName: ``,
      countOption: `toPay`,
      inputID,
    };
    setAdditionalInputs((prevState) => [...prevState, defaultInputValue]);
  };

  return (
    <div className='container'>
      <Modal isModalOpen={isModalOpen} toggleModal={toggleModal}>
        {isModalOpen && (
          <PDFViewer>
            <PDFDocument
              title='Raport płatności'
              period={dateOfSummary}
              data={paymentReportFieldsArr.concat(
                additionalPaymentReportFieldsArr,
              )}
              comments={comments}
            />
          </PDFViewer>
        )}
      </Modal>
      <Hero
        title='Raport płatności'
        subtitle='Podaj odpowiedni miesiąc i rok, aby wyświetlić poprawne dane na raporcie PDF. Możesz dodać dodatkowe pozycje raportu dodając kolejne filtry otagowancyh pozycji'
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
        <div className='columns'>
          <div className='column is-full-width'>
            <textarea
              className='textarea is-info'
              placeholder='Uwagi...'
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
          </div>
        </div>

        {additionalInputs.length > 0 &&
          additionalInputs.map(
            ({ inputValue, inputName, inputID, countOption }, index) => (
              <OptionalInput
                key={inputID}
                inputValue={inputValue}
                inputName={inputName}
                countOption={countOption}
                inputID={inputID}
                placeholder='Wprowadź dodatkową wartość filtrowania w #TAGACH'
                onValueChangeHandler={(e) =>
                  setAdditionalInputs((prevState) => {
                    const updatedArr = prevState.slice();
                    updatedArr[index].inputValue = e.target.value;
                    return updatedArr;
                  })
                }
                onNameChangeHandler={(e) =>
                  setAdditionalInputs((prevState) => {
                    const updatedArr = prevState.slice();
                    updatedArr[index].inputName = e.target.value;
                    return updatedArr;
                  })
                }
                handleChangeCountOption={(e) =>
                  setAdditionalInputs((prevState) => {
                    const updatedArr = prevState.slice();
                    updatedArr[index].countOption = e.target.value;
                    return updatedArr;
                  })
                }
                onDeleteHandler={(e) =>
                  setAdditionalInputs((prevState) =>
                    prevState
                      .slice()
                      .filter(
                        (input) =>
                          input.inputID !== (e.target as HTMLButtonElement).id,
                      ),
                  )
                }
              />
            ),
          )}

        <button
          type='button'
          className='button is-primary'
          onClick={handleAddNewInput}
        >
          Dodaj wartość do raportu
        </button>
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
            {paymentReportFieldsArr.map(({ name, value }) => (
              <div key={name} className='container my-3'>
                <span className='mr-2'>{name}</span>
                <span className='has-text-weight-bold'>{value}</span>
              </div>
            ))}

            {additionalInputs.length > 0 &&
              additionalPaymentReportFieldsArr.map(
                ({ name, value }) =>
                  name && (
                    <div key={name} className='container my-3'>
                      <span className='mr-2'>{name}: </span>
                      <span className='has-text-weight-bold'>{value}</span>
                    </div>
                  ),
              )}

            <div className='container my-3'>
              <span className='mr-2'>Uwagi:</span>
              <span className='has-text-weight-bold'>{comments}</span>
            </div>
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

export default PaymentsTemplate;
