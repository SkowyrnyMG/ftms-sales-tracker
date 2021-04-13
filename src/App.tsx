import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from 'store/store';

import { routes } from 'utils/routes';
import './App.css';

import HomeView from 'views/home';
import InvoicesView from 'views/invoices';

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path={routes.home} exact>
          <HomeView />
        </Route>
        <Route path={routes.invoices}>
          <InvoicesView />
        </Route>
        <Route path={routes.unknown}>
          <HomeView />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

export default App;
