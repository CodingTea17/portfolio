import React, { Component } from 'react';
import { NavBar, NavItem, Page } from './components';
import './assests/styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar>
          <NavItem title={"Dawson M."} />
          <NavItem title={"About Me"} />
        </NavBar>
        <Page />
      </div>
    );
  }
}

export default App;
