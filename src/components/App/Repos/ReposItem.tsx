import React, { FC } from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';
import { GoRepoForked, GoIssueOpened, GoEye } from 'react-icons/go';
import Badge from '../Badge/Badge';
import classNames from 'classnames';
import ReposContext from '../../../context';
import { types } from '../../../context/constants';

export interface IReposItem {
  id: number;
  name: string;
  url: string;
  stars: number;
  forks: number;
  issues: number;
  watchers: number;
  description: string;
  owner: {
    login: string;
    avatar: string;
  };
  languages: Array<{ name: string; color: string }>;
}

interface IReposItemProps {
  repo: IReposItem;
}

const ReposItem: FC<IReposItemProps> = ({ repo }) => {
  const {
    state: { favoriteRepos },
    dispatch,
  } = React.useContext(ReposContext);

  const isFavorite = favoriteRepos.some((item) => item.id === repo.id);

  const setRepoAsFavorite = () => {
    dispatch({
      type: types.SET_FAVORITE,
      payload: {
        id: repo.id,
        url: repo.url,
        name: repo.name,
        forks: repo.forks,
        stars: repo.stars,
        issues: repo.issues,
        login: repo.owner.login,
        watchers: repo.watchers,
        description: repo.description,
      },
    });
  };

  const languagesLength = repo.languages.length;
  const classes =
    'relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 border border-transparent py-4 text-sm font-medium text-slate-800';

  return (
    <li className='col-span-1 divide-y divide-slate-200 rounded-lg bg-white shadow font-satoshi'>
      <div className='flex w-full items-center justify-between space-x-6 p-6'>
        <div className='flex-1 truncate'>
          <div className='flex flex-col space-y-3'>
            <h3 className='truncate text-base font-medium text-slate-900'>
              {repo.name}
            </h3>
            <h2 className='truncate text-sm text-slate-700'>
              {repo?.description || 'No description'}
            </h2>
            <div className='flex items-center space-x-3'>
              {languagesLength > 0 ? (
                repo.languages.map((lang, index) => (
                  <Badge key={index} label={lang.name} />
                ))
              ) : (
                <Badge label='No Languages' />
              )}
            </div>
            <div className='flex items-center space-x-3'>
              <Badge label={repo.stars} color='yellow' Icon={AiFillStar} />
              <Badge label={repo.forks} color='teal' Icon={GoRepoForked} />
              <Badge label={repo.watchers} color='violet' Icon={GoEye} />
              <Badge label={repo.issues} color='rose' Icon={GoIssueOpened} />
            </div>
          </div>
        </div>
        <img
          src={repo.owner.avatar}
          alt={repo.owner.login}
          className='h-10 w-10 flex-shrink-0 rounded-full bg-slate-300'
        />
      </div>
      <div>
        <div className='-mt-px flex divide-x divide-slate-200'>
          <div className='flex w-0 flex-1'>
            <a
              href={repo.url}
              target='_blank'
              rel='noreferrer'
              className={classNames('-mr-px rounded-bl-lg', classes)}
            >
              <HiOutlineExternalLink className='h-5 w-5' />
              <span>View Repo</span>
            </a>
          </div>
          <div className='-ml-px flex w-0 flex-1'>
            <span
              role='button'
              onClick={setRepoAsFavorite}
              className={classNames('rounded-br-lg', classes)}
            >
              {isFavorite ? (
                <MdFavorite className='h-5 w-5' />
              ) : (
                <MdFavoriteBorder className='h-5 w-5' />
              )}
              <span>Favorite</span>
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ReposItem;
