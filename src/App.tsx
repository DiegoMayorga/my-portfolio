import React from 'react';
import NavBar from './components/organisms/NavBar';
import Footer from './components/organisms/Footer';
import AppRoutes from './routes/routes';
import { BrowserRouter } from 'react-router-dom';
import './styles/app.scss'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
