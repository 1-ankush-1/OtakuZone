import React, { useContext, useEffect, useReducer } from "react";
import CartReducer from "../reducers/cartReducer";
import cartService from "../services/cartService";
import { AuthContext } from "./authContext";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../firebase-setup";

export const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    shippingAmount: 0,
    couponAmount: 0,
    addItem: () => { },
    removeItem: () => { },
    deleteItem: () => { }
});

const CartContextProvider = (props) => {
    const authCtx = useContext(AuthContext);
    const email = authCtx.email

    const [cartState, dispatchCartAction] = useReducer(CartReducer, {
        items: [],
        totalAmount: 0,
        couponAmount: 0,
        shippingAmount: 0
    })

    useEffect(() => {
        // Subscribe to database updates
        const unsubscribe = onSnapshot(collection(db, "cart"), (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                const cartData = change.doc.data();
                const userEmail = cartData.email;

                if (userEmail === email) {
                    if (change.type === "added") {
                        dispatchCartAction({ type: "ADD_ITEM", item: { id: change.doc.id, ...cartData } });
                    } else if (change.type === "modified") {
                        console.log("updating item", { id: change.doc.id, ...cartData });
                        dispatchCartAction({ type: "UPDATE_ITEM", item: { id: change.doc.id, ...cartData } });
                    } else if (change.type === "removed") {
                        console.log("called", cartData);
                        const deletedCartId = change.doc.id;
                        dispatchCartAction({ type: "REMOVE_ITEM", id: deletedCartId });
                    }
                }
            });
        });

        // Clean up subscription
        return () => {
            unsubscribe();
        };
    }, [email]);

    const addItem = async (item) => {

        let existingCartItemIndex = cartState.items.findIndex(everyitem => everyitem.productId === item.productId);
        //check if item exist
        let existingCartItem = cartState.items[existingCartItemIndex];
        if (existingCartItem) {
            //update service 
            const { id, ...updatedItem } = { ...existingCartItem, quantity: Number(existingCartItem.quantity) + Number(item.quantity) };
            //add updated item in firestore
            await cartService.update(id, updatedItem);
        } else {
            //add service
            await cartService.post(item);
        }
    }

    const removeItem = async (id) => {
        let existingCartItemIndex = cartState.items.findIndex(item => item.id === id);
        //check if item exist
        let existingCartItem = cartState.items[existingCartItemIndex];
        if (existingCartItem.quantity === 1) {
            await cartService.delete(id);
        } else {
            //update service 
            const { id, ...updatedItem } = { ...existingCartItem, quantity: Number(existingCartItem.quantity) - 1 };
            //add updated item in firestore
            await cartService.update(id, updatedItem);
        }
    }

    const deleteItem = async (id) => {
        await cartService.delete(id);
    }

    const value = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        shippingAmount: cartState.shippingAmount,
        couponAmount: cartState.couponAmount,
        addItem,
        removeItem,
        deleteItem
    }

    return (
        <CartContext.Provider value={value}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
