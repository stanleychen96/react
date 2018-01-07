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
        path="/"
        render={() => (
          <Link to="/continueRead" className={styles.link}>
            Continue reading
          </Link>
        )}
      />
    </div>
  );
};
