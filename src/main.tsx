import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from './pages/Error'
import IdentifyPage from './pages/Identify'
import Layout from './pages/layout/Layout'
import Root from './router/root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'identify',
    element: <IdentifyPage />,
  },
  {
    path: 'report/:vin',
    element: <Report />,
  },
])

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
)
