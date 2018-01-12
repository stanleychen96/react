/**
 * 2018-01-03 StanleyChen
 */

import React from 'react';
import { Spin, Popover } from 'antd';
import styles from './index.less';

class ContentBottom extends React.Component {
  render() {
    this.state = {
      content: '正在施工',
    };
    return (
      <div className={styles.widget}>
        <Popover content={this.state.content} trigger="click">
          <Spin
            size="small"
          />
        </Popover>
      </div>
    );
  }
}

export default ContentBottom;
