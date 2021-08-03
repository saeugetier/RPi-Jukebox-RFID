import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Library from './components/Library';
import Navigation from './components/Navigation';
import Player from './components/Player'
import Settings from './components/Settings'

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  navigationPlaceholder: {
    margin: 10,
    marginBottom: 64,
  },
}));

const Routes = (props) => {
  const classes = useStyles();

  return (
    <HashRouter>
      <Grid item xs={12} md={6} className={classes.navigationPlaceholder}>
        <Switch>
          <Route exact path='/'>
            <Player />
          </Route>
          <Route exact path='/library'>
            <Library />
          </Route>
          <Route exact path='/settings'>
            <Settings />
          </Route>
        </Switch>
      </Grid>
      <Navigation />
    </HashRouter>
  );
}

export default Routes