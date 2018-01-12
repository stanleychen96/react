/**
 * 2018-1-11 Stanley Chen
 */

import React from 'react';
import { Tag, Button, Card } from 'antd';
import styles from './index.less';

class SingleArticle extends React.Component {
  render() {
    return(
      <div style={{ margin: '10px'}}>
        <Card>
          <div>
            <div>
              <h2>........................</h2>
              <div className={styles.tag}>
                <Tag color="#2db7f5">标签</Tag>
                <Tag color="#87d068">标签</Tag>
              </div>
            </div>
            <hr />
            <p>.................</p>
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

export default SingleArticle;