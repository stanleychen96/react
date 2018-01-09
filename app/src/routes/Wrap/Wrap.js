import React from 'react';
import { connect } from 'dva';
import Content from '../../components/Content';
import ContinueTap from '../../components/Content/ContinueTap';
import RightWrap from '../../components/RightWrap/';
import styles from './Wrap.less';

class Wrap extends React.Component {
  render() {
    const { artical } = this.props;
    console.log(artical.contentInfo, 'artical.contentInfo');
    return (
      <div className={styles.flex}>
        <div>
          {
            artical.contentInfo.map(item =>
              (
                <div>
                  <Content
                    labelA={item.labelA}
                    labelB={item.labelB}
                    title={item.title}
                    author={item.author}
                    commentsNum={item.commentsNum}
                    words={item.words}
                    firstWord={item.firstWord}
                  />
                  <ContinueTap aticleId={item.id} />
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
  artical: state.content,
}))(Wrap);
