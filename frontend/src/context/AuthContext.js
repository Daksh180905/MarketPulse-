import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('marketpulse_current_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const register = ({ name, email, password }) => {
    const storedUsers = JSON.parse(localStorage.getItem('marketpulse_users') || '[]');
    if (storedUsers.find((u) => u.email.toLowerCase() === email.toLowerCase())) {
      throw new Error('Email already registered');
    }

    const newUser = { name, email, password };
    storedUsers.push(newUser);
    localStorage.setItem('marketpulse_users', JSON.stringify(storedUsers));
    localStorage.setItem('marketpulse_current_user', JSON.stringify(newUser));
    setUser(newUser);
    return newUser;
  };

  const login = ({ email, password }) => {
    const storedUsers = JSON.parse(localStorage.getItem('marketpulse_users') || '[]');
    const existing = storedUsers.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (!existing) {
      throw new Error('Invalid email or password');
    }

    localStorage.setItem('marketpulse_current_user', JSON.stringify(existing));
    setUser(existing);
    return existing;
  };

  const logout = () => {
    localStorage.removeItem('marketpulse_current_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
