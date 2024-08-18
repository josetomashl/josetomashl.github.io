import BlogPage from "@/routes/blog";
import BlogDetailsPage from "@/routes/blog/details";
import ContactPage from "@/routes/contact";
import Layout from "@/routes/layout";
import NotFoundPage from "@/routes/not-found";
import PortfolioPage from "@/routes/portfolio";
import PortfolioDetailsPage from "@/routes/portfolio/details";
import ResumePage from "@/routes/resume";
import { createBrowserRouter, Navigate } from "react-router-dom";
import AboutPage from "./routes/about";
import SettingsPage from "./routes/settings";

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
