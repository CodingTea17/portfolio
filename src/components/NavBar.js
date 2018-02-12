import React from 'react';
import '../assests/styles/NavBar.css';

const NavBar = ({ children }) => {
  return (
    <div className="NavBar">
      { children }
    </div>
  );
};

export { NavBar };
