import React from 'react';
import BannerAnim, { Element } from 'rc-banner-anim';
// import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';

import styles from './Anothercard.less';

const BgElement = Element.BgElement;
class Anothercard extends React.Component {
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
    return (
      <BannerAnim prefixCls={styles.bannerUser}>
        <Element
          prefixCls={styles.bannerUserElem}
          key="0"
          style={{
            height: '100%',
          }}
        >
          <BgElement
            key="bg"
            className={styles.bg}
            style={{
              backgroundImage: `url(${this.imgArray[0]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
            }}
          />
        </Element>
        <Element
          prefixCls={styles.bannerUserElem}
          key="1"
          style={{
            height: '100%',
          }}
        >
          <BgElement
            key="bg"
            className={styles.bg}
            style={{
              backgroundImage: `url(${this.imgArray[1]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
            }}
          />
        </Element>
      </BannerAnim>
    );
  }
}

export default Anothercard;
