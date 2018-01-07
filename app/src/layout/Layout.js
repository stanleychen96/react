import React from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';

import NotFound from '../routes/404/404';
import ContinueRead from '../routes/ContinueRead/ContinueRead';
import Wrap from '../routes/Wrap/Wrap';

import HeaderBar from '../components/HeaderBar';
import Top from '../components/Top';
import Bottom from '../components/Bottom';
import AnotherCard from '../components/AnotherCard';
import ImgCard from '../components/ImgCard';

const { Header, Content, Footer } = Layout;

class PageLayout extends React.Component {

  // lastImgCard = () => {
  //   this.props.dispatch({
  //     type: 'layout/lastImgCard',
  //   });
  // }

  // nextImgCard = () => {
  //   this.props.dispatch({
  //     type: 'layout/nextImgCard',
  //   });
  // };

  render() {
    const layout = (
      <Layout>
        <Top />
        <Header style={{ display: 'flex', maxWidth: '1500px', minHeight: '80px', width: '100%', padding: 0 }}>
          <HeaderBar />
        </Header>
        {/* <Imgcard /> */}
        <Switch>
          <Route
            exact
            path="/"
            component={AnotherCard}
          />
          <Route
            path="/continueRead"
            component={ImgCard}
          />
        </Switch>
        <Content style={{ background: '#ffffff' }}>
          <div style={{ paddingLeft: '5%', paddingRight: '5%', marginTop: '25px' }}>
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
          <Bottom />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          © 2017 copyright PREMIUMCODING // All rights reserved
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

