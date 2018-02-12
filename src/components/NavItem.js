import React from 'react';
import '../assests/styles/NavItem.css';

const NavItem = ({ title }) => {
  return (
    <div className="NavItem">
      { title }
    </div>
  );
};

export { NavItem };
