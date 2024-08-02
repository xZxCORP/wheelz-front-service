import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
//import { App } from './app';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './pages/error-page';
import Report from './routes/report';
import IdentifyPage from './pages/identify-page';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: 'identify',
    element: <IdentifyPage />
  },
  {
    path: 'report/:vim',
    element: <Report />
  }
])

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
)
