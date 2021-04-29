import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectInvoices, selectPayments } from 'store/slices/invoicesSlice';

import { routes } from 'utils/routes';
import './App.css';

import HomeView from 'views/home';
import InvoicesView from 'views/invoices';
import PaymentsView from 'views/payments';
import { isUserLoggedIn } from 'store/slices/dbSlice';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const invoicesData = useSelector(selectInvoices);
  const paymentsData = useSelector(selectPayments);

  React.useEffect(() => {
    dispatch(isUserLoggedIn());
  }, [dispatch]);
  return (
    <Router>
      <Switch>
        <Route path={routes.home} exact>
          <HomeView />
        </Route>
        <Route path={routes.invoices}>
          {invoicesData.length > 0 ? (
            <InvoicesView />
          ) : (
            <Redirect to={routes.home} />
          )}
        </Route>
        <Route path={routes.payments}>
          {paymentsData.length > 0 ? (
            <PaymentsView />
          ) : (
            <Redirect to={routes.home} />
          )}
        </Route>
        <Route path={routes.unknown}>
          <HomeView />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
