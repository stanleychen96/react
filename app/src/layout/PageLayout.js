/**
 * 2017-12-05 StanleyChen
 */

import React from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';

import NotFound from '../routes/404/404';
import ContinueRead from '../routes/ContinueRead/ContinueRead';
import Wrap from '../routes/Wrap/Wrap';

import HeaderBar from '../components/HeaderBar';
import PageTop from '../components/PageTop';
import ContentBottom from '../components/ContentBottom';
import CarouselRead from '../components/CarouselRead';
import CarouselHome from '../components/CarouselHome';

import styles from './PageLayout.less';

const { Header, Content, Footer } = Layout;

class PageLayout extends React.Component {

  render() {
    const layout = (
      <Layout>
        <PageTop />
        <Header className={styles.header}>
          <HeaderBar />
        </Header>
        <Switch>
          <Route
            exact
            path="/"
            component={CarouselHome}
          />
          <Route
            path="/continueRead"
            component={CarouselRead}
          />
        </Switch>
        <Content className={styles.content}>
          <div className={styles.contentWrap}>
            <Switch>
              <Route
                exact
                path="/"
                component={Wrap}
              />
              <Route
                path="/continueRead"
                component={ContinueRead}
              />
              <Route
                component={NotFound}
              />
            </Switch>
          </div>
          <ContentBottom />
        </Content>
        <Footer className={styles.footer}>
          © 2018 copyright by StanleyChen // All rights reserved
        </Footer>
      </Layout>
    );
    return (
      <div>
        {layout}
      </div>
    );
  }
}

export default PageLayout;
