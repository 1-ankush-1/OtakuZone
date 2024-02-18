import { useState } from "react";
import Cart from "./cart";
import "../../styles/cart.css"
import { FaShoppingCart } from "react-icons/fa";

const CartButton = () => {
    const [openCartModal, setOpenCartModal] = useState(false);

    const handleOpenCartModal = () => setOpenCartModal(true)
    const handleCloseCartModal = () => setOpenCartModal(false)


    return (
        <>
            <div onClick={handleOpenCartModal} className="flex items-center relative hover:text-gray-300">
                <FaShoppingCart className="cursor-pointer" />
                <p className="absolute bottom-3 left-5 text-sm">0</p>
            </div>
            {openCartModal && <Cart onClose={handleCloseCartModal} />}
        </>
    )
}

export default CartButton;