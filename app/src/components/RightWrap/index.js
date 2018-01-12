/**
 * 2018-01-01 StanleyChen
 */

import React from 'react';
import { connect } from 'dva';
import styles from './index.less';

class Rightwrap extends React.Component {
  handleInstagram = () => {
    this.props.dispatch({
      type: 'instagram/fetchImg',
    });
  }

  render() {
    const { instagram, introduce } = this.props;
    return (
      <div className={styles.root}>
        <div className={styles.widget}>
          <div className={styles.subcontent}>
            <h3>About me</h3>
            <div>
              <img src={introduce.src} alt="'up'" className={styles.sideImg} />
              <div className={styles.introduceWrods}>
                <b>Hello, my name is </b>
                <b>{introduce.name}. </b>
                {introduce.myWord};
              </div>
            </div>
          </div>
        </div>
        <div className={styles.widget}>
          <div className={styles.subcontent}>
            <h3>Instagram</h3>
            <div className={styles.instagramRoot}>
              <div className={styles.instagramWrap}>
                {
                  instagram.map(item =>
                    (
                      <img
                        alt={item.alt}
                        key={item.key}
                        src={item.src}
                        onClick={this.handleInstagram}
                      />
                    ),
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  instagram: state.instagram.imgSource,
  introduce: state.introduce,
}))(Rightwrap);
