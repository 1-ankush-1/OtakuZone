import CartItem from "./cartItem";

const CartItems = (props) => {
    const cartItemRemoveHandler = id => {
        props.onRemove(id);
    }

    const cartItemAddHandler = item => {
        props.onAdd({ ...item, quantity: 1 });
    }

    const deleteItemFromCart = id => {
        props.onDelete(id);
    }

    return (
        <ul>
            {props.items?.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    onAdd={cartItemAddHandler}
                    onRemove={cartItemRemoveHandler}
                    onDelete={deleteItemFromCart}
                />
            ))}
        </ul>
    );
};

export default CartItems;