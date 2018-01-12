/**
 * 2018-01-01 StanleyChen
 */

import React from 'react';
import { connect } from 'dva';
import Content from '../../components/Content';
import ContinueTap from '../../components/Content/ContinueTap';
import RightWrap from '../../components/RightWrap/';
import styles from './Wrap.less';

class Wrap extends React.Component {
  continueTapFetchContentInfo = () => {
    this.props.dispatch({
      type: 'content/fetchContent',
      payload: '1',
    });
  }
  render() {
    const { article } = this.props;
    return (
      <div className={styles.flex}>
        <div>
          {
            article.contentInfo.map(item =>
              (
                <div key={item.id}>
                  <Content
                    labelA={item.labelA}
                    labelB={item.labelB}
                    title={item.title}
                    author={item.author}
                    commentsNum={item.commentsNum}
                    words={item.words}
                    firstWord={item.firstWord}
                    contentImg={item.src}
                  />
                  <ContinueTap
                    handleSubmit={this.continueTapFetchContentInfo}
                    articleId={item.id}
                  />
                </div>
              ),
            )
          }
        </div>
        <RightWrap />
      </div>
    );
  }
}

export default connect(state => ({
  article: state.content,
}))(Wrap);
