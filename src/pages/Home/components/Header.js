import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Bell } from "react-feather";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SvgIcon from "@material-ui/core/SvgIcon";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles({
  AppBar: {
    boxShadow: "none",
  },
  img: {
    maxHeight: 50,
  },
  grow: {
    flexGrow: 1,
  },
  userSection: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    marginRight: 10,
   
  },
  bell: {
    marginRight: 10,
  },
});

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="inherit" className={classes.AppBar}>
      <Toolbar>
        <img src="images/logo.png" alt="Logo" className={classes.img} />
        <div className={classes.grow}></div>
        <div className={classes.userSection}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Botão II
          </Button>
          <SvgIcon className={classes.bell}>
            <Bell></Bell>
          </SvgIcon>
          <Avatar alt="Fernando Tavares" src="/" />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
