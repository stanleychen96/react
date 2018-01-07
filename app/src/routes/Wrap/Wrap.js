import React from 'react';
import { connect } from 'dva';
import Content from '../../components/Content';
import ContinueTap from '../../components/Content/ContinueTap';
import RightWrap from '../../components/RightWrap/';
import styles from './Wrap.less';

class Wrap extends React.Component {
  render() {
    const { content } = this.props;
    console.log('wrap', content);

    return (
      <div>
        <div className={styles.flex}>
          <div>
            {
              content.contentInfo.map(item =>
                (
                  <div key={item.key}>
                    <Content
                      labelA={item.labelA}
                      labelB={item.labelB}
                      title={item.title}
                      author={item.author}
                      commentsNum={item.commentsNum}
                    />
                    <ContinueTap />
                  </div>
                ),
              )
            }
          </div>
          <RightWrap />
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  content: state.content,
}))(Wrap);
