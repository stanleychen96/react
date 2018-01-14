/**
 * 2018-1-10 StanleyChen
 */

import React from 'react';
import { Button, Card } from 'antd';
import styles from './index.less';

class Manager extends React.Component {
  render() {
    return(
      <div style={{ margin: '10px'}}>
        <Card>
          <div>
            <h2>.................</h2>
            <hr />
            <p>................</p>
          </div>
          <div className={styles.tag}>
            <div>
              <Button type="primary" size="small" className={styles.button}>删除</Button>
            </div>
            <div>
              <Button type="primary" size="small" className={styles.button}>修改</Button>
            </div>
          </div>
        </Card>
      </div>
    )
  }
}

export default Manager;
