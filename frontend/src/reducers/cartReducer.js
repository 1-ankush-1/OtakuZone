const coupons = {
    "CODE_11": 10,
    "CODE_33": 44,
    "FIRSTUSER": 70,
}

const CartReducer = (state, action) => {
    let updatedTotalAmount;
    let existingCartItemIndex;
    let existingCartItem;
    let updatedItems;
    let updatedShippingAmount;

    switch (action.type) {
        case "ADD_ITEM":
            //update total
            updatedTotalAmount = Number(state.totalAmount) + Number(action.item.price) * Number(action.item.quantity);
            //find the item idx
            existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);

            //check if item exist
            existingCartItem = state.items[existingCartItemIndex];
            if (existingCartItem) {
                //increase the quantity that item
                const updatedItem = { ...existingCartItem, quantity: Number(existingCartItem.quantity) + Number(action.item.quantity) };
                //add updated item in items 
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                //add new item
                updatedItems = state.items.concat(action.item);
            }

            if (Number(updatedTotalAmount) < 999) {
                updatedShippingAmount = 99;
            } else {
                updatedShippingAmount = 0;
            }

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount,
                couponAmount: 0,
                shippingAmount: updatedShippingAmount
            };

        case "REDUCE_ITEM":
            //find the item idx
            existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
            //check if item exist
            existingCartItem = state.items[existingCartItemIndex];

            if (existingCartItem) {
                //last item remove item from array
                if (existingCartItem.quantity === 1) {
                    updatedItems = state.items.filter(item => item.id !== action.id);
                } else {
                    //decrease the quantity that item
                    const updatedItem = { ...existingCartItem, quantity: Number(existingCartItem.quantity) - 1 };
                    //add updated item in items 
                    updatedItems = [...state.items];
                    updatedItems[existingCartItemIndex] = updatedItem;
                }

                //update totalamount
                updatedTotalAmount = updatedItems.reduce((prev, item) => prev + (item.price * item.quantity), 0);
                if (Number(updatedTotalAmount) < 999) {
                    updatedShippingAmount = 99;
                } else {
                    updatedShippingAmount = 0;
                }
                return {
                    items: updatedItems,
                    totalAmount: updatedTotalAmount,
                    couponAmount: 0,
                    shippingAmount: updatedShippingAmount
                };
            }
            return state

        case "REMOVE_ITEM":
            existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
            //check if item exist
            existingCartItem = state.items[existingCartItemIndex];

            if (existingCartItem) {
                updatedItems = state.items.filter(item => item.id !== action.id);
                //update totalamount
                updatedTotalAmount = updatedItems.reduce((prev, item) => prev + (item.price * item.quantity), 0);
                if (Number(updatedTotalAmount) < 999) {
                    updatedShippingAmount = 99;
                } else {
                    updatedShippingAmount = 0;
                }
                return {
                    items: updatedItems,
                    totalAmount: updatedTotalAmount,
                    couponAmount: 0,
                    shippingAmount: updatedShippingAmount
                };
            }

            return state;
        case "INCREASE_ITEM":
            //find the item idx
            existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);

            //check if item exist
            existingCartItem = state.items[existingCartItemIndex];
            if (existingCartItem) {
                updatedItems = state.items.map(item => {
                    if (item.id === action.item.id) {
                        return { ...item, ["quantity"]: action.item.quantity }
                    }
                    return item;
                });
                //update totalamount
                updatedTotalAmount = updatedItems.reduce((prev, item) => prev + (item.price * item.quantity), 0);
                if (Number(updatedTotalAmount) < 999) {
                    updatedShippingAmount = 99;
                } else {
                    updatedShippingAmount = 0;
                }
                return {
                    items: updatedItems,
                    totalAmount: updatedTotalAmount,
                    couponAmount: 0,
                    shippingAmount: updatedShippingAmount
                };
            }
            return state;
        case "APPLY_COUPON":

            return state;
        default:
            return state;
    }
}

export default CartReducer;