import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import BasicLayout from './layout/BasicLayout';

function RouterConfig({ history }) {
  const route = 'second';

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" render={props => <BasicLayout {...route} {...props} />} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;

