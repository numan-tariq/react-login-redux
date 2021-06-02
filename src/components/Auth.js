import classes from './Auth.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const loginHandler = (event) => {
    event.preventDefault();

    dispatch(authActions.login({
      email,
      password
    }));
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit = { loginHandler }>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange = { emailHandler }/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange = { passwordHandler }/>
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
