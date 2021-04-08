import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { routes } from 'utils/routes';
import './App.css';

import HomeView from 'views/home';
import ChargesView from 'views/charges';

const App: React.FunctionComponent = () => (
  <Router>
    <Switch>
      <Route path={routes.home} exact>
        <HomeView />
      </Route>
      <Route path={routes.invoices}>
        <ChargesView />
      </Route>
      <Route path={routes.unknown}>
        <HomeView />
      </Route>
    </Switch>
  </Router>
);

export default App;
