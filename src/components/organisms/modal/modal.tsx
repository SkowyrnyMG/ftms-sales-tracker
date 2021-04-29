import * as React from 'react';

interface IModalProps {
  isModalOpen: boolean;
  toggleModal: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({
  isModalOpen,
  toggleModal,
  title,
  children,
}) => {
  const isActive = (): string => {
    const bulmaActiveClass = 'is-active';
    return isModalOpen ? bulmaActiveClass : '';
  };

  return (
    <div className={`modal ${isActive()}`}>
      <div className='modal-background' />
      <div className='modal-content is-huge container '>
        <header className='modal-card-head'>
          <p className='modal-card-title'>{title}</p>
          <button
            type='button'
            className='delete'
            aria-label='close'
            onClick={toggleModal}
          />
        </header>
        <div className='is-flex doc-container'>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
