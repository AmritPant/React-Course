import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { authSliceActons } from "../store";

const Auth = () => {
  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    dispatch(authSliceActons.logIn());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onSubmitHandler}>
          <div className={classes.control}>
            <label>Email</label>
            <input type="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
