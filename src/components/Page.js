import React from 'react';
import '../assests/styles/Page.css';

const Page = ({ children }) => {
  return (
    <div className="Page">
      { children }
    </div>
  );
};

export { Page };
