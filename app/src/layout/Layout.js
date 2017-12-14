import React from 'react';
import { Layout, Card } from 'antd';
import Top from '../components/Top/Top';
import MainMenu from '../components/MainMenu/MainMenu';
import Wrap from '../components/Wrap/Wrap';
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
            <div className={styles.leftlogo}>
              <img
                src="http://lisbeth.premiumcoding.com/wp/wp-content/uploads/2017/09/lisbeth-logo-new-second.png"
                data-rjs="3"
                alt="Lisbeth WordPress Blog - Lisbeth WordPress blog"
              />
            </div>
            <div className={styles.rightmenu}>
              <MainMenu />
            </div>
          </div>
        </Header>
        <Content style={{ padding: '0', marginTop: 0, minHeight: '96vh', background: '#ffffff' }}>
          <div>
            <img
              src="http://lisbeth.premiumcoding.com/wp/wp-content/uploads/2016/09/lisbeth-demo1-16.1.jpg"
              alt="meila"
            />
          </div>
          <div>
            <Wrap />
          </div>
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
