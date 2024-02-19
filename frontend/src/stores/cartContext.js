import React, { useReducer } from "react";
import CartReducer from "../reducers/cartReducer";

export const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    shippingAmount: 0,
    couponAmount: 0,
    addItem: () => { },
    removeItem: () => { }
});

const CartContextProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(CartReducer, {
        items: [{
            id: 1,
            title: 'Colors',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

            quantity: 2,

        },

        {
            id: 2,
            title: 'Black and white Colors',

            price: 50,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

            quantity: 3,

        },

        {
            id: 3,
            title: 'Yellow and Black Colors',

            price: 70,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

            quantity: 1,

        }],
        totalAmount: 0,
        couponAmount: 0,
        shippingAmount: 0
    })

    const addItem = (item) => {
        dispatchCartAction({ type: "INCREASE_ITEM", item })
    }

    const removeItem = (id) => {
        dispatchCartAction({ type: "REMOVE_ITEM", id: id })
    }

    const value = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        shippingAmount: cartState.shippingAmount,
        couponAmount: cartState.couponAmount,
        addItem,
        removeItem
    }

    return (
        <CartContext.Provider value={value}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;