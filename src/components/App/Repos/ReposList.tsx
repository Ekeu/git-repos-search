import React, { FC } from 'react';
import Loader from '../Loader/Loader';
import ReposItem, { IReposItem } from './ReposItem';
import classNames from 'classnames';

interface IReposListProps {
  data: any;
  loading: boolean;
}

const ReposList: FC<IReposListProps> = ({ loading, data }) => {
  return (
    <div
      className={classNames(
        'mt-10 mx-auto w-full max-w-7xl',
        loading && 'flex justify-center'
      )}
    >
      {loading && <Loader />}
      {!loading && data && (
        <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {data.search.edges.map((repo: any) => {
            const repoItem: IReposItem = {
              url: repo.node.url,
              name: repo.node.name,
              id: repo.node.databaseId,
              owner: {
                login: repo.node.owner.login,
                avatar: repo.node.owner.avatarUrl,
              },
              forks: repo.node.forkCount,
              description: repo.node.description,
              issues: repo.node.issues.totalCount,
              stars: repo.node.stargazers.totalCount,
              watchers: repo.node.watchers.totalCount,
              languages: repo.node.languages.edges.map(
                (lang: { node: { name: string; color: string } }) => {
                  return {
                    name: lang.node.name,
                    color: lang.node.color,
                  };
                }
              ),
            };
            return <ReposItem key={repo.node.databaseId} repo={repoItem} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default ReposList;
