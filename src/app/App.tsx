import React from 'react';
import { Container } from 'react-bootstrap';
import { RouterProvider } from 'react-router-dom';
import router from './Router';

import './App.scss';

function App(): JSX.Element {
  return (
    <Container className="main-container">
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
