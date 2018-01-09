import React from 'react';
import Content from '../../components/Content';
import ReturnTap from '../../components/Content/ReturnTap';

class ContinueRead extends React.Component {
  state = {
    item: {},
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.',
  };

  // componentWillMount() {
  //   // console.log(this.props.location.state);
  //   // const item = artical.contentInfo.filter(e => e.id === this.props.state.id);
  //   this.setState({
  //     item: item[0],
  //   });
  // }

  render() {
    return (
      <div>
        <Content />
        <ReturnTap />
      </div>
    );
  }
}
export default ContinueRead;
