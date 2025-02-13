import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layouts/Root';
import Home from './pages/home/Home';
import Course from './pages/courses/Course';
import FreeCourse from './pages/free-course/FreeCourse';
import PrivacyPolicy from './pages/privacy-policy/PrivacyPolicy';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/course',
        element: <Course />
      },
      {
        path: '/free-course',
        element: <FreeCourse />
      },
      {
        path : '/privacy-policy',
        element : <PrivacyPolicy />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
