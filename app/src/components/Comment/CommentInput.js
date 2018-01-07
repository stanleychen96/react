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
  }

  // componentWillMount() {
  //   this._loadUsername();
  // }

  // _loadUsername = () => {
  //   const username = localStorage.getItem('username');
  //   if (username) {
  //     this.setState({ username });
  //   }
  // }

  componentDidMount() {
    this.textarea.focus();
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

  // _saveUsername = (username) => {
  //   localStorage.setItem('username', username);
  // }

  handleUsernameBlur = (event) => {
    this.saveUsername(event.target.value);
  }

  handleSubmit = () => {
    if (this.props.onSubmit) {
      const { username, content } = this.state;
      this.props.onSubmit({ username, content });
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
