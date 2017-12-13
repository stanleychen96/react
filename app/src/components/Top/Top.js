import React from 'react';
import { Icon } from 'antd';
import HeaderSearch from '../HeaderSearch';
import styles from './Top.less';

class Top extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.left}>
          <Icon type="facebook" />
          <Icon type="facebook" />
          <Icon type="facebook" />
          <Icon type="facebook" />
        </div>
        <div className={styles.right}>
          <HeaderSearch />
        </div>
      </div>
    );
  }
}

export default Top;
