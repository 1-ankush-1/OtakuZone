import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/layout/header/header";
import About from "../components/pages/about/about";
import Cart from "../components/cart/cart";
import Products from "../components/product/products"
import Store from "../components/pages/store/store";
import ManagePotraits from "../admin/managePotraits";


const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/store" element={<Store />} />
                    <Route path="/" element={<Products />} />
                    <Route path="/admin/add-product" element={<ManagePotraits />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default Router;