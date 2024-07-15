import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './components/Register';
import Payment from './components/Payment';
import Profile from './components/Profile';
import Login from './components/Login';
import ItemShow from './components/ItemShow';
import Cart from './components/Cart';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <nav>
            <Link to="/profile">
              <button>Your Profile</button>
            </Link>
          </nav>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/payment" element={
              <PrivateRoute>
              <Payment />
              </PrivateRoute>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={
              <PrivateRoute>
              <Profile />
              </PrivateRoute>
            } />
            <Route path="/courses" element={
              <PrivateRoute>
                <ItemShow />
              </PrivateRoute>
            } />
            <Route path="/cart" element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            } />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;