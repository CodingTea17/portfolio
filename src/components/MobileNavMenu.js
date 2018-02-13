import React from 'react';
import '../assests/styles/MobileNavMenu.css';

const MobileNavMenu = ({ children }) => {
  return (
    <div className="MobileNavMenu">
      { children }
    </div>
  );
};

export { MobileNavMenu };
