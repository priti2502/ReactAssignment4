// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Products from './components/Products';
import Cart from './components/Cart';
import './App.css'; 

const App = () => (
  <Provider store={store}>
    <div className="App">
      <h1>Shopping Cart</h1>
      <div className="container">
        <div className="section">
          <Products />
        </div>
        <div className="section">
          <Cart />
        </div>
      </div>
    </div>
  </Provider>
);

export default App;
