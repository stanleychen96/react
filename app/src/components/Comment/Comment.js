/**
 * 2018-01-01 StanleyChen
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './index.less';

class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    onDeleteComment: PropTypes.func,
    index: PropTypes.number,
  }

  constructor() {
    super();
    this.state = { timeString: '' };
  }
  componentWillMount() {
    this._updateTimeString(); // eslint-disable-line
    this._timer = setInterval( // eslint-disable-line
      this._updateTimeString.bind(this), // eslint-disable-line
      5000,
    );
  }

  handleDeleteComment = () => {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index);
    }
  }

  _updateTimeString = () => {
    const comment = this.props.comment;
    const duration = (+Date.now() - comment.createdTime) / 1000;
    this.setState({
      timeString: duration > 60
        ? `${Math.round(duration / 60)} 分钟前`
        : `${Math.round(Math.max(duration, 1))} 秒前`,
    });
  }

  render() {
    return (
      <div className={styles.comment}>
        <div className={styles.commentUser}>
          <span>{this.props.comment.username} </span>：
        </div>
        <p>{this.props.comment.content}</p>
        <span
          className={styles.commentCreatedtime}
        >
          {this.state.timeString}
        </span>
        <span
          onClick={this.handleDeleteComment}
          className={styles.commentDelete}
        >
          删除
        </span>
      </div>
    );
  }
}

export default Comment;
