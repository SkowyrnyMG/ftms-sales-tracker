import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectInvoices } from 'store/slices/invoicesSlice';

import { routes } from 'utils/routes';
import './App.css';

import HomeView from 'views/home';
import InvoicesView from 'views/invoices';

const App: React.FC = () => {
  const invoicesData = useSelector(selectInvoices);
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
        <Route path={routes.unknown}>
          <HomeView />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
