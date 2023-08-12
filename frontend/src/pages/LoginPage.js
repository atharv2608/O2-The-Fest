import React from "react";
import AuthenticationForm from "../components/AuthenticationForm";
import { redirect } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <AuthenticationForm />
    </div>
  );
};

export default LoginPage;

export const action = async () => {
    return redirect("/");
  };
  
