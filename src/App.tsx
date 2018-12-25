import * as React from 'react';
import './App.css';

import logo from './assets/logo.svg';

class App extends React.Component {
  public render() {
    // TODO remove it 
    fetch('http://localhost:3500/workspaces')
      .then(result => result.json())
      .then(body => console.log(body));

    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to React</h1>
        </header>
        <p className="app-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
