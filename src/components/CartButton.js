import React from 'react';
import "./Products.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';

function CartButton() {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/cart");
    }

    return (
        <div className="container">
            <button className="cart-button" onClick={handleClick}>
                <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
                Shopping Cart
            </button>
        </div>
    );
}

export default CartButton;
