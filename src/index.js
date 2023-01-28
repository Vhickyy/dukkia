import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { DukiaContextProvider } from './context/DukiaContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DukiaContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DukiaContextProvider>
  </React.StrictMode>
);
