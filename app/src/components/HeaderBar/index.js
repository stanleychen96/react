import React from 'react';
import { connect } from 'dva';
import styles from './index.less';

class Headerbar extends React.Component {

  render() {
    const { headerbar } = this.props;
    return (
      <div className={styles.root}>
        <div
          className={styles.leftlogo}
        >
          <img
            src={headerbar.src}
            data-rjs="3"
            alt={headerbar.alt}
          />
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  headerbar: state.headerbar,
}))(Headerbar);
