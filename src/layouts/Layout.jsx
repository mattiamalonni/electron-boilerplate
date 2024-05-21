import React from 'react';
import { useSelector } from 'react-redux';

import { Navbar } from './../components';
import { loadingSelector } from './../containers/App/selectors';
import { useTranslation } from 'react-i18next';

const Layout = ({ pageTitle, ...props }) => {
  const { t } = useTranslation();
  const loading = useSelector(loadingSelector());

  return (
    <div className="font-roboto font-thin">
      <Navbar />
      <div className="px-5 py-4">
        <h1>{pageTitle}</h1>
        <hr className="my-5" />
        {loading ? <div className="text-center">... {t('loading')} ...</div> : props.children}
      </div>
    </div>
  );
};

export default Layout;
