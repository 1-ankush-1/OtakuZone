import { useState } from "react";
import Cart from "./cart";
import "../../styles/cart.css"

const CartButton = () => {
    const [openCartModal, setOpenCartModal] = useState(false);

    const handleOpenCartModal = () => setOpenCartModal(true)
    const handleCloseCartModal = () => setOpenCartModal(false)

    
    return (
        <>
            <div onClick={handleOpenCartModal} className="cart-btn">
                <div className="cart-btn-head">Cart</div>
                <p className="cart-btn-count">0</p>
            </div>
            {openCartModal && <Cart onClose={handleCloseCartModal} />}
        </>
    )
}

export default CartButton;