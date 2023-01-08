import React from 'react';

import './Hero.scss';

export function Hero(): JSX.Element {
  return (
    <div>
      <h1 className="hero-title text-primary text-xxxlarge">Welcome</h1>
      <p className="hero-subtitle text-large">
        {"Hello, I'm a Sydney based Software Engineer"}
      </p>
    </div>
  );
}
