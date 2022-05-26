import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'app/App';
import AppProviders from 'providers/AppProviders';

import 'ui/assets/styles/theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>
);
