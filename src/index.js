import React from 'react';
import ReactDOM from 'react-dom/client';
import './_index.scss';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';

// import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

// import { Account } from './pages';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//   },
//   {
//     path: '/account',
//     element: <Account />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
