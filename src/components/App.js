import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Toolbar from './Toolbar.js';
import Profile from './Profile.js';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
         <Toolbar/>
         <Profile/>
      </MuiThemeProvider>
    );
  }
}

export default App;
