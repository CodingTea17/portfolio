import React, { Component } from 'react';
import Media from "react-media";

class NavIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    }
  }

  hamburgerPress = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
    this.props.menuPress();
  }

  render() {
    return (
      <div>
        <Media
          query="(max-width: 719px)"
          render={() => {
            return (
              <div>
                {
                  this.state.isMenuOpen ?
                                        <i
                                          onClick={this.hamburgerPress}
                                          className="fas fa-times fa-4x"
                                          style={{color: "#FFCA28", padding: "7px"}}
                                        ></i>
                                        :
                                        <i
                                          onClick={this.hamburgerPress}
                                          className="fas fa-bars fa-4x"
                                          style={{color: "#FFCA28", padding: "7px"}}
                                        ></i>
                }
              </div>
            )
          }}
        />
      </div>
    );
  }
}

export { NavIcon };
