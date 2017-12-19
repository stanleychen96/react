import React from 'react';
import { Spin, Icon } from 'antd';
import styles from './Bottom.less';

class Footer extends React.Component {
  render() {
    return (
      <div className={styles.widget}>
        <Spin
          size="small"
        />
        <div className={styles.icon}>
          <Icon type="alipay-circle" />
          <Icon type="wechat" />
          <Icon type="qq" />
          <Icon type="facebook" />
        </div>
      </div>
    );
  }
}

export default Footer;
