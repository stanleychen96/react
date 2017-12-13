import React from 'react';
import { Icon, Input, AutoComplete } from 'antd';

class HeaderSearch extends React.Component {
  render() {
    return (
      <div className="certain-category-search-wrapper" style={{ width: 250 }}>
        <AutoComplete
          className="certain-category-search"
          dropdownClassName="certain-category-search-dropdown"
          dropdownMatchSelectWidth={false}
          dropdownStyle={{ width: 200 }}
          size="large"
          style={{ width: '100%' }}
          placeholder="input here"
          optionLabelProp="value"
        >
          <Input suffix={<Icon type="search" className="certain-category-icon" />} />
        </AutoComplete>
      </div>
    );
  }
}

export default HeaderSearch;
