import classNames from 'classnames';
import React, { FC } from 'react';
import { IconType } from 'react-icons';

interface IBadgeProps {
  label: string | number;
  Icon?: IconType;
  color?: 'slate' | 'rose' | 'violet' | 'teal' | 'yellow';
  className?: string;
}

const Badge: FC<IBadgeProps> = ({ label, Icon, color = 'slate' }) => {
  const COLORS: Record<string, string> = {
    slate: 'bg-slate-50 text-slate-700 ring-slate-600/20',
    rose: 'bg-rose-50 text-rose-700 ring-rose-600/20',
    violet: 'bg-violet-50 text-violet-700 ring-violet-600/20',
    teal: 'bg-teal-50 text-teal-700 ring-teal-600/20',
    yellow: 'bg-yellow-50 text-yellow-700 ring-yellow-600/20',
  };
  return (
    <span
      className={classNames(
        `inline-flex flex-shrink-0 items-center rounded-full px-1.5 py-0.5 text-xs font-satoshi font-medium ring-1 ring-inset`,
        COLORS[color]
      )}
    >
      {Icon && (
        <Icon className='-ml-1 mr-0.5 h-4 w-4 flex-shrink-0 self-center' />
      )}
      {label}
    </span>
  );
};

export default Badge;
