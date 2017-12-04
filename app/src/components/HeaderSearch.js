import React, { PureComponent } from 'react';
import { AutoComplete } from 'antd';
// import className from 'classnames';
// import styles from './HeaderSearch.less';

export default class HeaderSearch extends PureComponent {
  static state = {
  }

  render() {
    return (
      <div>
        {/* <Icon type="search" /> */}
        <AutoComplete
          style={{ width: 200 }}
          placeholder="本站搜索"
          filterOption={(inputValue, option) =>
            option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </div>
    );
  }
}
