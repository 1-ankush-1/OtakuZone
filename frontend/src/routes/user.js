import { Navigate, Route, Routes } from "react-router-dom";
import Cart from "../components/cart/cart";
import About from "../components/pages/about/about";
import Store from "../components/pages/store/store";
import Products from "../components/product/products";
import Footer from "../components/layout/footer/footer";
import PotraitRoutes from "./potrait";
import NotFound from "../components/pages/notFound";

const UserRoutes = (props) => {
    return (
        <>
            <Routes>
                <Route path="/cart" element={props.loggedIn ? <Cart /> : <Navigate to="/auth/login" replace />} />
                <Route path="/about" element={<About />} />
                <Route path="/store" element={props.loggedIn ? <Store /> : <Navigate to="/auth/login" replace />} />
                <Route path="/potraits/*" element={props.loggedIn ? <PotraitRoutes /> : <Navigate to="/auth/login" replace />} />
                <Route path="/" element={<Products />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
};

export default UserRoutes;