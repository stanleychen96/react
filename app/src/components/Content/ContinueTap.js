import React from 'react';
import { Icon } from 'antd';
import { Link } from 'dva/router';
import { Route } from 'react-router-dom';
import styles from './index.less';

class ContinueTap extends React.Component {

  handleSubmit = () => {
    // console.log(item, 'hanadleSubmit');
  }
  render() {
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
              onClick={this.handleSubmit}
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
