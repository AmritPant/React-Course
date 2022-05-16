import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = props => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = event => {
    event.preventDefault();

    const entertedUsername = nameInputRef.current.value;
    const entertedAge = ageInputRef.current.value;

    if (
      entertedUsername.trim().length === 0 ||
      entertedAge.trim().length === 0
    ) {
      setError({
        errorStatus: true,
        errorTitle: 'Empty Feilds',
        errorMessage:
          'Your Input Feilds values need to be Non Empty, (Error: Non-empty input field)',
      });
      return;
    }
    if (+entertedAge < 1) {
      setError({
        errorStatus: true,
        errorMessage: 'Wrong Age',
        errorTitle: 'Please enter the correct age value',
      });
      return;
    }
    props.onAddUser(entertedUsername, entertedAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    nameInputRef.current.focus();
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error?.errorStatus && (
        <ErrorModal
          errorHandler={errorHandler}
          title={error?.errorTitle}
          message={error?.errorMessage}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          {/* another input */}
          <label htmlFor="usernames">Username</label>
          <input type="text" ref={nameInputRef} autoFocus />
          {/* another input */}
          <label htmlFor="age">Age (Years)</label>
          <input type="text" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
