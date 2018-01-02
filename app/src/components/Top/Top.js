import React from 'react';
import { Icon } from 'antd';
import styles from './Top.less';

// const Search = Input.Search;

class Top extends React.Component {
  render() {
    return (
      <div className={styles.topWrapper}>
        <div className={styles.left}>
          <a href="https://github/stanleychen96.com">
            <Icon type="github" style={{ fontSize: '32px' }} />
          </a>
        </div>
        {/* <div className={styles.right}>
          <Search
            defaultValue="Search and hit enter"
            style={{ width: 200 }}
            className={styles.search}
          />
        </div> */}
      </div>
    );
  }
}

export default Top;
