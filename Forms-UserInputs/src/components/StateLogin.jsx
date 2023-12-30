import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function StateLogin() {
  const {
    loginValue: emailValue,
    handleLoginInputValues: handleEmailValue,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    loginValue: passwordValue,
    handleLoginInputValues: handlePasswordValue,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();

    if (emailHasError && passwordHasError) {
      return;
    }
  }

  // const emailIsInvalid =
  //   didBlur.email &&
  //   !isEmail(loginValues.email) &&
  //   !isNotEmpty(loginValues.email);

  // const passwordIsInvalid =
  //   didBlur.password && !hasMinLength(loginValues.password, 6);
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   console.log("form submitted");
  //   console.log(loginValues);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onChange={handleEmailValue}
          onBlur={handleEmailBlur}
          value={emailValue}
          error={emailHasError && "Please enter valid email...@ is missing"}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={handlePasswordValue}
          onBlur={handlePasswordBlur}
          value={passwordValue}
          error={passwordHasError && "Password length must be atleast 6"}
        />
        {/* <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => handleLoginInputValues("email", event)}
            onBlur={() => handleInputBlur("email")}
            value={loginValues.email}
            error={emailIsInvalid && <p>Please enter valid email!</p>}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter valid email!</p>}
          </div>
        </div> */}

        {/* <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={() => handleLoginInputValues("password", event)}
            value={loginValues.password}
          />
        </div> */}
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
