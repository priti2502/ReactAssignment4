// src/components/Products.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions';

const Products = () => {
  const products = useSelector(state => state.products);
  const cart = useSelector(state => state.cart);
  

  const handleAddToCart = (product) => {
   
    const isProductInCart = cart.some(item => item.id === product.id);

    if (isProductInCart) {
     
      alert('This product is already in your cart.');
    } else {
      
      dispatch(addToCart(product));
    }
  };
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.name}  />
            <div>
              <p>{product.name}</p>
              <p>${product.price.toFixed(2)}</p>
            </div>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
