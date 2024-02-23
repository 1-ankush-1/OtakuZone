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
        items: [],
        totalAmount: 0,
        couponAmount: 0,
        shippingAmount: 0
    })

    const addItem = (item) => {
        dispatchCartAction({ type: "ADD_ITEM", item })
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