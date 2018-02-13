import React, { Component } from 'react';
import { NavBar, NavItem, Page, NavIcon, MobileNavMenu, MobileNavLink } from './components';
import './assests/styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isMenuOpen: false
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 2000);
  }

  menuPress = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen})
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
            <NavIcon menuPress={this.menuPress} />
            <NavItem title={"Dawson M."} />
            <NavItem title={"About Me"} />
          </NavBar>
          {
            this.state.isMenuOpen ? <MobileNavMenu>
                                      <MobileNavLink title={"About Me"}/>
                                      <MobileNavLink title={"Projects"}/>
                                    </MobileNavMenu>
                                  :
                                  <Page />
          }
        </div>
      );
    }
  }
}

export default App;
