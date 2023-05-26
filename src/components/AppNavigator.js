import { AppBar, Toolbar, Typography} from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  AppBar: {
    backgroundColor: 'black',
   marginBottom: 100
  },
  Link: {
    textDecoration:'none'
  },
  title: {
    cursor: 'point',
    color: 'white'
  },
}),

);

export default function AppNavigator() {
const classes = useStyles()

  return (
   
   <AppBar className={classes.AppBar} position='fixed'>

        <Toolbar>
          <Link to='/' className={classes.link}>
            <Typography className={classes.title} >Pokedex</Typography>
          </Link>
        </Toolbar>
     
   </AppBar>
  

  );
};
