import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import CustomContextMenu from './context/rightClickMenuContext';
import './main.scss';
import router from './router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
    <CustomContextMenu />
  </StrictMode>
);
