import { Route, Routes } from "react-router-dom";
import Header from "../components/layout/header/header";
import UserRoutes from "./user";
import AdminRoutes from "./admin";
import NotFound from "../components/pages/notFound";

const Router = () => {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/admin/*" element={<AdminRoutes />} />
                    <Route path="/*" element={<UserRoutes />} />
                </Routes>
            </main>
        </>
    )
}

export default Router;