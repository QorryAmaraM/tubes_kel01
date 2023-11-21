import React, { createContext, useContext, useReducer, useEffect } from 'react';

const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    // Load authentication state from localStorage on component mount
    const storedAuth = JSON.parse(localStorage.getItem('auth'));
    if (storedAuth) {
      dispatch({ type: 'LOGIN', payload: storedAuth.user });
    }
  }, []);

  const login = (user) => {
    dispatch({ type: 'LOGIN', payload: user });
    // Save authentication state to localStorage on login
    localStorage.setItem('auth', JSON.stringify({ user }));
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    // Remove authentication state from localStorage on logout
    localStorage.removeItem('auth');
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
