/**
 * 2017-12-06 StanleyChen
 */

import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import PageLayout from './layout/PageLayout';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={PageLayout} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
