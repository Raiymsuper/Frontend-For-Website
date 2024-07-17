# Eshop Application

## Overview

Welcome to my Eshop application, a React-based project designed to provide a smooth online shopping experience. This application offers a variety of features, including user authentication, product listing with advanced filtering and sorting, a shopping cart, and profile management. I leverage JWT for secure authentication and authorization. This Frontend was created along with backend on django which you can see at `https://github.com/Raiymsuper/Back-For-WebShop`.

## Features

- **User Authentication**: Seamless registration and login functionality.
- **Product Listing**: Browse products with options to filter by name and price, and sort by name or price. And products to cart.
- **Shopping Cart**: View the cart's contents.
- **Profile Management**: Access your profile information.
- **Payment**: Simulated payment process with QR code generation.
- **Protected Routes**: Certain routes require user authentication for access.

## Technologies Used

- **Frontend**: React, React Router
- **API Communication**: Axios
- **Authentication**: JSON Web Tokens (JWT)

## Getting Started

### Prerequisites

Before you begin, ensure you have Vite.js and npm installed on your machine.

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Raiymsuper/Frontend-For-Website.git
    ```
2. **Navigate to the project directory**:
    ```bash
    cd Frontend-For-Website
    ```
3. **Install dependencies**:
    ```bash
    npm install
    ```

### Running the Application

To start the development server, run:
```bash
npm start
```
Then open your browser and navigate to `http://localhost:3000` to see the application in action.

## Project Structure

Here's an overview of the project's structure:

- **`src/components`**: Contains all the React components.
- **`src/context`**: Contains the context for managing the cart state.
- **`src/App.jsx`**: The main application component, which includes routing.
- **`src/main.jsx`**: The entry point of the application.

## Component Breakdown

### Cart.jsx

Handles shopping cart functionality, allowing users to view their cart and proceed to checkout.

### Home.jsx

The landing page of the application, offering navigation to register and login pages.

### ItemShow.jsx

Displays a list of products, with options for filtering, sorting, and adding items to the cart.

### Login.jsx

Manages user login functionality.

### Logout.jsx

Manages user logout functionality.

### Payment.jsx

Simulates the payment process by generating a QR code.

### PrivateRoute.jsx

A higher-order component that protects certain routes, ensuring the user is authenticated.

### Profile.jsx

Displays the user's profile information retrieved from the backend.

### Register.jsx

Handles user registration functionality.

## Context

### CartContext

Provides the context for managing the cart state throughout the application.

## Routing

Uses `react-router-dom` for navigation. The main routes include:

- `/`: Home page
- `/register`: Registration page
- `/login`: Login page
- `/profile`: User profile page (protected)
- `/courses`: Product listing page (protected)
- `/cart`: Shopping cart page (protected)
- `/payment`: Payment page (protected)

## API

The application interacts with a backend API to fetch product data and handle user authentication. The API base URL is `https://ub0-diligent-watt.circumeo-apps.net/api`. I used Circumeo to deploy my backend which you can see at `https://github.com/Raiymsuper/Back-For-WebShop`
ate a `build` folder containing the production-ready files.

## Contacts
Telegram: @straw_hat_emae
