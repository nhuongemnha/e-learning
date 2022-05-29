import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./style";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  withStyles,
} from "@material-ui/core";
import { ImportContacts } from "@material-ui/icons";

class Header extends Component {
  render() {
    const { title, navLink, active } = this.props.classes;
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <ImportContacts />
          </IconButton>
          <Typography className={title} variant="h6">
            E-learning
          </Typography>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${active}` : `${navLink}`
            }
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? `${active}` : `${navLink}`
            }
            to="/signin"
          >
            Sign in
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${active}` : `${navLink}`
            }
            to="/signup"
          >
            Sign up
          </NavLink>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Header);
