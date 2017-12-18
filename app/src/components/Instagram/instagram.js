import React from 'react';
import styles from './instagram.less';

// const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

class Instagram extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.wrap}>
          <img className={styles.instagramImg} src="https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/12783869_590596704430436_506074379_n.jpg" alt="" />
          <img className={styles.instagramImg} src="https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/10011319_542781322561082_1003420003_n.jpg" alt="" />
          <img className={styles.instagramImg} src="https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/10011319_542781322561082_1003420003_n.jpg" alt="" />
          <img className={styles.instagramImg} src="https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/12783869_590596704430436_506074379_n.jpg" alt="" />
          <img className={styles.instagramImg} src="https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/12783869_590596704430436_506074379_n.jpg" alt="" />
          <img className={styles.instagramImg} src="https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/10011319_542781322561082_1003420003_n.jpg" alt="" />
        </div>
      </div>
    );
  }
}

export default Instagram;
