
import React from 'react';
import { Card } from 'antd';
import styles from './index.less';

class Leftwrap extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.widget}>
          <div className={styles.topBlog}>
            <div className={styles.blogCategory}>
              <em className={styles.em}>
                <a className={styles.a} href="http://lisbeth.premiumcoding.com/wp/category/fashion/" rel="category tag">Fashion</a>
                <div>•</div>
                <a className={styles.a} href="http://lisbeth.premiumcoding.com/wp/category/lifestyle/" rel="category tag">Lifestyle</a>
              </em>
            </div>
            <h1 className={styles.title}>Best coffee in town</h1>
            <div className={styles.pic}>
              <img
                src="http://lisbeth.premiumcoding.com/wp/wp-content/uploads/2017/09/lisbeth-demo1-1.3-1500x720.jpg"
                alt="pic"
                width="100%"
                height="auto"
              />
            </div>
            <div className={styles.postMeta}>
              <a className={styles.metaLine} href="http://lisbeth.premiumcoding.com/wp/2017/09/14/" >September 14, 2017</a>
              <a className={styles.metaLine} style={{ borderBottom: '1px solid' }}>by Lisbeth</a>
              <a className={styles.metaLine} href="http://lisbeth.premiumcoding.com/wp/handcrafted-jewellery/#comments">7 Comments</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Leftwrap;
