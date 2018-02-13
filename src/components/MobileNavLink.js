import React from 'react';
import "../assests/styles/MobileNavLink.css";

const MobileNavLink = ({ title }) => {
  return (
    <div className="MobileNavLink">
      { title }
    </div>
  );
};

export { MobileNavLink };
