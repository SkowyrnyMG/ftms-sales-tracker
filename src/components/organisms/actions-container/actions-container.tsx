import * as React from 'react';

interface IActionsContainer {
  children: React.ReactNode;
}

const ActionsContainer: React.FC<IActionsContainer> = ({ children }) => {
  return (
    <div className='column has-border'>
      <div className='container'>{children}</div>
    </div>
  );
};

export default ActionsContainer;
