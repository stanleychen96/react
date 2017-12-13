import React from 'react';
import { connect } from 'dva';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Search from 'grommet/components/Search';
// import Actions from 'grommet/components/Actions';


class Layout extends React.Component {

  state = {
    collapsed: false,
  };

  render() {
    return (
      <div>
        <Header>
          <Title>
            Sample Title
          </Title>
          <Box
            flex={this.state.flex}
            justify="end"
            direction="row"
            responsive={false}
          >
            <Search
              inline={this.state.inline}
              fill={this.state.fill}
              size="medium"
              placeHolder="Search"
              dropAlign={{ right: 'right' }}
            />
            <Menu
              // icon={<Actions />}
              dropAlign={{ right: 'right' }}
            >
              <Anchor
                href="#"
                className="active"
              >
                First
              </Anchor>
              <Anchor
                href="#"
              >
                Second
              </Anchor>
              <Anchor
                href="#"
              >
                Third
              </Anchor>
            </Menu>
          </Box>
        </Header>
      </div>
    );
  }
}

export default connect()(Layout);
