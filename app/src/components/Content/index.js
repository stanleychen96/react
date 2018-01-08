import React from 'react';
import { connect } from 'dva';
import styles from './index.less';

class Content extends React.Component {

  render() {
    const { content } = this.props;
    return (
      <div>
        {
          content.contentInfo.map(item =>
            (
              <div className={styles.topBlog} key={item.key}>
                <div className={styles.blogCategory}>
                  <em className={styles.em}>
                    <a className={styles.a} href="http://lisbeth.premiumcoding.com/wp/category/fashion/" rel="category tag">{item.labelA}</a>
                    <div>•</div>
                    <a className={styles.a} href="http://lisbeth.premiumcoding.com/wp/category/lifestyle/" rel="category tag">{item.labelB}</a>
                  </em>
                  <h2 className={styles.title}>{item.title}</h2>
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
                    <div>by {item.author}</div>•
                    <div>{item.commentsNum} Comments</div>
                  </div>
                </div>
                <div style={{ display: 'flex' }}>
                  <div className={styles.content}>
                    <span className={styles.suDropcap}>{item.firstword}</span>
                    {item.content}
                  </div>
                </div>
              </div>
            ),
          )
        }
      </div>
    );
  }
}

export default connect(state => ({
  content: state.content,
}))(Content);
