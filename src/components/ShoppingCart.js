// ShoppingCart.js
import React from 'react';
import Add from './Add';

function ShoppingCart({ cart, removeFromCart }) {
    
  return (
    <div

    style={{
        height:"79vh"
    }}
    
    >
      
      <h1>Shopping Cart</h1>
      <Add />
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
          <span style={{ color: "darkgrey" }}><h4>{item.name}</h4></span>
          <br />
          <img
            src={item.image}
            alt="Product"
          />
          <br />
          <strong>Description:</strong> {item.description}
          <br />
          <strong>Price:</strong> {item.price}
          <br />
          <strong>Quantity:</strong> {item.quantity}
          <br />
          <strong>Category:</strong>{item.category}
          <br></br>
          <button onClick={() => removeFromCart(item.id)}>
            Remove from Cart
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;
