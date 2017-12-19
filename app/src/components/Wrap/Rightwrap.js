import React from 'react';
import Instagram from '../Instagram/instagram';
import Introduce from '../Introduce/Introduce';
import styles from './Right.less';

class Rightwrap extends React.Component {
  constructor() {
    super();
    this.state = {
      content: 'I am a blogger living in New York. This is my blog, I am a blogger living in New York. Never miss out on new food stuff & healthy recipes.',
    };
  }
  render() {
    return (
      <div style={{ maxWidth: '1200px' }}>
        <div className={styles.widget}>
          <div className={styles.subcontent}>
            <h3 style={{ textTransform: 'none', fontStyle: 'italic', fontFamily: 'Lora' }}>About me</h3>
            <Introduce />
          </div>
        </div>
        <div className={styles.widget}>
          <div className={styles.subcontent}>
            <h3 style={{ textTransform: 'none', fontStyle: 'italic', fontFamily: 'Lora' }}>Instagram</h3>
            <Instagram />
          </div>
        </div>
      </div>
    );
  }
}

export default Rightwrap;
