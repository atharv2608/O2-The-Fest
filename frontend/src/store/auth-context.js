import React from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
  });
  
  export const AuthContextProvider = (props) => {
    return (
      <AuthContext.Provider
        value={{
          isLoggedIn: false,
       
        }}
      >
        {props.children}
      </AuthContext.Provider>
    );
  };
  export default AuthContext;