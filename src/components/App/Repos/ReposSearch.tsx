import { LazyQueryExecFunction, OperationVariables } from '@apollo/client';
import React, { FC, useCallback } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import _ from 'lodash';

interface IReposSearchProps {
  onChange: LazyQueryExecFunction<any, OperationVariables>;
}

const ReposSearch: FC<IReposSearchProps> = ({ onChange }) => {
  const debouncedOnChange = useCallback(_.debounce(onChange, 1500), []);
  return (
    <>
      <div className='mx-auto w-full max-w-md'>
        <AiFillGithub className='mx-auto h-12 w-auto text-slate-800' />
        <h2 className='mt-6 text-center text-3xl font-bold font-cabinet leading-9 tracking-tight text-slate-800'>
          Search a repository on GitHub
        </h2>
      </div>
      <div className='mt-10 mx-auto w-full max-w-md'>
        <div className='relative rounded-full shadow-sm'>
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
            <HiMagnifyingGlass className='h-5 w-5 text-slate-500' />
          </div>
          <input
            type='text'
            name='search'
            placeholder='Search'
            onChange={(e) =>
              debouncedOnChange({ variables: { query: e.target.value } })
            }
            className='block w-full rounded-full border-slate-300 pr-4 pl-10 py-2.5 text-slate-900 text-sm leading-6 font-satoshi placeholder:text-slate-500 focus:outline-none focus:border-slate-600 focus:ring-4 focus:ring-slate-100 hover:ring-4 hover:ring-slate-100 hover:border-slate-300'
          />
        </div>
      </div>
    </>
  );
};

export default ReposSearch;
