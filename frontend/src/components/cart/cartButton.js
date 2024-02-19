import { useContext } from "react";
import { CartContext } from "../../stores/cartContext";
import "../../styles/cart.css"
import { FaShoppingCart } from "react-icons/fa";

const CartButton = () => {

    const cartCtx = useContext(CartContext);

    //getTotalQuantity
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + Number(item.quantity);
    }, 0)

    const handleOpenCartModal = () => {
        
    }

    return (
        <>
            <div onClick={handleOpenCartModal} className="flex items-center relative hover:text-gray-300 text-white">
                <FaShoppingCart className="cursor-pointer" />
                <p className="absolute bottom-3 left-5 text-sm">{numberOfCartItems}</p>
            </div>
        </>
    )
}

export default CartButton;