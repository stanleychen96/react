import React from 'react';
import Leftwrap from './Leftwrap';
import Content from '../Content/Content';
import Rightwrap from './Rightwrap';
// import Introduce from '../Introduce/Introduce';
import styles from './Wrap.less';

class Wrap extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.flex}>
          <div>
            <Content />
          </div>
          <Rightwrap />
        </div>
      </div>
    );
  }
}

export default Wrap;
