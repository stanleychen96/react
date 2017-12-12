import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import layout from './layout/layout';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={layout} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
