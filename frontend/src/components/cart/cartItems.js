import CartItem from "./cartItem";

const cartItemsList = [
    { id: 1, price: 10, name: "Item 1", quantity: 2 },
    { id: 2, price: 20, name: "Item 2", quantity: 1 },
    { id: 3, price: 15, name: "Item 3", quantity: 3 },
    { id: 4, price: 12, name: "Item 4", quantity: 2 },
    { id: 5, price: 8, name: "Item 5", quantity: 4 },
];
const CartItems = () => {

    return (
        <ul>
            {cartItemsList.map((item) => (
                <CartItem key={item.id} name={item.name} price={item.price} quantity={item.quantity} />
            ))}
        </ul>
    );
};

export default CartItems;