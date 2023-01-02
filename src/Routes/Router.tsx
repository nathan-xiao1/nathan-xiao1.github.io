import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App/App';
import HomeComponent from '../Home/Home';

export default createBrowserRouter([
  {
    path: '',
    element: <App />,
  },
  {
    path: 'home',
    element: <HomeComponent />,
  },
]);
