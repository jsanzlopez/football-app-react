import React, { useContext } from 'react';
import AuthContext from '../../../store/auth-context';
import './Navigation.scss'

const Navigation = () => {
  const logOut = () => ctx.onLogOut();
  const ctx = useContext(AuthContext);
  return (
    <nav className="navigation-bar">
      <ul className="d-flex justify-content-end">
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={logOut}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
