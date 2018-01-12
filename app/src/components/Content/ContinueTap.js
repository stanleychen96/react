/**
 * 2018-01-01 StanleyChen
 */

import React from 'react';
import { Icon } from 'antd';
import PropsTypes from 'prop-types';
import { Link } from 'dva/router';
import { Route } from 'react-router-dom';
import styles from './index.less';

class ContinueTap extends React.Component {
  static defaultprops = {
    handleSubmit: () => {},
  }
  static propsTypes = {
    handleSubmit: PropsTypes.func,
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className={styles.bottom}>
        <Icon
          type="smile-o"
          className={styles.icon}
        />
        <Route
          path="/"
          render={() => (
            <Link
              to={{
                pathname: '/continueRead',
                state: {
                  id: this.props.articleId,
                },
                search: `?id=${this.props.articleId}`,
              }}
              className={styles.link}
              onClick={handleSubmit}
            >
              Continue reading
            </Link>
          )}
        />
      </div>
    );
  }
}

export default ContinueTap;
