import React from 'react';
import { Switch } from 'react-router-dom';
import PageNotFound from '../pages/PageNotFound';
import Home from '../pages/Home/Home';

import Route from './Route';

const Routes = (): JSX.Element => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="*" component={PageNotFound} />
  </Switch>
);
export default Routes;
