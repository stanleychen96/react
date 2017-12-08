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

  handleSubmitComment = (comment) => {
    console.log(comment);
  }

  render() {
    return (
      <div>
        <Card>
          <CommentInput
            onSubmit={this.handleSubmitComment}
          />
          <CommentList />
        </Card>
      </div>
    );
  }
}

export default CommentApp;
