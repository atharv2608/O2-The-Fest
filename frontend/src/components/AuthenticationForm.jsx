import React from "react";
import { Form, Link, useSearchParams } from "react-router-dom";
import classes from "./AuthenticationForm.module.css";
import { FcGoogle } from "react-icons/fc";


const AuthenticationForm = () => {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  return (
    <>
    <div className={classes.formContainer}>
    <div className={classes.headingContainer}>
   
        <h1 className={`${!isLogin?classes.activated:'undefined'}`}> <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
        Sign Up
          </Link></h1>
        <span>|</span>
        <h1 className={`${isLogin?classes.activated:'undefined'}`}><Link to={`?mode=${isLogin ? "signup" : "login"}`}>
        Log In
          </Link></h1>
        </div>
    <Form className={classes.form} method='post'>
      
       
      
          <input
            id='name'
            type='text'
            name='name'
            placeholder='Name'
            required
          />
    
          <input
            id='email'
            type='email'
            name='email'
            placeholder='Email'
            required
          />
    
      
          <input
            id='password'
            type='password'
            name='password'
            placeholder='Password'
            required
          />
     
        {!isLogin && (
         
            <input
              id='cpassword'
              type='password'
              name='cpassword'
              placeholder='Confirm Password'
              required
            />
     
        )}
        <div className={classes.actions}>
          <button > {isLogin ? "Login" : "Sign Up"}</button>
        </div>
          <p>OR</p>
          <div><FcGoogle size={50}/></div>
      </Form>
    </div>
     
    </>
  );
};

export default AuthenticationForm;
