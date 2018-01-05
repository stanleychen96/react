import React from 'react';
import { } from 'antd';
import { Link } from 'dva/router';
import Content from '../components/Content/Content';

class ContinueRead extends React.Component {
  state = {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.',
  };
  render() {
    return (
      <div>
        <Content />
        <Link to="/">
          return
        </Link>
      </div>
    );
  }
}
export default ContinueRead;

