import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, Route, RouterProvider } from 'react-router-dom';

import ErrorPage from './error-page';
import ShowForm from './routes/add-show';
import Finder from './routes/finder';
import Home from './routes/home';
import Root from './routes/root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/finder',
        element: <Finder />,
      },
      {
        path: 'show-form',
        element: <ShowForm />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
