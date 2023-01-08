import React from 'react';
// TODO: Use createBrowserRouter when self-hosting
// import { createBrowserRouter as createRouter } from 'react-router-dom';
import { createHashRouter as createRouter } from 'react-router-dom';
import Home from './home/Home';

export default createRouter([
  {
    path: '',
    element: <Home />,
  },
]);
