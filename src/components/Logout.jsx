import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('cart' );
    localStorage.removeItem('totalPrice' );
    navigate('/');
  };

  return (
    <button onClick={handleLogout} style={logoutButtonStyle}>
      Logout
    </button>
  );
};

const logoutButtonStyle = {
  backgroundColor: '#61dafb',
  border: 'none',
  color: 'white',
  padding: '0.5rem 1rem',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '4px 2px',
  cursor: 'pointer',
  borderRadius: '4px'
};

export default Logout;
