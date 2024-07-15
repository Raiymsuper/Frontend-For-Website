import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import Logout from './Logout';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');

    if (!accessToken) {
      setError('No access token found');
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/profile/', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        setUserData(response.data);
      } catch (error) {
        if (error.response && error.response.status === 401 && refreshToken) {
          // Token expired, try to refresh it
          try {
            const refreshResponse = await axios.post('https://your-django-backend/api/token/refresh/', {
              refresh: refreshToken
            });
            localStorage.setItem('access_token', refreshResponse.data.access);
            const retryResponse = await axios.get('https://your-django-backend/api/user-profile/', {
              headers: {
                Authorization: `Bearer ${refreshResponse.data.access}`
              }
            });
            setUserData(retryResponse.data);
          } catch (refreshError) {
            setError('Failed to refresh token');
          }
        } else {
          setError('Failed to fetch user data');
        }
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <Logout />
        <Link to="/cart"><button>Your Cart</button></Link>
      <Link to="/courses">
        <button>All Courses</button>
      </Link>
      <h1>Profile</h1>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
};

export default Profile;
