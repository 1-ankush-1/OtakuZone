import Modal from "../ui/modal";
import CartItems from "./cartItems";

const Cart = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <CartItems />
        </Modal>
    )
}

export default Cart;