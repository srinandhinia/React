import { useState } from "react";
export function useInput(value, validationFn) {
  const [loginValue, setLoginValue] = useState(value);

  const [didBlur, setDidBlur] = useState(false);
  const valueIsValid = validationFn(loginValue);

  function handleLoginInputValues(event) {
    setLoginValue(event.target.value);

    setDidBlur(false);
  }

  function handleInputBlur() {
    setDidBlur(true);
  }

  return {
    loginValue,
    handleLoginInputValues,
    handleInputBlur,
    hasError: didBlur && !valueIsValid,
  };
}
