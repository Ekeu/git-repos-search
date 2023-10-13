import React, { FC } from 'react';
import Container from '../components/App/Container/Container';
import ReposFav from '../components/App/Repos/ReposFav';

const Favorites: FC = () => {
  return (
    <Container>
      <ReposFav />
    </Container>
  );
};

export default Favorites;
