import React from 'react';
import { connect } from 'dva';
import Content from '../Content/Content';
import Rightwrap from './Rightwrap';
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
                  <Content
                    key={item.key}
                    labelA={item.labelA}
                    labelB={item.labelB}
                    title={item.title}
                    author={item.author}
                    commentsNum={item.commentsNum}
                  />
                ),
              )
            }
          </div>
          <Rightwrap />
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  content: state.content,
}))(Wrap);
