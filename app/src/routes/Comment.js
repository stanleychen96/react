import React from 'react';
import { Card } from 'antd';
import CommentInput from '../components/Comment/CommentInput';
import CommentList from '../components/Comment/CommentList';

export default () => (
  <Card>
    <CommentInput />
    <CommentList />
  </Card>
);

