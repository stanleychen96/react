import React from 'react';
import Leftwrap from './Leftwrap';
import Rightwrap from './Rightwrap';
// import Introduce from '../Introduce/Introduce';
// import styles from './Wrap.less';

class Wrap extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Leftwrap />
          <Rightwrap />
        </div>
      </div>
    );
  }
}

export default Wrap;
