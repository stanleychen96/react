import React, { Component } from 'react';
import styles from './index.less';


class CommentInput extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      content: '',
    };
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handleContentChange(event) {
    this.setState({
      content: event.target.value,
    });
  }

  render() {
    return (
      <div className={styles.commentInput}>
        <div className={styles.commentField}>
          <span className={styles.commentFieldName}>用户名：</span>
          <div className={styles.commentFieldInput}>
            <input
              value={this.state.username}
              onChange={this.handleUsernameChange.bind(this)}
            />
          </div>
        </div>
        <div className={styles.commentField}>
          <span className={styles.commentFieldName}>评论内容：</span>
          <div className={styles.commentFieldInput}>
            <textarea
              value={this.state.content}
              onChange={this.handleContentChange.bind(this)}
            />
          </div>
        </div>
        <div className={styles.commentFieldButton}>
          <button>
            发布
          </button>
        </div>
      </div>
    );
  }
}

export default CommentInput;
