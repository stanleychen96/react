import React from 'react';
import Top from '../components/Top';
import Header from '../components/Header';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Top />
        <Header />
      </div>
    );
  }
}

export default Layout;
