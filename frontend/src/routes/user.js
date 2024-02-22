import { Route, Routes } from "react-router-dom";
import Cart from "../components/cart/cart";
import About from "../components/pages/about/about";
import Store from "../components/pages/store/store";
import Products from "../components/product/products";
import Footer from "../components/layout/footer/footer";

const UserRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<About />} />
                <Route path="/store" element={<Store />} />
                <Route path="/" element={<Products />} />
            </Routes>
            <Footer />
        </>
    );
};

export default UserRoutes;