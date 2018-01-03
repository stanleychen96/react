import React from 'react';
import BannerAnim, { Element } from 'rc-banner-anim';
// import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';

import styles from './Anothercard.less';

// const BgElement = Element.BgElement;
class Anothercard extends React.Component {
  render() {
    return (
      <BannerAnim prefixCls={styles.bannerUser}>
        <Element
          prefixCls={styles.bannerUserElem}
          key="0"
        >
          <image src="http://lisbeth.premiumcoding.com/wp/wp-content/uploads/2016/09/lisbeth-demo1-16.1.jpg" className={styles.image} />
        </Element>
        <Element
          prefixCls={styles.bannerUserElem}
          key="1"
          component="image"
          src="http://lisbeth.premiumcoding.com/wp/wp-content/uploads/2016/09/lisbeth-demo1-16.1.jpg"
        />
      </BannerAnim>
    );
  }
}

export default Anothercard;
