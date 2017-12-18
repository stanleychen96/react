import React from 'react';
import styles from './Introduce.less';

class Introduce extends React.Component {
  constructor() {
    super();
    this.state = {
      content: 'I am a blogger living in New York. This is my blog, I am a blogger living in New York. Never miss out on new food stuff & healthy recipes.',
    };
  }
  render() {
    return (
      <div>
        <div className={styles.mobileBar}>
          <p>
            <img src="http://lisbeth.premiumcoding.com/wp/wp-content/uploads/2017/09/avatar2.jpg" alt="'up'" className={styles.sideImg} />
            <div style={{ fontSize: '15px', lineHeight: '28px', paddingTop: '10px', textAlign: 'left' }}>
              <b>Hello, my name is </b>
              <b>Lisbeth. </b>
              {this.state.content};
            </div>
          </p>
        </div>
      </div>
    );
  }
}

export default Introduce;
