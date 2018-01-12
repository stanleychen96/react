/**
 * 2018-01-02 StanleyChen
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.less';

class Content extends React.Component {
  static defaultProps = {
    contentImg: 'http://lisbeth.premiumcoding.com/wp/wp-content/uploads/2017/09/lisbeth-demo1-1.3-1500x720.jpg',
    labelA: '',
    labelB: '',
    title: '',
    author: '',
    commentsNum: 0,
    firstWord: 'N',
    words: 'othing here,let us editing now !',
    count: 0,
  }
  static PropTypes = {
    contentImg: PropTypes.string,
    labelA: PropTypes.string,
    labelB: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    commentsNum: PropTypes.number,
    firstWord: PropTypes.string,
    words: PropTypes.string,
    count: PropTypes.number,
  }
  render() {
    const {
      labelA, labelB, title, author, commentsNum, firstWord, words, contentImg,
    } = this.props;
    return (
      <div>
        <div className={styles.topBlog}>
          <div className={styles.blogCategory}>
            <em className={styles.em}>
              <a className={styles.a} href="http://lisbeth.premiumcoding.com/wp/category/fashion/" rel="category tag">{labelA}</a>
              <div>•</div>
              <a className={styles.a} href="http://lisbeth.premiumcoding.com/wp/category/lifestyle/" rel="category tag">{labelB}</a>
            </em>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.pic}>
              <img
                src={contentImg}
                alt="contentImg"
                width="100%"
                height="auto"
              />
            </div>
            <div className={styles.metaline}>
              <div >September 14, 2017</div>•
              <div>by {author}</div>•
              <div>{commentsNum} Comments</div>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div className={styles.content}>
              <span className={styles.suDropcap}>{firstWord}</span>
              {words}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
