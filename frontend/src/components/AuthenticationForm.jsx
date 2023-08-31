import React, { useContext } from "react";
import { Form, Link, useSearchParams } from "react-router-dom";
import classes from "./AuthenticationForm.module.css";
import { FcGoogle } from "react-icons/fc";
import AuthContext from "../store/auth-context";
import useInput from "../hooks/use-input";

const AuthenticationForm = () => {
  //Used custom hooks for form validation
  const {
    value: enteredNameValue,
    isValid: isNameValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurhandler: nameBlurhandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "" && /^[^\d]*$/.test(value));
  const {
    value: enteredEmailValue,
    isValid: isEmailValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurhandler: emailBlurhandler,
    reset: resetEmail,
  } = useInput(
    (value) =>
      value.trim() !== "" &&
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
  );
  const {
    value: enteredPasswordValue,
    isValid: isPasswordValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurhandler: passwordBlurhandler,
    reset: resetPassword,
  } = useInput(
    (value) =>
      value.trim() !== "" &&
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()-_=+[\]{}|;:'",.<>/?]{8,}$/.test(
        value
      )
  );
  const {
    value: enteredCPasswordValue,
    isValid: isCPasswordValid,
    hasError: cpasswordHasError,
    valueChangeHandler: cpasswordChangeHandler,
    inputBlurhandler: cpasswordBlurhandler,
    reset: resetCpassword,
  } = useInput((value) => value.trim() === enteredPasswordValue);

  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const authCtx = useContext(AuthContext);
  const loginhandler = () => {
    authCtx.isLoggedIn = true;
  };

  let formISValid = false;

  if (
    (isNameValid && isEmailValid && isPasswordValid && isCPasswordValid) ||
    (isLogin && isNameValid && isEmailValid && isPasswordValid)
  ) {
    formISValid = true;
  }

  const resetForm = () => {
    resetName();
    resetEmail();
    resetPassword();
    resetCpassword();
  };
  return (
    <>
      <div className={classes.formContainer}>
        <div className={classes.headingContainer}>
          <h1 className={classes.activated}>
            {" "}
            {!isLogin ? "Create an Account" : "Welcome Back"}
          </h1>
        </div>
        <Form
          className={classes.form}
          method='post'>
          <input
            id='name'
            type='text'
            name='name'
            placeholder='Name'
            value={enteredNameValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurhandler}
          />

          <input
            id='email'
            type='email'
            name='email'
            placeholder='Email'
            value={enteredEmailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurhandler}
          />

          <input
            id='password'
            type='password'
            name='password'
            placeholder='Password'
            value={enteredPasswordValue}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurhandler}
          />

          {!isLogin && (
            <input
              id='cpassword'
              type='password'
              name='cpassword'
              placeholder='Confirm Password'
              value={enteredCPasswordValue}
              onChange={cpasswordChangeHandler}
              onBlur={cpasswordBlurhandler}
            />
          )}
          {nameHasError && (
            <p className={classes["error-text"]}>Name is Invalid</p>
          )}
          {emailHasError && (
            <p className={classes["error-text"]}>Email is Invalid</p>
          )}
          {passwordHasError && (
            <p className={classes["error-text"]}>password is Invalid</p>
          )}
          {cpasswordHasError && (
            <p className={classes["error-text"]}>password Doesn't match</p>
          )}
          <div className={classes.actions}>
            <button
              disabled={!formISValid}
              onClick={loginhandler}>
              {" "}
              {isLogin ? "Login" : "Register"}
            </button>
          </div>
          <p>OR</p>
          <div>
            <FcGoogle size={50} />
          </div>
          <p className={classes.loginStat}>
            {!isLogin ? "Have an Account? " : "Don't have an Account? "}
            <Link
              to={`?mode=${isLogin ? "signup" : "login"}`}
              onClick={resetForm}>
              {isLogin ? "Register" : "login"}
            </Link>{" "}
          </p>
        </Form>
      </div>
    </>
  );
};

export default AuthenticationForm;
