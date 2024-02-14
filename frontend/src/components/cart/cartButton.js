import { useState } from "react";
import Cart from "./cart";

const CartButton = () => {
    const [openCartModal, setOpenCartModal] = useState(false);

    const handleOpenCartModal = () => setOpenCartModal(true)
    const handleCloseCartModal = () => setOpenCartModal(false)

    
    return (
        <>
            <div onClick={handleOpenCartModal}>
                <div>Cart</div>
                <p>0</p>
            </div>
            {openCartModal && <Cart onClose={handleCloseCartModal} />}
        </>
    )
}

export default CartButton;