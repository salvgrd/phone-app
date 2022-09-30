import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { routes } from './router';
import { CounterProvider } from './store';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CounterProvider>
      <RouterProvider router={router} />
    </CounterProvider>
  </React.StrictMode>
);
