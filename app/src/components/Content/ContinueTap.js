import React from 'react';
import { Icon } from 'antd';
// import PropTypes from 'prop-types';
import { Link } from 'dva/router';
import { Route } from 'react-router-dom';
import styles from './index.less';

class ContinueTap extends React.Component {
  // static defaultProps = {
  //   count: '',
  // }

  // static PropTypes = {
  //   count: PropTypes.string,
  // }

  // componentWillMount() {
  //   this.props.dispatch({
  //     type: 'content/fetchContent',
  //   });
  // }

  // handleSubmit = () => {
  //   if (this.props.onSubmit) {
  //     const { count } = this.props;
  //     this.props.onSubmit({ count });
  //     console.log('handleSubmit', count);
  //   }
  // }

  render() {
    // const { } = this.props;
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
                  id: 1,
                },
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
