import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './main.scss';
import AppRoutes from './routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
);
