
import React from 'react'
import { useNavigate } from 'react-router'
import "./Products.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {  faPlus } from '@fortawesome/free-solid-svg-icons';


function Add() {
    const navigate = useNavigate()
    function handleAdd() {
        navigate("/products")
    }
    return (
        <div className="container">
            <button
                className="cart-button"
                onClick={handleAdd}>
                <FontAwesomeIcon icon={faPlus} className="cart-icon" />
                Add Products</button>
        </div>
    )
}

export default Add