import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en, it } from './locales';
import { App } from './containers';
import store from './redux';

import './index.css';

const root = createRoot(document.getElementById('root'));

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: { translation: en },
    it: { translation: it },
  },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
