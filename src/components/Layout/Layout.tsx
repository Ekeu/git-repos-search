import React, { FC } from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Content from './Content/Content';
import Search from '../../pages/Search';
import Favorites from '../../pages/Favorites';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../../pages/404';

const Layout: FC = () => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />
      <Content>
        <Routes>
          <Route path='/' element={<Search />} />
          <Route path='favorites' element={<Favorites />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Content>
      <Footer />
    </div>
  );
};

export default Layout;
