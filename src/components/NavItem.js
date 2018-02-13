import React from 'react';
import '../assests/styles/NavItem.css';

const handleMouseHover = () => {
  console.log("cool beans")
}

const NavItem = ({ title }) => {
  return (
    <div
        className="NavItem"
        onMouseEnter={handleMouseHover}
        onMouseLeave={handleMouseHover}
    >
      { title }
    </div>
  );
};

export { NavItem };
