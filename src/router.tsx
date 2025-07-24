import { createBrowserRouter, Navigate } from 'react-router';

import DefaultLayout from '@/layouts/default';
import AboutPage from '@/pages/about';
import ContactPage from '@/pages/contact';
import EducationPage from '@/pages/education';
import ExperiencePage from '@/pages/experience';
import NotFoundPage from '@/pages/not-found';
import PortfolioPage from '@/pages/portfolio';
import PortfolioDetailsPage from '@/pages/portfolio/details';
import SettingsPage from '@/pages/settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <Navigate to='/about' replace />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/experience',
        element: <ExperiencePage />,
      },
      {
        path: '/portfolio',
        element: <PortfolioPage />,
      },
      {
        path: '/portfolio/:projectId',
        element: <PortfolioDetailsPage />,
      },
      {
        path: '/education',
        element: <EducationPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/settings',
        element: <SettingsPage />,
      },
    ],
  },
]);

export default router;
