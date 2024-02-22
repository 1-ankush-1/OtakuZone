import { Route, Routes } from "react-router-dom";
import Cart from "../components/cart/cart";
import About from "../components/pages/about/about";
import Store from "../components/pages/store/store";
import Products from "../components/product/products";
import Footer from "../components/layout/footer/footer";
import Potrait from "../components/pages/store/potraits/potrait";

const UserRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<About />} />
                <Route path="/store" element={<Store />} />
                <Route path="/potraits" element={"allPotraits"} />
                <Route path="/potrait-detail/:potraitId" element={<Potrait />} />
                <Route path="/" element={<Products />} />
            </Routes>
            <Footer />
        </>
    );
};

export default UserRoutes;