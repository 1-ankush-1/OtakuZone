import React from 'react';
const CartItem = ({ name, price, quantity }) => {
    return (
        <li>
            {name} - ${price} - Quantity: {quantity}
            <button >+</button>
            <button >-</button>
        </li>
    );
}

export default CartItem;