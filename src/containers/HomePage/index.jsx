import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Layout } from '../../layouts';
import { routes } from '../../utils';

import { fetchUsers } from './reducer';
import { usersSelector } from './selectors';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const users = useSelector(usersSelector());

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <Layout pageTitle={t('containers.home.title')}>
      <h1 className="font-bold mb-5">{t('containers.home.users')}</h1>
      <ul className="space-y-2">
        {users.map((e) => (
          <li key={e.id}>
            <Link to={routes.user(e.id)}>{e.name}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Home;
