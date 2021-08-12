import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2), // equivale 8*2
    width: 275,
    marginRight: theme.spacing(2),
  },
  button: {
    width: '100%',
  }
}));

const tags = [
  { id: 1, name: 'ReactJS' },
  { id: 2, name: 'Javascript' },
  { id: 3, name: 'Python' },
  { id: 4, name: 'Sass' },
  { id: 5, name: 'CSS' },
  { id: 6, name: 'NodeJS' },
]

function NavBar() {
  const classes = useStyles();

  return (

    <Paper className={classes.root}>
      <Button variant="outlined"
        color="secondary" className={classes.button}>
        Botão I
      </Button>
      <ListSubheader >{`Lista`}</ListSubheader>
     {
        tags.map((item) => (
          <ListItem dense button key={`item-${item.id}-${item.name}`}>
            <ListItemText primary={`${item.name}`}/>
          </ListItem>
        ))
     }
     <ListItem button>
       Outros
     </ListItem>
    </Paper>

  );
}

export default NavBar;
