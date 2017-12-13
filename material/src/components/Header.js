import React from 'react';
import PropTypes from 'prop-types';
import Menu, { MenuItem, MenuList } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';

const classes = theme => ({
  root: {
    margin: theme.spacing.unit,
  },
});


class FlatButtons extends React.Component {
  state = {
    anchorEl: null,
    open: false,
  };

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <div className="">
        <icon />
        <div>
          <Menu>
            <MenuList>
              <MenuItem>
                1
              </MenuItem>
            </MenuList>
            <MenuList>2</MenuList>
            <MenuList>3</MenuList>
            <MenuList>4</MenuList>
            <MenuList>5</MenuList>
            <MenuList>6</MenuList>
            <MenuList>7</MenuList>
            <MenuList>8</MenuList>
          </Menu>
        </div>
      </div>
    );
  }
}

FlatButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(classes)(FlatButtons);
