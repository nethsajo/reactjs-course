import React, { useContext } from 'react';
import AuthContext from 'context/authContext';

import classes from './Navigation.module.css';

const Navigation = function () {
  const context = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {/* If not using useContext; props.isLoggedIn && ... */}
        {context.isLoggedIn && (
          <React.Fragment>
            <li>
              <a href="/">Users</a>
            </li>
            <li>
              <a href="/">Admin</a>
            </li>
            <li>
              <button onClick={context.onLogout}>Logout</button>
              {/* If not using useContext */}
              {/* <button onClick={props.onLogout}>Logout</button> */}
            </li>
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
