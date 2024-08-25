import AboutPage from "@/pages/about";
import BlogPage from "@/pages/blog";
import BlogDetailsPage from "@/pages/blog/details";
import ContactPage from "@/pages/contact";
import Layout from "@/pages/layout";
import NotFoundPage from "@/pages/not-found";
import PortfolioPage from "@/pages/portfolio";
import PortfolioDetailsPage from "@/pages/portfolio/details";
import ResumePage from "@/pages/resume";
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
        path: "/resume",
        element: <ResumePage />,
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
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/blog/:blogId",
        element: <BlogDetailsPage />,
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
