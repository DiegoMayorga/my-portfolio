import React from 'react';
import NavBar from './components/organisms/NavBar';
import AppRoutes from './routes/routes';
import { BrowserRouter } from 'react-router-dom';
import './styles/app.scss'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
