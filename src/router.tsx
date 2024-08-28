import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import EducationPage from "@/pages/education";
import ExperiencePage from "@/pages/experience";
import Layout from "@/pages/layout";
import NotFoundPage from "@/pages/not-found";
import PortfolioPage from "@/pages/portfolio";
import PortfolioDetailsPage from "@/pages/portfolio/details";
import SettingsPage from "@/pages/settings";
import { createBrowserRouter, Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Navigate to="/about" replace />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/experience",
        element: <ExperiencePage />,
      },
      {
        path: "/portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "/portfolio/:projectId",
        element: <PortfolioDetailsPage />,
      },
      {
        path: "/education",
        element: <EducationPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
    ],
  },
]);

export default router;
