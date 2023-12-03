import React from 'react'
import { useNavigate } from 'react-router'

function CartButton() {
    const navigate = useNavigate()
    function handleClick() {
        navigate("/cart")
    }

    return (
        <button onClick={handleClick}>
            Shopping Cart
        </button>
    )
}

export default CartButton