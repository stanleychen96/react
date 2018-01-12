/**
 * 2018-01-01 StanleyChen
 */

import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

class CommentList extends React.Component {
  static propTypes = {
    comments: PropTypes.array,
    onDeleteComment: PropTypes.func,
  }

  static defaultProps = {
    comments: [],
  }

  handleDeleteComment = (index) => {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index);
    }
  }

  render() {
    return (
      <div>
        {
          this.props.comments.map((comment, index) =>
            <Comment
              comment={comment}
              key={index}
              index={index}
              onDeleteComment={this.handleDeleteComment}
            />,
          )
        }
      </div>
    );
  }
}

export default CommentList;
