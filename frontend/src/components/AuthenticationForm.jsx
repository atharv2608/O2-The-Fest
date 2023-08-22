import React, { useContext, useState } from "react";
import { Form, Link, useSearchParams } from "react-router-dom";
import classes from "./AuthenticationForm.module.css";
import { FcGoogle } from "react-icons/fc";
import AuthContext from "../store/auth-context";

const AuthenticationForm = () => {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const authCtx = useContext(AuthContext);
  const [loginButtonDisabled, setLoginButtonDisabled] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const loginhandler = () => {
    authCtx.isLoggedIn = true;
  };
  const inputChangeHandler = (type, value) => {
    if (type === "name") {
      setName(value);
    } else if (type === "email") {
      setEmail(value);
    } else if (type === "password") {
      setPassword(value);
    } else if (type === "cpassword") {
      setCpassword(value);
    }
    if (
      (name.length &&
        email.length &&
        password.length &&
        cpassword.length !== 0) ||
      (name.length && email.length && password.length !== 0 && isLogin)
    ) {
      setLoginButtonDisabled(false);
    } else {
      setLoginButtonDisabled(true);
    }
  };
  return (
    <>
      <div className={classes.formContainer}>
        <div className={classes.headingContainer}>
          <h1 className={`${!isLogin ? classes.activated : "undefined"}`}>
            {" "}
            <Link to={`?mode=${isLogin ? "signup" : "login"}`}>Sign Up</Link>
          </h1>
          <span>|</span>
          <h1 className={`${isLogin ? classes.activated : "undefined"}`}>
            <Link to={`?mode=${isLogin ? "signup" : "login"}`}>Log In</Link>
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
            required
            value={name}
            onChange={(event) => inputChangeHandler("name", event.target.value)}
          />

          <input
            id='email'
            type='email'
            name='email'
            placeholder='Email'
            required
            value={email}
            onChange={(event) =>
              inputChangeHandler("email", event.target.value)
            }
          />

          <input
            id='password'
            type='password'
            name='password'
            placeholder='Password'
            required
            value={password}
            onChange={(event) =>
              inputChangeHandler("password", event.target.value)
            }
          />

          {!isLogin && (
            <input
              id='cpassword'
              type='password'
              name='cpassword'
              placeholder='Confirm Password'
              required
              value={cpassword}
              onChange={(event) =>
                inputChangeHandler("cpassword", event.target.value)
              }
            />
          )}
          <div className={classes.actions}>
            <button
              disabled={loginButtonDisabled}
              onClick={loginhandler}>
              {" "}
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </div>
          <p>OR</p>
          <div>
            <FcGoogle size={50} />
          </div>
        </Form>
      </div>
    </>
  );
};

export default AuthenticationForm;
