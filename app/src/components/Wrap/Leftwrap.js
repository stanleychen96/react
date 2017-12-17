
import React from 'react';
import { } from 'antd';
import Content from '../Content/Content';
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
              <h2 className={styles.title}>Best coffee in town</h2>
              <div className={styles.pic}>
                <img
                  src="http://lisbeth.premiumcoding.com/wp/wp-content/uploads/2017/09/lisbeth-demo1-1.3-1500x720.jpg"
                  alt="pic"
                  width="100%"
                  height="auto"
                />
              </div>
              <div className={styles.metaline}>
                <div >September 14, 2017</div>•
                <div>by Lisbeth</div>•
                <div>7 Comments</div>
              </div>
            </div>
            <Content>a</Content>
            <div className={styles.bottom}>
              <div>share</div>
              <div>share</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Leftwrap;
