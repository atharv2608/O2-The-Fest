import React from "react";
import { Form, Link, useSearchParams } from "react-router-dom";
import classes from "./AuthenticationForm.module.css";

const AuthenticationForm = () => {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  return (
    <>
      <Form className={classes.form} method='post'>
        <h1>{isLogin ? "Log in" : "Sign Up"}</h1>
        <p>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            name='email'
            placeholder='Enter email here'
            required
          />
        </p>
        <p>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            placeholder='Enter your Password'
            required
          />
        </p>
        {!isLogin && (
          <p>
            <label htmlFor='cpassword'>Confirm Password</label>
            <input
              id='cpassword'
              type='password'
              name='cpassword'
              placeholder='Confirm your Password'
              required
            />
          </p>
        )}
        <div className={classes.actions}>
          <button > {isLogin ? "Login" : "Sign Up"}</button>
        </div>
        <div className={classes.toggleLogin}>
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Signup" : "Login"}
          </Link>
        </div>
      </Form>
    </>
  );
};

export default AuthenticationForm;
