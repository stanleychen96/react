import React from 'react';
// import { Card } from 'antd';
import styles from './Right.less';

class Rightwrap extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.widget}>
          <div className={styles.subcontent}>
            <h3 className={styles.subcontentH3}>about</h3>
            <div>
              <p className={styles.p}>
                <img src="http://lisbeth.premiumcoding.com/wp/wp-content/uploads/2017/09/avatar2.jpg" alt="'up'" />
                <b>Hello, my name is</b>
                <b>Lisbeth</b>
                  I am a blogger living in New York. This is my blog,
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Rightwrap;
