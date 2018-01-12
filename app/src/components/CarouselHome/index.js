/**
 * 2018-01-01 StanleyChen
 */

import React from 'react';
import { Icon } from 'antd';
import { connect } from 'dva';
import styles from './index.less';

class CarouselHome extends React.Component {
  constructor(props) {
    super(props);
    this.imgArray = [
      'http://lisbeth.premiumcoding.com/wp/wp-content/uploads/2016/09/lisbeth-demo1-16.1.jpg',
      'http://lisbeth.premiumcoding.com/wp/wp-content/uploads/2016/10/lisbeth-demo1-16.3.jpg',
    ];
    this.state = {
      intShow: 0,
      prevEnter: false,
      nextEnter: false,
      thumbEnter: false,
    };
  }
  render() {
    const { imgcard } = this.props;
    return (
      <div className={styles.mainImg}>
        <div className={styles.imgCard}>
          {imgcard.imgCardDiscrible}
          <div className={styles.cardController}>
            <Icon type="left" onClick={this.lastImgCard} />
            <Icon type="right" onClick={this.nextImgCard} />
          </div>
        </div>
        <img
          src={imgcard.mainImg}
          key={imgcard.mainImg.key}
          alt="meila"
          width="100%"
          height="auto"
        />
      </div>
    );
  }
}

export default connect(state => ({
  imgcard: state.imgcard,
}))(CarouselHome);
