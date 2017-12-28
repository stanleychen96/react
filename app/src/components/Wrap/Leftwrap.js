
import React from 'react';
import Content from '../Content/Content';
// import styles from './Left.less';

class Leftwrap extends React.Component {
  state = {
    content: 'o be successful, a home office needs to be both functional and efficient. You are going to be working in this environment for several hours each day so it is important that you make it as comfortable as possible. You can design a practical and comfortable home office by taking a few steps towards finding the right space, furnishing it, and making it attractive and efficient.',
  };
  render() {
    return (
      <div>
        <Content />
      </div>
    );
  }
}

export default Leftwrap;
