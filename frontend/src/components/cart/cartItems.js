import { useState } from "react";
import CartItem from "./cartItem";

const CartItems = (props) => {

    const handleQuantityChange = (item) => {
        console.log(item);
        props.onAdd({ ...item })
    }

    const RemoveItem = (id) => {
        console.log(id);
        props.onRemove(id);
    }

    return (
        <ul>
            {props.items.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    onQuantityChange={handleQuantityChange}
                    onRemoveItem={RemoveItem}
                />
            ))}
        </ul>
    );
};

export default CartItems;