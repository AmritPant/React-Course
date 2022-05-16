import useInput from '../Hooks/use-input';

const BasicForm = props => {
  const {
    valueIsValid: nameInputIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameINputBlurHandler,
    reset: resetNameInput,
  } = useInput(value => value.trim().length > 0);

  const {
    valueIsValid: lastNameInputIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameInputChangeHandler,
    inputBlurHandler: lastNameINputBlurHandler,
    reset: resetlastNameInput,
  } = useInput(value => value.trim().length > 0);

  const {
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(value => value.includes('@'));

  let fromIsValid = false;
  if (nameInputIsValid && lastNameInputIsValid && emailIsValid)
    fromIsValid = true;

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const lastNameINputClasses = lastNameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';

  const formSubmitHandler = event => {
    event.preventDefault();

    if (!fromIsValid) return;
    resetNameInput();
    resetlastNameInput();
    resetEmail();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label>First Name</label>
          <input
            onChange={nameInputChangeHandler}
            onBlur={nameINputBlurHandler}
            type="text"
          />
          {nameInputHasError && (
            <p className="error-text">Name must not be empty </p>
          )}
        </div>
        <div className={lastNameINputClasses}>
          <label>Last Name</label>
          <input
            type="text"
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameINputBlurHandler}
          />
          {lastNameInputHasError && (
            <p className="error-text">Name must not be empty </p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label>E-Mail Address</label>
        <input
          type="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">Email Should include '@' Symbol </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!fromIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
