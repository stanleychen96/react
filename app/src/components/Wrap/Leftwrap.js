
import React from 'react';
import { Card } from 'antd';
import styles from './index.less';

class Leftwrap extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.widget}>
          <div>
            <Card>
            </Card> 
          </div>
        </div>
      </div>
    );
  }
}

export default Leftwrap;
