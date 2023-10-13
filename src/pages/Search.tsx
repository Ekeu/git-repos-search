import React, { FC } from 'react';
import ReposList from '../components/App/Repos/ReposList';
import ReposSearch from '../components/App/Repos/ReposSearch';
import Container from '../components/App/Container/Container';
import { useLazyQuery } from '@apollo/client';
import { GET_GITHUB_REPOS } from '../apollo/queries';

const Search: FC = () => {
  const [getGitHubRepos, { loading, data }] = useLazyQuery(GET_GITHUB_REPOS);

  return (
    <Container>
      <ReposSearch onChange={getGitHubRepos} />
      <ReposList loading={loading} data={data} />
    </Container>
  );
};

export default Search;
