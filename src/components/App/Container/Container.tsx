import React, { FC } from 'react';

interface IContainerProps {
  children: React.ReactNode;
}

const Container: FC<IContainerProps> = ({ children }) => {
  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12'>
      {children}
    </div>
  );
};

export default Container;
