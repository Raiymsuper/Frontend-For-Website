import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('cart' );
    localStorage.removeItem('totalPrice' );
  };

  return (
    <div>
      <div>
        <Link to="/register">
          <button onClick={handleLogout} style={buttonStyle}>Register</button>
        </Link>
        <Link to="/login">
          <button onClick={handleLogout} style={buttonStyle}>Login</button>
        </Link>
      </div>
    </div>
  );
};

const buttonStyle = {
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

export default Home;