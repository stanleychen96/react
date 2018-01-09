import React from 'react';
import { Icon } from 'antd';
import styles from './index.less';

class PageTop extends React.Component {
  render() {
    return (
      <div className={styles.topWrapper}>
        <div className={styles.left}>
          <a href="https://github/stanleychen96.com">
            <Icon type="github" style={{ fontSize: '32px' }} />
          </a>
        </div>
      </div>
    );
  }
}

export default PageTop;