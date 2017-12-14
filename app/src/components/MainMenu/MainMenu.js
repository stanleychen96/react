import React from 'react';
import { Icon, Menu, Dropdown } from 'antd';
import styles from './index.less';

class MainMenu extends React.Component {
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
        </Menu.Item>
      </Menu>
    );
    return (
      <div className={styles.index}>
        <div>
          <a>HOME</a>
        </div>
        <div>
          <Dropdown overlay={menu}>
            <a>
              FEATURES <Icon type="down" />
            </a>
          </Dropdown>
        </div>
        <div>
          <a>BLOG</a>
        </div>
      </div>
    );
  }
}

export default MainMenu;
