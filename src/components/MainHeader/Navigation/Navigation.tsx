import React from 'react';
import './Navigation.scss'

export interface NavigationProps {
  isLoggedIn: boolean;
  onLogout: Function;
}

const Navigation = (props: NavigationProps) => {

  const logOut = () => props.onLogout();
  return (
    <nav className="navigation-bar">
      <ul className="d-flex justify-content-end">
        {props.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={logOut}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
