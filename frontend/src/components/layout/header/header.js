import CartButton from "../../cart/cartButton";
import HeaderItems from "./headerItems";
import "../../../styles/header.css"
import { useContext } from "react";
import { AuthContext } from "../../../stores/authContext";
import Button from "../../ui/button";
import { useNavigate } from "react-router-dom";

const AfterLogin = [{
    id: "1",
    title: "HOME",
    goto: "/"
}, {
    id: "2",
    title: "STORE",
    goto: "/store"
}, {
    id: "3",
    title: "ResetPassword",
    goto: "/auth/reset-password"
}]

const BeforeLogin = [{
    id: "1",
    title: "HOME",
    goto: "/"
}, {
    id: "2",
    title: "ABOUT",
    goto: "/about"
}, {
    id: "3",
    title: "LOGIN",
    goto: "/auth/login"
}]

const Header = () => {
    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;
    const headerItemList = isLoggedIn ? AfterLogin : BeforeLogin;

    const logoutUser = () => {
        authCtx.onLogout();
        navigate("/")
    }

    return (
        <>
            <nav className="sticky top-0 bg-black p-4 z-10">
                <div className="container mx-auto">
                    <div className="lg:flex justify-between items-center lg:px-10">
                        <div className="lg:block text-white font-bold text-xl hidden">OtakuZone</div>
                        <div className="flex justify-between items-center lg:gap-6">
                            <HeaderItems items={headerItemList} />
                            <div className="lg:hidden text-white font-bold text-xl">OtakuZone</div>
                            {isLoggedIn && <CartButton />}
                            {isLoggedIn && <Button type="button" onHandleClick={logoutUser}>Logout</Button>}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;