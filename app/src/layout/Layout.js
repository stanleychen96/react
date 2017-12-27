import React from 'react';
import { Layout } from 'antd';
import Top from '../components/Top/Top';
// import MainMenu from '../components/MainMenu/MainMenu';
import Wrap from '../components/Wrap/Wrap';
import Bottom from '../components/Bottom/Bottom';
// import Leftwrap from '../components/Wrap/Leftwrap';
// import Rightwrap from '../components/Wrap/Rightwrap';
import styles from './Layout.less';

const { Header, Content, Footer } = Layout;

class PageLayout extends React.Component {
  render() {
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
        <Content style={{ minHeight: '96vh', background: '#ffffff' }}>
          <div className={styles.mainImg}>
            <div className={styles.imgCard}>This is an imgcard</div>
            <img
              src="http://lisbeth.premiumcoding.com/wp/wp-content/uploads/2016/09/lisbeth-demo1-16.1.jpg"
              alt="meila"
              width="100%"
              height="auto"
            />
          </div>
          <div style={{ paddingLeft: '5%', paddingRight: '5%', marginTop: '25px' }}>
            <Wrap />
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
