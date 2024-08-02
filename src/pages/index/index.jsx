import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import './normalize.css';
import Header from '../../Components/Header/Header';
import Main from '../../Components/Main/Main';
import Footer from '../../Components/Footer/Footer';
import About from '../../pages/about/About';
import { Services } from '../services/Services';
import { Portfolio } from '../portfolio/Portfolio';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/tp-final-2-react-utn/" element={<Main />} />
        <Route path="/tp-final-2-react-utn/about" element={<About />} />
        <Route path="/tp-final-2-react-utn/services" element={<Services />} />
        <Route path="/tp-final-2-react-utn/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
