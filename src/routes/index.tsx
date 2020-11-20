import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Detalhes from '../pages/Detalhes';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/Detalhes/:id" exact component={Detalhes} />
  </Switch>
);

export default Routes;
