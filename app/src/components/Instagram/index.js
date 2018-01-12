/**
 * 2018-01-01 StanleyChen
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.less';

class Instagram extends React.Component {
  static defaultProps = {
    alt: '',
    src: '',
    key: '',
    handleInstagram: () => {},
  }

  static PropTypes = {
    alt: PropTypes.string,
    src: PropTypes.string,
    key: PropTypes.string,
    handleInstagram: PropTypes.func,
  }

  render() {
    const { alt, src, key, handleInstagram } = this.props;

    return (
      <div className={styles.root}>
        <div className={styles.wrap}>
          <img
            alt={alt}
            key={key}
            src={src}
            onClick={handleInstagram}
          />
        </div>
      </div>
    );
  }
}

export default Instagram;
