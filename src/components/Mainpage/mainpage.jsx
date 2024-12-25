import React from 'react';
import './mainpage.css';

const PageHeader = ({ title, backgroundImage }) => {
  return (
    <div
      className="page-header"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="page-title">{title}</h1>
    </div>
  );
};

export default PageHeader;
