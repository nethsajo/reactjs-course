import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from 'context/authContext';

const App = function () {
  const context = useContext(AuthContext);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const userStorageLoggedIn = localStorage.getItem('isLoggedIn');

  //   if (userStorageLoggedIn === '1') {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem('isLoggedIn', '1');
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem('isLoggedIn');
  //   setIsLoggedIn(false);
  // };

  return (
    <>
      {/* If not using useContext */}
      {/* <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} /> */}
      <MainHeader />
      <main>
        {/* {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />} */}
        {!context.isLoggedIn && <Login />}
        {context.isLoggedIn && <Home />}
      </main>
    </>
  );
};

export default App;

/**
 * useEffect() hook is simply another built in Hook. It's another function that we can run inside our component function.
 * useEffect() will only run once after the first render. It runs immediately after the page has been rendered for the first time
 * The useEffect() hook is called with two arguments/parameters.
 * The first argument is a function that should be executed after every component evaluation if the specified dependencies changed.
 * The specified dependencies are the second argument that you pass in. That's an array full of dependencies.
 * Whenever such a dependency changes that first function will re-run.
 * In that first function we can put any side effect code and that code will then only execute when the dependencies specied by we changed.
 * useEffect() has one main job its there to handle side effects
 */

/**
 * AuthContext provider is a component that we can use in our JSX code and we can wrap it around other components
 * Those other components and all their descendant components (all their children) and their children's children and so on.
 * All those components will now have access to that Context
 * The main header, but also to log in and home component and all their children will have access to AuthContext
 * To have access to the AuthContext value, we need to listen and we can listen in two ways.
 * We can listen by using AuthContext consumer. The consumer takes a child which actually should be a function.
 * Another way is using useContext() hook. useContext () hook takes a context parameter.
 */
