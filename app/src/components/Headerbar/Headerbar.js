import React from 'react';
import styles from './Headerbar.less';

// const Search = Input.Search;

class Headerbar extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div
          className={styles.leftlogo}
        >
          <img
            src="http://lisbeth.premiumcoding.com/wp/wp-content/uploads/2017/09/lisbeth-logo-new-second.png"
            data-rjs="3"
            alt="Lisbeth WordPress Blog - Lisbeth WordPress blog"
          />
        </div>
      </div>
    );
  }
}

export default Headerbar;
