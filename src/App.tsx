import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { Dashboard } from './components/dashboard';

import './App.css';

class App extends React.Component {
  public render() {
    // TODO remove it 
    fetch('http://localhost:3500/workspaces')
      .then(result => result.json())
      .then(body => console.log(body));

    return (
      <React.Fragment>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              SplitMoney
            </Typography>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
