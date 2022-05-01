import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import AuthContext from 'context/authContext';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }

  if (action.type === 'INPUT_BLUR') {
    return { ...state, isValid: state.value.includes('@') };
  }

  return state;
};

const passwordReducer = (state, action) => {
  switch (action.type) {
    case 'USER_INPUT':
      return { value: action.val, isValid: action.val.trim().length > 6 };
    case 'INPUT_BLUR':
      return { ...state, isValid: state.value.trim().length > 6 };
    default:
      return state;
  }
};

const initialState = {
  value: '',
  isValid: null,
};

const Login = function (props) {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const context = useContext(AuthContext);

  const [emailState, dispatchEmail] = useReducer(emailReducer, initialState);
  //emailState = initialState
  // console.log(emailState);

  const [passwordState, dispatchPassword] = useReducer(
    passwordReducer,
    initialState
  );
  //passwordState = initialState

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  // This effect function runs after every component render cycle
  useEffect(() => {
    console.log('EFFECT RUNNING');

    // This cleanup function runs before the state function as a whole runs but not before the first time it runs
    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  //useState & useEffect
  // useEffect(() => {
  //   const handler = setTimeout(() => {
  //     console.log('Checking form validity!');
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //     return () => {
  //       console.log('CLEANUP');
  //       clearInterval(handler);
  //     };
  //   }, 500);
  // }, [enteredEmail, enteredPassword]);

  const { isValid: emailIsValid } = emailState;

  const { isValid: passwordIsValid } = passwordState;

  //useReducer & useEffect
  useEffect(() => {
    const handler = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(handler);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = event => {
    // setEnteredEmail(event.target.value);

    // setFormIsValid(event.target.value.includes('@') && enteredPassword.trim().length > 6); //useState
    // setFormIsValid(passwordState.isValid && event.target.value.includes('@')); //useReducer
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
  };

  const passwordChangeHandler = event => {
    // setEnteredPassword(event.target.value);

    // setFormIsValid(enteredEmail.includes('@') && event.target.value.trim().length > 6); //useState
    // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6); //useReducer
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes('@')); //useState
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(passwordState.value.trim().length > 6); //useState
    // setPasswordIsValid(passwordState.isValid)
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = event => {
    event.preventDefault();
    // props.onLogin(enteredEmail, enteredPassword); //useState
    // props.onLogin(emailState.value, passwordState.value); //useReducer
    if (formIsValid) {
      context.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          type="email"
          id="email"
          ref={emailInputRef}
          label={'Email'}
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          type="password"
          id="password"
          ref={passwordInputRef}
          label={'Password'}
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

/**
 * In the useEffect function (pass as argument), We can return something that has to be one specific thing. It needs to be a function itself.
 * We can return a function like an anonymous arrow function. That's a so called cleanup function.
 * This will run as a cleanup process before useEffect executes the function the next time
 * Whenever the useEffect function runs before it runs, except for the very first time when it runs, the cleanup function will run
 * The cleanup function will run whenever the component we're specifying the effect in unmounts from the DOM
 */

/**
 * useReduce is another built in Hook and it will help us with state management
 * Can be used as replacement for useState() if we need "more powerful state management"
 * It always return an array with exactly two values and we can therefore use array destructuring to pull out values
 * The first element is state snapshot. It is used in the component re-render/re-evaluation cycle
 * The second element is a function that can be used to dispatch a new action (i.e. trigger an update of the state)
 * Reducer function that is triggered automatically once an action is dispatched (via dispatchFn()). It receives the latest state snapshot and should return the new, updated state.
 * We can also set an initialState and initial function
 * The reducer function receives two arguments/parameters. First is our last state snapshot and the other one is action that was dispatched
 */
