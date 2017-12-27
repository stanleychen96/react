import React from 'react';

import styles from './instagram.less';

// const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

export default class Instagram extends React.Component {
  state = {
    imgSource: [
      { src: 'http://lisbeth.premiumcoding.com/wp/wp-content/uploads/2016/10/lisbeth-demo1-16.3.jpg', key: 'index0', alt: 'index0' },
      { src: 'http://lisbeth.premiumcoding.com/wp/wp-content/uploads/2016/08/lisbeth-demo1-14.jpg', key: 'index1', alt: 'index1' },
      { src: 'http://lisbeth.premiumcoding.com/wp/wp-content/uploads/2016/09/lisbeth-demo1-16.1.jpg', key: 'index2', alt: 'index2' }],
  };

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.wrap}>
          {
              this.state.imgSource.map(item =>
                (
                  <img
                    src={item.src}
                    alt={item.alt}
                    key={item.key}
                  />
                ),
              )
          }
        </div>
      </div>
    );
  }
}

