/**
 * 2018-01-12 StanleyChen
 */

import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import LoginLayout from './layouts/LoginLayout';
import BasicLayout from './layouts/BasicLayout';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={LoginLayout} />
        <Route path="/editor" component={BasicLayout}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
