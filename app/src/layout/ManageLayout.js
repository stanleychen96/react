import React from 'react';
import { Button } from 'antd';
import styles from './Manage.less';

class ManageLayout extends React.Componment {

  rewriteIntroduce = () => {
    this.props.dispather({
      type: 'rewriteIntroduce',
    });
  }
  render() {
    return (
      <div className={styles.root}>
        <Button onclick={this.rewriteIntroduce}>修改个人简介</Button>
        <Button onclick={this.getPersonalPhoto}>上传个人图片</Button>
      </div>
    );
  }
}

export default ManageLayout;
