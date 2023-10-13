import React, { FC } from 'react';

interface IContentProps {
  children: React.ReactNode;
}

const Content: FC<IContentProps> = ({ children }) => {
  return <main className='flex-auto'>{children}</main>;
};

export default Content;
