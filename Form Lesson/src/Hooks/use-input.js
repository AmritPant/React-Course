import { useState } from 'react';

const useInput = validateValue => {
  const [entertedValue, setEntertedValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueChangeHandler = event => {
    setEntertedValue(event.target.value);
  };

  const valueIsValid = validateValue(entertedValue);
  const hasError = !valueIsValid && isTouched;

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEntertedValue('');
    setIsTouched(false);
  };

  return {
    hasError,
    reset,
    valueChangeHandler,
    inputBlurHandler,
    valueIsValid,
  };
};

export default useInput;
