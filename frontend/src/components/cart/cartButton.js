import { useContext } from "react";
import { CartContext } from "../../stores/cartContext";
import "../../styles/cart.css"
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const CartButton = () => {

    const cartCtx = useContext(CartContext);

    //getTotalQuantity
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + Number(item.quantity);
    }, 0)

    return (
        <>
            <NavLink
                to="/cart"
                //it return isActive state in navlink to check it is selected or not
                className={({ isActive }) => isActive ? "flex items-center relative hover:text-gray-300 text-blue-800" : "flex items-center relative hover:text-gray-300 text-white"}
                activeClassName="text-white"
                end
            >
                <FaShoppingCart className="cursor-pointer" />
                <p className="absolute bottom-3 left-5 text-sm">{numberOfCartItems}</p>
            </NavLink >
        </>
    )
}

export default CartButton;