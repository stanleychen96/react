import React from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import styles from './index.less';

class CommentWrap extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
  }

  componentWillMount() {
    this._loadComments(); // eslint-disable-line
  }

  componentWillUnmount() {
    clearInterval(this._timer); // eslint-disable-line
  }

  _loadComments = () => {
    let comments = localStorage.getItem('comments'); // eslint-disable-line
    if (comments) {
      comments = JSON.parse(comments);
      this.setState({ comments });
    }
  }

  _saveComments = (comments) => {
    localStorage.setItem('comments', JSON.stringify(comments)); // eslint-disable-line
  }

  handleDeleteComment = (index) => {
    const comments = this.state.comments;
    comments.splice(index, 1);
    this.setState({ comments });
    this._saveComments(comments); // eslint-disable-line
  }

  handleSubmitComment = (comment) => {
    if (!comment) return;
    if (!comment.username) return alert('请输入用户名'); //eslint-disable-line
    if (!comment.content) return alert('请输入评论内容'); //eslint-disable-line
    const comments = this.state.comments;
    comments.push(comment);
    this.setState({ comments });
    this._saveComments(comments); // eslint-disable-line
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <CommentInput
          onSubmit={this.handleSubmitComment}
        />
        <CommentList
          onDeleteComment={this.handleDeleteComment}
          comments={this.state.comments}
        />
      </div>
    );
  }
}

export default CommentWrap;
