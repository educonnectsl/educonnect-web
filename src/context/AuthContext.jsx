import { jwtDecode } from 'jwt-decode';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const login = async (email, password) => {
    try {
      const response = await api.post('/login', { email, password });
      const { access_token, refresh_token } = response.data;
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);
      const decoded = jwtDecode(access_token);
      setUser(decoded);
    } catch (error) {
      throw error;
    }
  };


  const signup = async (payload) => {
    try {
      const response = await api.post('/user/create', payload);
      const { access_token, refresh_token } = response.data;
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);
      const decoded = jwtDecode(access_token);
      setUser(decoded);
    } catch (error) {
      throw error;
    }
  };


  const logout = useCallback(() => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setUser(null);
    navigate('/login');
  }, [navigate]);


  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        // token expiration check
        if (decoded.exp * 1000 < Date.now())
          logout();
        else
          setUser(decoded);

      } catch (error) {
        logout();
      }
    }
    setLoading(false);
  }, [logout]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
