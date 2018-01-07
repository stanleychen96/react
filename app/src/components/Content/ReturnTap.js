import React from 'react';
import { Icon } from 'antd';
import { Link } from 'dva/router';
import { Route } from 'react-router-dom';
import styles from './index.less';

export default () => {
  return (
    <div className={styles.bottom}>
      <Icon type="smile-o" className={styles.icon} />
      <Route
        path="/continueRead"
        render={() => (
          <Link to="/" className={styles.link}>
            return
          </Link>
        )}
      />
    </div>
  );
};
