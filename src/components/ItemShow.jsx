import React, { useContext, useState, useEffect } from 'react';
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
  const [filters, setFilters] = useState({ name: '', price: '' });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const token = localStorage.getItem('access_token');
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchItems();
  }, [filters, page]);

  const fetchItems = async () => {
    try {
      const response = await axios.request({
        headers: {
          Authorization: `Bearer ${token}`
        },
        method: "GET",
        url: 'https://ub0-diligent-watt.circumeo-apps.net/api/items/',
        params: { ...filters, page }
      });
      setItems(response.data.results);
      setTotalPages(response.data.total_pages);
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


  const handleNextPage = () => {
    setPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setPage(prevPage => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="App">
      <Logout />
      <h1>Items List</h1>
      <Link to="/cart"><button>Your Cart</button></Link>

      <div>
        <h2>Filters</h2>
          <label>
            Name:
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

      <div>
        <button onClick={handlePreviousPage} disabled={page === 1}>Previous</button>
        <span>Page {page} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={page === totalPages}>Next</button>
      </div>
    </div>
  )
}

export default ItemShow;
