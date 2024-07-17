import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Logout from './Logout';
import { CartContext } from '../context/CartContext';
import { Link } from "react-router-dom";

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

function ItemShow() {
  const [items, setItems] = useState([]);
  const [filters, setFilters] = useState({ category: '', price: '' });
  const token = localStorage.getItem('access_token');
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchItems();
  }, [filters]);

  const fetchItems = async () => {
    try {
      const response = await axios.request({
        headers: {
          Authorization: `Bearer ${token}`
        },
        method: "GET",
        url: 'https://ub0-diligent-watt.circumeo-apps.net/api/items/',
        params: filters
      });
      setItems(response.data);
    } catch (error) {
      console.error('There was an error fetching the data!', error);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="App">
      <Logout />
      <h1>Items List</h1>
      <Link to="/cart"><button>Your Cart</button></Link>

      <div>
        <h2>Filters</h2>
        <label>
          Category:
          <input type="text" name="name" value={filters.name} onChange={handleFilterChange} />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={filters.price} onChange={handleFilterChange} />
        </label>
      </div>

      <ul>
        {items.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Price: {item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
//
export default ItemShow;
