import React from 'react';
import './MainHeader.scss';
import Navigation from './Navigation/Navigation';

export interface MainHeaderProps {
  isAuthenticated: boolean;
  onLogout: Function;
}

const MainHeader = (props: MainHeaderProps) => {
  return (
    <header className="main-header d-flex justify-content-between">
      <h4 className="d-flex align-items-center">Total Football App</h4>
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
