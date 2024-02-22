import { Route, Routes } from "react-router-dom";
import Header from "../components/layout/header/header";
import UserRoutes from "./user";
import AdminRoutes from "./admin";


const Router = () => {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/user/*" element={<UserRoutes />} />
                    <Route path="/admin/*" element={<AdminRoutes />} />
                </Routes>
            </main>
        </>
    )
}

export default Router;