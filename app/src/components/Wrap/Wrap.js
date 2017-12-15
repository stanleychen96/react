import React from 'react';
// import { } from 'antd';
import Leftwrap from './Leftwrap';
import Rightwrap from './Rightwrap';
import styles from './index.less';

class Wrap extends React.Component {
  render() {
    return (
      <div className={styles.sidebar}>
        <Leftwrap />
        <Rightwrap />
      </div>
    );
  }
}

export default Wrap;
