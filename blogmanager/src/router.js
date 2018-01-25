/**
 * 2018-1-11 StanleyChen
 */

import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import LoginLayout from './layouts/LoginLayout';
import BasicLayout from './layouts/BasicLayout';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={LoginLayout} />
        <Route exact path="/root" component={BasicLayout}/>
        <Route exact path="/root/editor" component={BasicLayout}/>
        <Route exact path="/root/manager" component={BasicLayout}/>
        <Route exact path="/asc" component={BasicLayout}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
