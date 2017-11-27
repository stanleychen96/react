import React from 'react';
import { Layout, Card, Menu, Icon } from 'antd';
// import { connect } from 'dva';
// import { ContainerQuery } from 'react-container-query';

import styles from './BasicLayout.less';

const { Header, Sider, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


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

  render() {
    const layout = (
      <Layout>
        <Sider
          trigger={null}
          breakpoint="md"
          className
          width={256}
          OnCollapse
        >
          <div className={styles.logo}>
            <img src="https://gw.alipayobjects.com/zos/rmsportal/iwWyPinUoseUxIAeElSx.svg" alt="logo" />
            <h1>Ant Design Pro</h1>
          </div>
          <Menu
            onClick={this.handleClick}
            style={{ margin: '16px 0', width: '100%' }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
          >
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
              <MenuItemGroup key="g1" title="Item 1">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup key="g2" title="Item 2">
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header>
            <h1>Header</h1>
          </Header>
          <Content>
            <Card style={{ minHeight: 'calc(100vh - 0px)' }}>
              <h2>Content</h2>
            </Card>
            <Footer> superman </Footer>
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
