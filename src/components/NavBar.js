import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser, FaHome, FaBox, FaPlus, FaShoppingCart } from 'react-icons/fa';

function NavBar() {
  const navLinkStyle = {
    marginRight: "20px",
    color: "black", // Adjust as needed
    textDecoration: "none", // Adjust as needed
    display: "flex",
    alignItems: "center",
    
  };

  const iconStyle = {
    marginRight: "5px",
  };

  return (
    <div style={{ 
    display: "flex",
    background: '#3498db' }}>
      <NavLink style={navLinkStyle} to="/login">
        <FaUser style={iconStyle} /> Login
      </NavLink>
      <NavLink style={navLinkStyle} to="/dashboard">
        <FaHome style={iconStyle} /> Home
      </NavLink>
      <NavLink style={navLinkStyle} to="/products">
        <FaBox style={iconStyle} /> Products
      </NavLink>
      <NavLink style={navLinkStyle} to="/postform">
        <FaPlus style={iconStyle} /> Post
      </NavLink>
      <NavLink style={navLinkStyle} to="/cart">
        <FaShoppingCart style={iconStyle} /> Cart
      </NavLink>
    </div>
  );
}

export default NavBar;
