import BlogPage from "@/routes/blog";
import BlogDetailsPage from "@/routes/blog/details";
import ContactPage from "@/routes/contact";
import HomePage from "@/routes/home/home";
import Layout from "@/routes/layout";
import NotFoundPage from "@/routes/not-found";
import PortfolioPage from "@/routes/portfolio";
import PortfolioDetailsPage from "@/routes/portfolio/details";
import ResumePage from "@/routes/resume";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/resume",
        element: <ResumePage />,
      },
      {
        path: "/projects",
        element: <PortfolioPage />,
      },
      {
        path: "/projects/:projectId",
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
    ],
  },
]);

export default router;
