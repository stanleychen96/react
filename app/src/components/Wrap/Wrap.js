import React from 'react';
import { Row, Col } from 'antd';
import Leftwrap from './Leftwrap';
import Rightwrap from './Rightwrap';
import styles from './index.less';

class Wrap extends React.Component {
  render() {
    return (
      <div className={styles.sidebar}>
        <Row>
          <Col span={8} push={14}>
            <div>
              <Rightwrap />
            </div>
          </Col>
          <Col span={14} pull={8}>
            <div>
              <Leftwrap />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Wrap;
