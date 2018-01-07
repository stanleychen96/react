import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import PageLayout from './layout/Layout';
import Try from './routes/Try/try';

function RouterConfig({ history }) {
  // const route = 'second';

  return (
    <Router history={history}>
      <Switch>
        <Route path="/try" component={Try} />
        <Route path="/" component={PageLayout} />
        {/* <Route path="/" render={props => <BasicLayout {...route} {...props} />} /> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;

