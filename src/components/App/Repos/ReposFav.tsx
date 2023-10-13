import React, { FC } from 'react';
import { MdFavorite } from 'react-icons/md';

import ReposContext from '../../../context';
import ReposFavList from './ReposFavList';

const ReposFav: FC = () => {
  const {
    state: { favoriteRepos },
  } = React.useContext(ReposContext);
  const hasFavRepos = favoriteRepos.length > 0;
  return (
    <>
      <div className='px-6 py-10'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-4xl font-cabinet font-bold tracking-tight leading-7 text-slate-800'>
            Favorites
          </h2>
          <p className='mt-4 font-satoshi text-lg leading-8 text-slate-600'>
            Below is the list of all your favorite repositories.
          </p>
        </div>
      </div>
      {hasFavRepos ? (
        <ReposFavList repos={favoriteRepos} />
      ) : (
        <div className='mt-4 flex justify-center'>
          <div className='text-center'>
            <MdFavorite className='mx-auto mb-4 h-6 w-6 text-slate-300' />
            <p className='text-sm font-satoshi text-slate-400'>
              You don't have any favorite repository yet
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ReposFav;
