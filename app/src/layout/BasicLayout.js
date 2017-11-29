import React from 'react';
import { Layout, Card, Menu, Icon } from 'antd';
import { Link } from 'dva/router';
// import { connect } from 'dva';
// import { ContainerQuery } from 'react-container-query';

import styles from './BasicLayout.less';

const { Header, Sider, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;


// const query = {
//   'screen-xs': {
//     maxWidth: 575,
//   },
//   'screen-sm': {
//     minWidth: 576,
//     maxWidth: 767,
//   },
//   'screen-md': {
//     minWidth: 768,
//     maxWidth: 991,
//   },
//   'screen-lg': {
//     minWidth: 992,
//     maxWidth: 1199,
//   },
//   'screen-xl': {
//     minWidth: 1200,
//   },
// };

class BasicLayout extends React.PureComponent {
  state = {
    collapsed: false,
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const layout = (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          breakpoint="md"
          onCollapse={this.onCollapse}
          width={256}
          className={styles.sider}
        >
          <div className={styles.logo}>
            <Link to="/">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/iwWyPinUoseUxIAeElSx.svg" alt="logo" />
              <h1>Ant Design Pro</h1>
            </Link>
          </div>
          <Menu
            onClick={this.handleClick}
            style={{ margin: '16px 0', width: '100%' }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
          >
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Dashoboard</span></span>}>
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
              <Menu.Item key="3">Option 3</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
              <Menu.Item key="4">Option 5</Menu.Item>
              <Menu.Item key="5">Option 6</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
              <Menu.Item key="8">Option 9</Menu.Item>
              <Menu.Item key="9">Option 10</Menu.Item>
              <Menu.Item key="10">Option 11</Menu.Item>
              <Menu.Item key="11">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header className={styles.header}>
            <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggleCollapsed}
              style={{ marginBottom: 16 }}
            />
            {/* <div className={styles.right}>
              <Avatar />
              <Avatar />
              <Dropdown overlay={menu}>
                <span className={`${styles.action} ${styles.account}`}>
                  <Avatar size="small" className={styles.avatar} src={currentUser.avatar} />
                  {currentUser.name}
                </span>
              </Dropdown>
            </div> */}
          </Header>
          <Content>
            <Card style={{ minHeight: 'calc(100vh - 100px)', margin: '20px' }} >
              <h2>Content</h2>
            </Card>
            <Footer style={{ textAlign: 'center', padding: '70px', lineHeight: '30px' }}> 妈妈咪呀金服 </Footer>
          </Content>
        </Layout>
      </Layout>
    );

    return (
      // <ContainerQuery query={query}>
      <div>{layout}</div>
      // </ContainerQuery>
    );
  }
}

export default BasicLayout;
