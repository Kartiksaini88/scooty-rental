import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isauth, setauth] = useState(false)
  const authin = () => {
    setauth(true)
  }
  const authout = () => {
    setauth(false)
  }
  return <AuthContext.Provider value={{ isauth, authin, authout }}>{children}</AuthContext.Provider>;
};
