import { Route, Routes } from "react-router-dom";
import Login from "../components/pages/auth/login";
import Signup from "../components/pages/auth/signup";
import ForgetPassword from "../components/pages/auth/forget";

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
        </Routes>
    )
}

export default AuthRoutes;