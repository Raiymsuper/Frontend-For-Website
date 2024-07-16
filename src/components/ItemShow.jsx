import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import Logout from './Logout';
// import Cart from './Cart'
import { CartContext } from '../context/CartContext';
import {Link} from "react-router-dom";
// import {useNavigate} from "react-router-dom";


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
    const token = localStorage.getItem('access_token');
  const { addToCart } = useContext(CartContext);
  useEffect(() => {
    axios.request({
        headers: {
            Authorization: `Bearer ${token}`
        },
        method: "GET",
        url: 'https://ub0-diligent-watt.circumeo-apps.net/api/items/'
    })
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="App">
        <Logout />
      <h1>Items List</h1>
      <Link to="/cart"><button>Your Cart</button></Link>
      <ul>
        {items.map(item => (
            <li key={item.id}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>Цена: {item.price}</p>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default ItemShow;

