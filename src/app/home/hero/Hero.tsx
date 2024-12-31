import clsx from 'clsx';
import React from 'react';

import { getColliableClassName } from 'website-pets';
import './Hero.scss';

export function Hero(): JSX.Element {
  return (
    <div>
      <h1
        className={clsx(
          'hero-title',
          'text-primary',
          'text-xxlarge',
          getColliableClassName()
        )}
      >
        Welcome
      </h1>
      <p className={clsx('hero-subtitle', 'text-mid', getColliableClassName())}>
        {"Hello, I'm a Sydney-based Software Engineer"}
      </p>
    </div>
  );
}
