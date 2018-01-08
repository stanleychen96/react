import React from 'react';
import { connect } from 'dva';
import styles from './index.less';

class Introduce extends React.Component {

  render() {
    const { introduce } = this.props;
    return (
      <div>
        <div className={styles.mobileBar}>
          <p>
            <img src={introduce.src} alt="'up'" className={styles.sideImg} />
            <div style={{ fontSize: '15px', lineHeight: '28px', paddingTop: '10px', textAlign: 'left' }}>
              <b>Hello, my name is </b>
              <b>{introduce.name}. </b>
              {introduce.myWord};
            </div>
          </p>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  introduce: state.introduce,
}))(Introduce);
