import React from 'react';
import { Layout, Icon } from 'antd';
import { connect } from 'dva';
import { Route, Switch } from 'react-router-dom';
// import { Link } from 'dva/router';
import Top from '../components/Top/Top';
import Wrap from '../components/Wrap/Wrap';
import Bottom from '../components/Bottom/Bottom';
// import Imgcard from '../components/Imgcard/Imgcard';
// import Anothercard from '../components/Anothercard/Anothercard';
import NotFound from '../routes/404';
import ContinueRead from '../routes/continueRead';
import styles from './Layout.less';

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
    const { layoutData } = this.props;

    const layout = (
      <Layout>
        <Top />
        <Header style={{ display: 'flex', maxWidth: '1500px', minHeight: '80px', width: '100%', padding: 0 }}>
          <div className={styles.root}>
            <div
              className={styles.leftlogo}
            >
              <img
                src="http://lisbeth.premiumcoding.com/wp/wp-content/uploads/2017/09/lisbeth-logo-new-second.png"
                data-rjs="3"
                alt="Lisbeth WordPress Blog - Lisbeth WordPress blog"
              />
            </div>
          </div>
        </Header>
        {/* <Imgcard /> */}
        {/* <Anothercard /> */}
        <Content style={{ minHeight: '96vh', background: '#ffffff' }}>
          <div className={styles.mainImg}>
            <div className={styles.imgCard}>
              {layoutData.imgCardDiscrible}
              <div className={styles.cardController}>
                <Icon type="left" onClick={this.lastImgCard} />
                <Icon type="right" onClick={this.nextImgCard} />
              </div>
            </div>
            <img
              src={layoutData.mainImg}
              key={layoutData.mainImg.key}
              alt="meila"
              width="100%"
              height="auto"
            />
          </div>
          <div style={{ paddingLeft: '5%', paddingRight: '5%', marginTop: '25px' }}>
            <Switch>
              <Route
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

export default connect(state => ({
  layoutData: state.layout,
}))(PageLayout);

