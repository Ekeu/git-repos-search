import React, { FC } from 'react';
import { IFavorite } from '../../../context/reducer';
import ReposFavItem from './ReposFavItem';

interface IReposFavListProps {
  repos: Array<IFavorite>;
}

const ReposFavList: FC<IReposFavListProps> = ({ repos }) => {
  return (
    <div className={'mt-10 mx-auto w-full max-w-5xl'}>
      <ul className='divide-y divi-slate-100'>
        {repos.map((repo) => (
          <ReposFavItem repo={repo} key={repo.id} />
        ))}
      </ul>
    </div>
  );
};

export default ReposFavList;
