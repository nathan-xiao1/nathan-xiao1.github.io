import React from 'react';
import { Education } from './education';
import { Hero } from './hero';
import './Home.scss';

function Home(): JSX.Element {
  return (
    <React.Fragment>
      <Hero />
      <Education />
    </React.Fragment>
  );
}

export default Home;
