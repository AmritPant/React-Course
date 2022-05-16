import { useState, useRef } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin(prevState => !prevState);
  };

  const submitHandler = event => {
    event.preventDefault();

    const entertedEmail = emailRef.current.value;
    const entertedPassword = passwordRef.current.value;

    setIsLoading(true);
    if (isLogin) {
    } else {
      const createUser = async () => {
        try {
          const response = await fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCH5jd8yoUV9wBymuTxr41CHEUCa0vJ9CQ',
            {
              method: 'POST',
              body: JSON.stringify({
                email: entertedEmail,
                password: entertedPassword,
                returnSecureToken: true,
              }),
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );

          if (!response.ok) {
            const data = await response.json();
            throw data;
          }
          setIsLoading(false);

          const data = response.json();
          console.log(data);
        } catch (err) {
          alert(err.error.message);
        }
      };
      createUser();
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input ref={emailRef} type="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" ref={passwordRef} id="password" required />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? 'Login' : 'Create Account'}</button>
          )}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
          {isLoading && <p>We are creating your account</p>}
        </div>
      </form>
    </section>
  );
};

export default AuthForm;

//  hello howAreYou
