import React, { FC } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { GoRepoForked, GoIssueOpened, GoEye } from 'react-icons/go';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IFavorite } from '../../../context/reducer';
import Badge from '../Badge/Badge';
import Rating from '../Rating/Rating';
import ReposContext from '../../../context';
import { types } from '../../../context/constants';

interface IReposFavItemProps {
  repo: IFavorite;
}

const ReposFavItem: FC<IReposFavItemProps> = ({ repo }) => {
  const { dispatch } = React.useContext(ReposContext);

  const removeRepoFromFav = () => {
    dispatch({
      type: types.DELETE_FAVORITE,
      payload: {
        id: repo.id,
      },
    });
  };

  return (
    <li className='flex items-center justify-between gap-x-6 py-5 font-satoshi'>
      <div className='min-w-0'>
        <div className='flex items-start gap-x-3'>
          <p className='text-sm font-medium leading-6 text-slate-800'>
            {repo.name}
          </p>
          <Badge label={repo.login} />
        </div>
        <div className='mt-2.5 flex items-center gap-x-2 text-xs leading-5 text-slate-600'>
          <p className='truncate'>{repo?.description || 'No description'}</p>
        </div>
      </div>
      <div className='flex shrink-0 items-center gap-x-6'>
        <div className='flex flex-col items-end'>
          <Rating rating={repo.rating} id={repo.id} />
          <div className='mt-2.5 flex items-center gap-x-2'>
            <Badge label={repo.stars} color='yellow' Icon={AiFillStar} />
            <Badge label={repo.forks} color='teal' Icon={GoRepoForked} />
            <Badge label={repo.watchers} color='violet' Icon={GoEye} />
            <Badge label={repo.issues} color='rose' Icon={GoIssueOpened} />
          </div>
        </div>
        <span
          role='button'
          onClick={removeRepoFromFav}
          className='-m-2.5 block p-2.5 text-slate-600 hover:text-slate-800'
        >
          <RiDeleteBin6Line className='h-5 w-5' />
        </span>
      </div>
    </li>
  );
};

export default ReposFavItem;
