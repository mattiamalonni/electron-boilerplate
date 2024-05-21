import { unstable_HistoryRouter as HistoryRouter, Navigate, Route, Routes } from 'react-router-dom';

import { HomePage } from '../';

import { history, routes } from '../../utils';

const App = () => {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path={routes.home} exact element={<HomePage />} />
        <Route path="*" element={<Navigate replace to={routes.home} />} />
      </Routes>
    </HistoryRouter>
  );
};

export default App;
