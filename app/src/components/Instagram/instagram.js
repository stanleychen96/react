import React from 'react';
import { Row, Col } from 'antd';
import styles from './instagram.less';

// const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

class Instagram extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <Row type="flex" justify="start" align="top" className={styles.row}>
          <Col span={6}>
            <img className={styles.instagramImg} src="https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/12783869_590596704430436_506074379_n.jpg" alt="" />
          </Col>
          <Col span={6} push={6}>
            <img className={styles.instagramImg} src="https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/10011319_542781322561082_1003420003_n.jpg" alt="" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Instagram;
