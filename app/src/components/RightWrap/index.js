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
      <div style={{ maxWidth: '1000px' }}>
        <div className={styles.widget}>
          <div className={styles.subcontent}>
            <h3>About me</h3>
            <div className={styles.mobileBar}>
              <img src={introduce.src} alt="'up'" className={styles.sideImg} />
              <div style={{ fontSize: '15px', lineHeight: '28px', paddingTop: '10px', textAlign: 'left' }}>
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
            <div className={styles.root}>
              <div className={styles.wrap}>
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
