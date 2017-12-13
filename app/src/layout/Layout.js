import React from 'react';
import { Layout, Menu, Card } from 'antd';
import Top from '../components/Top/Top';
import styles from './BasicLayout.less';

const { Header, Content, Footer } = Layout;

class PageLayout extends React.Component {
  render() {
    const layout = (
      <Layout>
        <Top />
        <Header style={{ display: 'flex', maxWidth: '1500px', width: '100%', padding: 0 }}>
          <div style={{ }} className="logo" />
          <div className={styles.menu}>
            <Menu
              theme="light"
              mode="horizontal"
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
              <Menu.Item key="4">nav 3</Menu.Item>
              <Menu.Item key="5">nav 3</Menu.Item>
              <Menu.Item key="6">nav 3</Menu.Item>
              <Menu.Item key="7">nav 3</Menu.Item>
              <Menu.Item key="8">nav 3</Menu.Item>
            </Menu>
          </div>
        </Header>
        <Content style={{ padding: '0', marginTop: 0, minHeight: '96vh' }}>
          <div>
            <img
              src="http://lisbeth.premiumcoding.com/wp/wp-content/uploads/2016/09/lisbeth-demo1-16.1.jpg"
              alt="meila"
            />
          </div>
          <div>
            <Card>
              content
            </Card>
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
