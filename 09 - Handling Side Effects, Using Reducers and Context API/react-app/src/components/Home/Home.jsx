import React, { useContext } from 'react';

import Card from '../UI/Card/Card';
import Button from 'components/UI/Button/Button';
import classes from './Home.module.css';
import AuthContext from 'context/authContext';

const Home = function (props) {
  const context = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={context.onLogout}>Logout</Button>
      {/* <Button onClick={props.onLogout}>Logout</Button> */}
    </Card>
  );
};

export default Home;
