import React from 'react';
import { Icon } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router';

import styles from './Content.less';

class Content extends React.Component {
  state = {
    labelA: 'LIFESTYLE',
    labelB: 'FASHION',
    title: 'Best coffee in town',
    author: 'Lisbeth',
    commentsNum: 7,
    content: 'o be successful, a home office needs to be both functional and efficient. You are going to be working in this environment for several hours each day so it is important that you make it as comfortable as possible. You can design a practical and comfortable home office by taking a few steps towards finding the right space, furnishing it, and making it attractive and efficient.',
  };
  rate = {
    disabled: false,
    allowClear: true,
  };

  // handleRateChange = (disabled) => {
  //   const { disabled } = this.props;
  //   disabled = !disabled;
  // }
  render() {
    // const {} = this.props;
    return (
      <div className={styles.topBlog}>

        <div className={styles.blogCategory}>
          <em className={styles.em}>
            <a className={styles.a} href="http://lisbeth.premiumcoding.com/wp/category/fashion/" rel="category tag">{this.state.labelA}</a>
            <div>•</div>
            <a className={styles.a} href="http://lisbeth.premiumcoding.com/wp/category/lifestyle/" rel="category tag">{this.state.labelB}</a>
          </em>
          <h2 className={styles.title}>{this.state.title}</h2>
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
            <div>by {this.state.author}</div>•
            <div>{this.state.commentsNum} Comments</div>
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div className={styles.content}>
            <span className={styles.suDropcap}>T</span>
            {this.state.content}
          </div>
        </div>
        <div className={styles.bottom}>
          <Icon type="smile-o" className={styles.icon} />
          <Link to="/continueRead" className={styles.link}>
            Continue reading
          </Link>
        </div>
      </div>
    );
  }
}

export default connect()(Content);
