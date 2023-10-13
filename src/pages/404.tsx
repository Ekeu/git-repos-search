import React, { FC } from 'react';
import Button from '../components/App/Button/Button';

const NotFound: FC = () => {
  return (
    <div className='grid min-h-full place-items-center bg-white px-8 py-24'>
      <div className='text-center'>
        <p className='tex-base font-semibold text-slate-600 font-cabinet'>
          404
        </p>
        <h1 className='mt-4 text-5xl font-bold tracking-tight text-slate-900 font-cabinet'>
          Page Not Found
        </h1>
        <p className='mt-6 text-base leading-7 text-slate-600'>
          This is not the web page you are looking for.
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <Button kind='primary'>Search</Button>
          <Button kind='secondary'>Favorites</Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
