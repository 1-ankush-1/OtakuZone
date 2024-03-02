const coupons = {
    "CODE_11": 10,
    "CODE_33": 44,
    "FIRSTUSER": 70,
}

const CartReducer = (state, action) => {
    let updatedTotalAmount;
    let existingCartItemIndex;
    let updatedItems;

    switch (action.type) {
        case "ADD_ITEM":
            updatedTotalAmount = Number(state.totalAmount) + Number(action.item.price) * Number(action.item.quantity);
            updatedItems = state.items.concat(action.item);
            console.log("updatedItems : ", updatedItems);
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount,
                couponAmount: 0,
                shippingAmount: updatedTotalAmount > 1000 ? 0 : 99
            };
        case "REMOVE_ITEM":
            updatedItems = state.items.filter(item => item.id !== action.id);
            //update totalquantity
            updatedTotalAmount = updatedItems.reduce((prev, item) => prev + (item.price * item.quantity), 0);
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount,
                couponAmount: 0,
                shippingAmount: updatedTotalAmount > 1000 ? 0 : 99
            };

        case "UPDATE_ITEM":
            updatedItems = [...state.items];
            existingCartItemIndex = updatedItems.findIndex(item => item.id === action.item.id);
            console.log(state)
            updatedItems[existingCartItemIndex] = action.item;
            updatedTotalAmount = updatedItems.reduce((prev, item) => prev + (item.price * item.quantity), 0);
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount,
                couponAmount: 0,
                shippingAmount: updatedTotalAmount > 1000 ? 0 : 99
            };
        case "APPLY_COUPON":
        case "INITIAL_ITEMS":
            updatedTotalAmount = action.items?.reduce((total, item) => total + (item.price * item.quantity), 0);
            return {
                items: action.items || [],
                totalAmount: updatedTotalAmount || 0,
                couponAmount: 0,
                shippingAmount: updatedTotalAmount === 0 ? 0 : updatedTotalAmount > 1000 ? 0 : 99
            }
        default:
            return state;
    }
}

export default CartReducer;
