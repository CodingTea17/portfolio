import React, { Component } from 'react';
import { NavBar, NavItem, Page, NavIcon } from './components';
import './assests/styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 2000);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <i className="fas fa-cog fa-spin fa-10x" style={{ color: "white", padding: "7px" }}></i>
        </div>
      );
    }
    else {
      return (
        <div className="App">
          <NavBar>
            <NavIcon />
            <NavItem title={"Dawson M."} />
            <NavItem title={"About Me"} />
          </NavBar>
          <Page />
        </div>
      );
    }
  }
}

export default App;
