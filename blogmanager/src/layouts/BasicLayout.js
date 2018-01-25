import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Icon } from 'antd';
import { Switch, Route, Link } from 'dva/router';
import Editor from '../routes/Article';
import ForArticle from '../routes/Manager';

const { Header, Content, Sider } = Layout;

class BasicLayout extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
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
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/root/editor">新建文章</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link
                to={{
                  pathname: '/root/manager',
                  search: `?id=1`,
                }}
              >
                管理文章
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/asc">
                <Icon type="upload" />
                <span>nav 3</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: '100vh' }}>
          111111
            <Switch>
              <Route
                exact
                path="/"
                render={() => (<div>welcome</div>)}
              />
              <Route
                path="/editor"
                component={Editor}
              />
              <Route
                path="/manager"
                component={ForArticle}
              />
              <Route
                path="/asc"
                render={() => (<div>welcome</div>)}
              />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
    return (
      <div>
        {layout}
      </div>
    );
  }
}

export default connect(
  
)(BasicLayout);
