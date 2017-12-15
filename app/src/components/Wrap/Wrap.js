import React from 'react';
import { Row, Col } from 'antd';
// import Leftwrap from './Leftwrap';
import Rightwrap from './Rightwrap';
import styles from './index.less';

class Wrap extends React.Component {
  render() {
    return (
      <div className={styles.sidebar}>
        <Row
          type="flex"
          justify="space-around"
        >
          <Col
            span={12}
          >
            <div>
              <Rightwrap />
            </div>
          </Col>
          <Col
            span={8}
          >
            <div>
              <Rightwrap />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Wrap;
