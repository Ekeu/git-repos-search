import { FC } from 'react';

const Footer: FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='relative border-t border-slate-900/10 py-6'>
      <div className='mx-auto max-w-7xl px-8'>
        <p className='text-center text-xs font-satoshi leading-5 text-slate-500'>
          &copy; {year} Github Technical Exercise.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
