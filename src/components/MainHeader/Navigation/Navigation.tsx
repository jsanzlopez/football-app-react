import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
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
            <NavLink activeClassName='active' to='/home'>Home</NavLink>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <NavLink activeClassName='active' to='/player-list'>Player List</NavLink>
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
