import Cart from 'app/Cart/Cart';
import Home from 'app/Home/Home';
import Summary from 'app/Summary/Summary';
import { Route, Routes, Navigate } from 'react-router-dom';
import OperationStatus from 'ui/organism/OperationStatus/OperationStatus';
import AppRoute from './AppRoutes.enum';

import errorImage from 'ui/assets/images/errorOccured.svg';
import SummarySuccess from 'app/Summary/SummarySuccess';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={AppRoute.Home} element={<Home />} />
      <Route path={AppRoute.Cart} element={<Cart />} />
      <Route path={AppRoute.Summary} element={<Summary />} />
      <Route path={AppRoute.SummarySuccess} element={<SummarySuccess />} />
      <Route
        path={AppRoute.SummaryError}
        element={
          <OperationStatus
            text='Wystąpił problem podczas składania zamówienia.'
            imageSrc={errorImage}
          />
        }
      />
      <Route
        path={AppRoute.NotExisting}
        element={<Navigate replace to={AppRoute.Home} />}
      />
    </Routes>
  );
};

export default AppRoutes;
