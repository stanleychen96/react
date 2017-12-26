import React from 'react';
import styles from './instagram.less';

// const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

class Instagram extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.wrap}>
          <img src="http://lisbeth.premiumcoding.com/wp/wp-content/uploads/2016/10/lisbeth-demo1-16.3.jpg" alt="" />
          <img src="http://lisbeth.premiumcoding.com/wp/wp-content/uploads/2016/08/lisbeth-demo1-14.jpg" alt="" />
        </div>
      </div>
    );
  }
}

export default Instagram;
