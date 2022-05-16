import useInput from '../Hooks/use-input';

const SimpleInput = props => {
  const {
    hasError: inputError,
    valueIsValid: entertedNameIsValid,
    reset: resetInputName,
    valueChangeHandler: oninputChangeHandler,
    inputBlurHandler: onInputBlurHandler,
  } = useInput(value => value.trim().length > 0);

  const {
    valueChangeHandler: onChangeEmailHandler,
    valueIsValid: entertedEmailIsValid,
    hasError: emailError,
    inputBlurHandler: onBlurEmailHandler,
    reset: resetEmail,
  } = useInput(value => value.includes('@'));

  let fromIsValid = false;
  if (entertedNameIsValid && entertedEmailIsValid) fromIsValid = true;

  const formSubmitHandler = event => {
    event.preventDefault();
    if (!fromIsValid) return;

    resetInputName();
    resetEmail();
  };

  const nameInputClasses = !inputError
    ? 'form-control'
    : 'form-control invalid';

  const emailInputClasses = !emailError
    ? 'form-control'
    : 'form-control invalid';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label>Your Name</label>
        <input
          type="text"
          onChange={oninputChangeHandler}
          onBlur={onInputBlurHandler}
        />
        {inputError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label>Email</label>
        <input
          type="email"
          onBlur={onBlurEmailHandler}
          onChange={onChangeEmailHandler}
        />
        {emailError && (
          <p className="error-text">Email Must contian '@' Symbol</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!fromIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
