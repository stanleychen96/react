import React from 'react';
import { connect } from 'dva';

import styles from './instagram.less';

// const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

class Instagram extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: 'http://lisbeth.premiumcoding.com/wp/wp-content/uploads/2016/10/lisbeth-demo1-16.3.jpg',
    };
  }

  refreshInstagram = () => {
    console.log('..');
    this.props.dispatch({
      type: 'instagram/fetchImg',
    });
  }

  render() {
    const { instagram } = this.props;
    console.log('1', instagram);

    return (
      <div className={styles.root}>
        <div className={styles.wrap}>
          {
            instagram.imgSource.map(item =>
              (
                <img
                  alt={item.alt}
                  key={item.key}
                  src={item.src}
                />
              ),
            )
          }
          <img
            src={this.state.refresh}
            alt="refresh"
            onClick={this.refreshInstagram}
          />
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  instagram: state.instagram,
}))(Instagram);
