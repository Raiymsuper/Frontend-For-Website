import React, { useEffect, useState } from "react";
import QRCode from 'qrcode.react';
import Logout from "./Logout.jsx";
import {Link} from "react-router-dom";

const Payment = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Retrieve totalPrice from local storage
    const totalPriceFromStorage = localStorage.getItem('totalPrice');
    if (totalPriceFromStorage) {
      setTotalPrice(totalPriceFromStorage);
    }
  }, []);

  return (
    <div className="App">
        <Logout />
        <Link to="/profile"><button>Your Profile</button></Link>
      <Link to="/cart">
        <button>Back to cart</button>
      </Link>

      <h1>Payment</h1>
      <p>Total Price: ${totalPrice}</p>
      <QRCode
        value={`Total Payment: $${totalPrice}`}
        size={128}
        bgColor="#ffffff"
        fgColor="#000000"
        level="H"
      />
    </div>
  );
};

export default Payment;
