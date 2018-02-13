import React, { Component } from 'react';
import Media from "react-media";
import { NavBar, NavItem, Page } from './components';
import './assests/styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({loading: false}), 3000);
  }

  render() {
    if (this.state.loading) {
      return <div><i className="fas fa-cog fa-spin fa-10x" style={{ color: "white", padding: "7px" }}></i></div>;
    }
    else {
      return (
        <div className="App">
          <NavBar>
            <Media
              query="(max-width: 719px)"
              render={() => {
                return (
                  <i className="fas fa-bars fa-4x" style={{color: "#FFCA28", padding: "7px"}}></i>
                )
              }}
            />
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
