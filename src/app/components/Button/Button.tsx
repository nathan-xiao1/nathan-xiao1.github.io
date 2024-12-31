import classnames from 'classnames';
import styles from './Button.module.scss';
import type React from 'react';

export function Button({
  variant = 'primary',
  outline = false,
  borderRadius = '2px',
  onClick,
  children,
}: {
  variant?: 'primary' | 'secondary';
  outline?: boolean;
  borderRadius?: string;
  onClick?: () => unknown;
  children?: React.ReactNode | React.ReactNode[];
}): JSX.Element {
  return (
    <button
      className={classnames(
        styles['button'],
        styles[`button${outline ? '-outline' : ''}-${variant}`],
        {
          [styles['button-outline']]: outline,
        }
      )}
      style={{ borderRadius: borderRadius }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
