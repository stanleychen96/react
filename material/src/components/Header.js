import React from 'react';
import PropTypes from 'prop-types';
import Menu, { MenuItem } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const classes = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});


class FlatButtons extends React.Component {
  state = {
    anchorEl: null,
    open: false,
  };

  // handleClick = event => {
  //   this.setState({ open: true, anchorEl: event.currentTarget });
  // };

  handleRequestClose = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <div className="">
        <icon />
        <div>
          <Button className={classes.button}>HOME</Button>
          <Button className={classes.button}>FEATURES</Button>
          <Button className={classes.button}>BLOG</Button>
          <Button className={classes.button}>TRAVELS</Button>
          <Button className={classes.button}>LIFETYLE</Button>
          <Button className={classes.button}>PAGES</Button>
          <Button
            aria-owns={this.state.open ? 'simple-menu' : null}
            aria-haspopup="true"
            onClick={this.handleClick}
            className={classes.button}
          >
            GALLERIES
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={this.state.anchorEl}
            open={this.state.open}
            onRequestClose={this.handleRequestClose}
            placement="bottom-start"
          >
            <MenuItem onClick={this.handleRequestClose}>GALLERIES</MenuItem>
            <MenuItem onClick={this.handleRequestClose}>CLASSIC GALLERY</MenuItem>
            <MenuItem onClick={this.handleRequestClose}>VIDEO GALLERY</MenuItem>
          </Menu>
          <Button className={classes.button}>ABOUT ME</Button>
        </div>
      </div>
    );
  }
}

FlatButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(classes)(FlatButtons);
