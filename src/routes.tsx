import { BrowserRouter, Route, Routes } from 'react-router';

import DefaultLayout from '@/layouts/default';
import AboutPage from '@/pages/about';
import EducationPage from '@/pages/education';
import ExperiencePage from '@/pages/experience';
import NotFoundPage from '@/pages/not-found';
import PortfolioPage from '@/pages/portfolio';
import PortfolioDetailsPage from '@/pages/portfolio/_hash';
import SettingsPage from '@/pages/settings';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<AboutPage />} />
          <Route path='education' element={<EducationPage />} />
          <Route path='experience' element={<ExperiencePage />} />
          <Route path='portfolio'>
            <Route index element={<PortfolioPage />} />
            <Route path=':projectId' element={<PortfolioDetailsPage />} />
          </Route>
          <Route path='settings' element={<SettingsPage />} />
        </Route>

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
