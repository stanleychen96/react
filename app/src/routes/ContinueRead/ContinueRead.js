import React from 'react';
import { connect } from 'dva';
import Content from '../../components/Content';
import ReturnTap from '../../components/Content/ReturnTap';


class ContinueRead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: this.props.article,
      item: [],
    };
  }
  componentWillMount() {
    const item = this.state.article.contentInfo.filter(e => e.id === this.props.location.state.id);
    console.log(item, '1'); // eslint-disable-line
    this.setState({
      item: item[0],
    });
    console.log(this.state.item, '2'); // eslint-disable-line
  }

  render() {
    return (
      <div>
        <Content />
        <ReturnTap />
      </div>
    );
  }
}
export default connect(state => ({
  article: state.continueread,
}))(ContinueRead);
