/**
 * 2018-01-01 StanleyChen
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.less';

class CommentInput extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  }
  constructor() {
    super();
    this.state = {
      content: '',
      username: '',
    };
    this._loadUsername = this._loadUsername.bind(this); // eslint-disable-line
  }

  componentWillMount() {
    this._loadUsername(); // eslint-disable-line
  }

  componentDidMount() {
    this.textarea.focus();
  }

  _loadUsername = () => {
    const username = localStorage.getItem('username'); // eslint-disable-line
    if (username) {
      this.setState({ username });
    }
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  }

  handleContentChange = (event) => {
    this.setState({
      content: event.target.value,
    });
  }

  ref = (textarea) => {
    this.textarea = textarea;
  }

  _saveUsername = (username) => {
    localStorage.setItem('username', username); // eslint-disable-line
  }

  handleUsernameBlur = (event) => {
    this._saveUsername(event.target.value); // eslint-disable-line
  }

  handleSubmit = () => {
    if (this.props.onSubmit) {
      this.props.onSubmit({
        username: this.state.username,
        content: this.state.content,
        createdTime: +new Date(),
      });
    }
    this.setState({ content: '' });
  }

  render() {
    return (
      <div className={styles.commentInput}>
        <div className={styles.commentField}>
          <span className={styles.commentFieldName}>用户名：</span>
          <div className={styles.commentFieldInput}>
            <input
              onBlur={this.handleUsernameBlur}
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </div>
        </div>
        <div className={styles.commentField}>
          <span className={styles.commentFieldName}>评论内容：</span>
          <div className={styles.commentFieldInput}>
            <textarea
              ref={this.ref}
              onChange={this.handleContentChange}
              value={this.state.content}
            />
          </div>
        </div>
        <div className={styles.commentFieldButton}>
          <button onClick={this.handleSubmit}>
            发布
          </button>
        </div>
      </div>
    );
  }
}

export default CommentInput;
