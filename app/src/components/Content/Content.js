import React from 'react';
import { Rate, Popconfirm } from 'antd';
import { connect } from 'dva';

import styles from './Content.less';

class Content extends React.Component {
  state = {
    content: 'o be successful, a home office needs to be both functional and efficient. You are going to be working in this environment for several hours each day so it is important that you make it as comfortable as possible. You can design a practical and comfortable home office by taking a few steps towards finding the right space, furnishing it, and making it attractive and efficient.',
  };
  render() {
    // const {} = this.props;
    return (
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
        <div style={{ display: 'flex' }}>
          <div className={styles.content}>
            <span className={styles.suDropcap}>T</span>
            {this.state.content}
          </div>
        </div>
        <div className={styles.h}>Continue reading</div>
        <div className={styles.bottom}>
          <div className={styles.favourite}>
            <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
              <a>Share</a>
            </Popconfirm>
          </div>
          <Rate
            className={styles.favourite}
            allowHalf defaultValue={2.5}
          />
        </div>
      </div>
    );
  }
}

export default connect()(Content);
