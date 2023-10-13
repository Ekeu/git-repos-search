import classNames from 'classnames';
import React, { ComponentProps, FC } from 'react';

interface IButtonProps extends ComponentProps<'button'> {
  kind?: 'primary' | 'secondary';
}

const Button: FC<IButtonProps> = ({
  kind = 'primary',
  type = 'button',
  children,
}) => {
  return (
    <button
      type={type}
      className={classNames(
        'rounded px-3 py-2 text-sm font-medium shadow-sm focus-visible:outline-none',
        kind === 'primary' && 'bg-slate-800 text-white hover:bg-slate-700',
        kind === 'secondary' &&
          'bg-white text-slate-800 ring-1 ring-inset ring-slate-400 hover:bg-slate-100'
      )}
    >
      {children}
    </button>
  );
};

export default Button;
