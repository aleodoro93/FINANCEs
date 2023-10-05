import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './pages/LandingPage.jsx';
import { GlobalStyle } from './styles/GlobalStyle.js';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <LandingPage />
   
  </React.StrictMode>
);
