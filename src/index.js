import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserProvider } from './Context/Browser-context';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserProvider>
        <App/>
     </BrowserProvider>
  </React.StrictMode>
);

reportWebVitals();
