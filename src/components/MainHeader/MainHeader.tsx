import React from 'react';
import './MainHeader.scss';
import Navigation from './Navigation/Navigation';

const MainHeader = () => {
  return (
    <header className="main-header d-flex justify-content-between">
      <h4 className="d-flex align-items-center">Total Football App</h4>
      <Navigation/>
    </header>
  );
};

export default MainHeader;
