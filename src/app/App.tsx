import React from 'react';
import { Container } from 'react-bootstrap';
import { RouterProvider } from 'react-router-dom';
import { Navbar } from './navbar';
import router from './Router';

import './App.scss';

function App(): JSX.Element {
  return (
    <React.Fragment>
      <Navbar />
      <Container className="main-container">
        <RouterProvider router={router} />
      </Container>
    </React.Fragment>
  );
}

export default App;
