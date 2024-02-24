import { Route, Routes } from "react-router-dom";
import Header from "../components/layout/header/header";
import UserRoutes from "./user";
import AdminRoutes from "./admin";
import AuthRoutes from "./auth";
import { useContext } from "react";
import { AuthContext } from "../stores/authContext";

const Router = () => {
    const authCtx = useContext(AuthContext);

    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/auth/*" element={<AuthRoutes loggedIn={authCtx.isLoggedIn} />} />
                    <Route path="/admin/*" element={<AdminRoutes />} />
                    <Route path="/*" element={<UserRoutes loggedIn={authCtx.isLoggedIn} />} />
                </Routes>
            </main>
        </>
    )
}

export default Router;