import classes from "./UserProfile.module.css";
import { useSelector } from "react-redux";
import { Fragment } from "react";

const UserProfile = () => {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      {isLoggedIn && (
        <main className={classes.profile}>
          <h2>My User Profile</h2>
        </main>
      )}
    </Fragment>
  );
};

export default UserProfile;
