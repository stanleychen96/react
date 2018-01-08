import React from 'react';
import Content from '../../components/Content';
import ReturnTap from '../../components/Content/ReturnTap';

class ContinueRead extends React.Component {
  state = {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.',
  };
  render() {
    return (
      <div>
        <Content />
        <ReturnTap />
      </div>
    );
  }
}
export default ContinueRead;
