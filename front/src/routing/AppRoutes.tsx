import Cart from 'app/Cart/Cart';
import Home from 'app/Home/Home';
import Summary from 'app/Summary/Summary';
import { Route, Routes, Navigate } from 'react-router-dom';
import AppRoute from './AppRoutes.enum';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={AppRoute.Home} element={<Home />} />
      <Route path={AppRoute.Cart} element={<Cart />} />
      <Route path={AppRoute.Summary} element={<Summary />} />
      <Route
        path={AppRoute.NotExisting}
        element={<Navigate replace to={AppRoute.Home} />}
      />
    </Routes>
  );
};

export default AppRoutes;
