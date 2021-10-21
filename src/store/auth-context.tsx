import React, { useEffect, useState } from "react";
import { AuthContextModel } from "../models/context.model";

const AuthContext = React.createContext<AuthContextModel>({
  isLoggedIn: false,
  onLogOut: () => {},
  onLogIn: (email: string, password: string) => {},
});

export const AuthContextProvider = (props: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === '1') {
      setIsLoggedIn(true);
    }
  }, [])

  const loginHandler = (email: string, password: string) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem('isLoggedIn', '0');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{
      isLoggedIn: isLoggedIn,
      onLogOut: logoutHandler,
      onLogIn: loginHandler,
    }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;