import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { navigation } from './constants';

const Navbar: FC = () => {
  return (
    <header>
      <nav className='mx-auto max-w-7xl px-8 relative z-50 flex items-center justify-between py-8'>
        <div className='relative z-10 flex items-center gap-x-12'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className='text-sm font-bold font-cabinet leading-6 text-slate-700 transition-colors duration-150 hover:text-slate-900 hover:delay-0'
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
