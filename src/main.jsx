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
import RefundPolicy from './pages/refund-policy/RefundPolicy';
import TermsCondition from './pages/Terms-and-Condition/TermsCondition';
import AboutUs from './pages/about-us/AboutUs';
import EBook from './pages/E-book/EBook';

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
        path: '/privacy-policy',
        element: <PrivacyPolicy />
      },
      {
        path: '/refund-policy',
        element: <RefundPolicy />
      },
      {
        path: '/terms-and-conditions',
        element: <TermsCondition />
      },
      {
        path: '/about-us',
        element: <AboutUs />
      },
      {
        path: 'e-book',
        element: <EBook />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
