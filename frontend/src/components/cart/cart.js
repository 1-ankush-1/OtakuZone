import Modal from "../ui/modal";
import CartItems from "./cartItems";

const Cart = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <CartItems />
            <div>
                <p>total price</p>
                <button>Buy</button>
                <button>Close</button>
            </div>
        </Modal>
    )
}

export default Cart;