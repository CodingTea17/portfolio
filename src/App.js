import React, { Component } from 'react';
import Media from "react-media";
import { NavBar, NavItem, Page } from './components';
import './assests/styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <NavBar>
          <Media
            query="(max-width: 719px)"
            render={() => <i class="fas fa-bars fa-4x" style={{color: "white", padding: "7px"}}></i>}
          />
          <NavItem title={"Dawson M."} />
          <NavItem title={"About Me"} />
        </NavBar>
        <Page />
      </div>
    );
  }
}

export default App;
