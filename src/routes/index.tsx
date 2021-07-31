import React from 'react';
import { Switch } from 'react-router-dom';
import Home from '../pages/Home/Home';

import Route from './Route';

const Routes = (): JSX.Element => (
  <Switch>
    <Route path="/" exact component={Home} />
  </Switch>
);
export default Routes;
