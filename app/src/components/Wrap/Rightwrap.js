import React from 'react';
import { Card } from 'antd';
import styles from './index.less';

class Rightwrap extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.widget}>
          <div>
            <Card>
              a
            </Card>
            <div>a</div>
          </div>
          <div className={styles.subcontent}>
            a
          </div>
        </div>
      </div>
    );
  }
}

export default Rightwrap;
