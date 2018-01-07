import React from 'react';
import { Card } from 'antd';
import CommentInput from '../components/Comment/CommentInput';
import CommentList from '../components/Comment/CommentList';
// import styles from './CommentApp.less';

class CommentApp extends React.PureComponent {
  // constructor() {
  //   super
  //   this.handleSubmitComment = this.handleSubmitComment.bind(this);
  // }
  constructor() {
    super();
    this.state = {
      comments: [],
    };
  }

  handleSubmitComment = (comment) => {
    if (!comment) return;
    if (!comment.username) return ('请输入用户名');
    if (!comment.content) return ('请输入评论内容');
    this.state.comments.push(comment);
    this.setState({
      comments: this.state.comments,
    });
  }

  render() {
    return (
      <div>
        <Card>
          <CommentInput
            onSubmit={this.handleSubmitComment.bind(this)}
          />
          <CommentList
            comments={this.state.comments}
          />
        </Card>
      </div>
    );
  }
}

export default CommentApp;
