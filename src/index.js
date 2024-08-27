import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Sass/style.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import UserLink from './Pages/userLink';
import Page2 from './Component/UserLink/Page2';
import Page3 from './Component/UserLink/Page3';
import Success from './Component/UserLink/Success';
import PrivacyPolicy from './Pages/Policy';
import Safety from './Pages/Safety';
import Blog from './Pages/Blog';
import Blog1 from './Pages/Blog1';
import Blog2 from './Pages/Blog2';
import Blog7 from './Pages/Blog7';
import Blog3 from './Pages/Blog3';
import Blog4 from './Pages/Blog4';
import Blog5 from './Pages/Blog5';
import Blog6 from './Pages/Blog6';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/:username',
    element: <UserLink />,
  },
  {
    path: '/:username/step2',
    element: <Page2 />,
  },
  {
    path: '/:username/step3',
    element: <Page3 />,
  },
  {
    path: '/:username/success',
    element: <Success />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />,
  },
  {
    path: '/safety',
    element: <Safety />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/blog/hidden-gems-tips-tricks-for-the-lol-app',
    element: <Blog1 />,
  },
  {
    path: '/blog/uplift-your-community',
    element: <Blog2 />,
  },
  {
    path: '/blog/announcing-new-features-and-user-controls',
    element: <Blog3 />,
  },
  {
    path: '/blog/lol-response-to-ftc-settlement',
    element: <Blog4 />,
  },
  {
    path: '/blog/staying-safe-on-lol',
    element: <Blog5 />,
  },
  {
    path: '/blog/guide-to-online-privacy',
    element: <Blog6 />,
  },
  {
    path: '/blog/lol-request-procedures',
    element: <Blog7 />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
