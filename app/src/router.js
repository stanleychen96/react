import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import BasicLayout from './layout/BasicLayout';
import PageLayout from './layout/Layout';

function RouterConfig({ history }) {
  const route = 'second';

  return (
    <Router history={history}>
      <Switch>
        <Route path="/page" component={PageLayout} />
        <Route path="/" render={props => <BasicLayout {...route} {...props} />} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;

