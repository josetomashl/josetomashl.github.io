import { createBrowserRouter } from "react-router-dom";
import ContactPage from "./routes/contact";
import HomePage from "./routes/home/home";
import Layout from "./routes/layout";
import NotFoundPage from "./routes/not-found";
import ProjectsPage from "./routes/projects";
import ProjectDetailsPage from "./routes/projects/details";

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
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/projects/:projectId",
        element: <ProjectDetailsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
