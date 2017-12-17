import React from 'react';
import { Pagination } from 'antd';
import Leftwrap from './Leftwrap';
import Rightwrap from './Rightwrap';
import styles from './index.less';

class Wrap extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.sidebar}>
          <Leftwrap />
          <Leftwrap />
          <Leftwrap />
          <Leftwrap />
          <Leftwrap />
          <Rightwrap />
        </div>
        <Pagination
          defaultCurrent={1}
          total={50}
          className={styles.pagination}
        />
      </div>
    );
  }
}

export default Wrap;
