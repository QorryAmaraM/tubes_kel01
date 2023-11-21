import React, { createContext, useContext } from 'react';
import AuthService from '../services/AuthService';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ authService: AuthService }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
