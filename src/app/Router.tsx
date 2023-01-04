import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './home/Home';

export default createBrowserRouter([
  {
    path: '',
    element: <Home />,
  },
]);
