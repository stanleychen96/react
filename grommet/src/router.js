import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Layout from './routes/Layout/Layout';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Layout} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
