import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../components/pages/auth/login";
import Signup from "../components/pages/auth/signup";
import ForgetPassword from "../components/pages/auth/forget";
import ResetPassword from "../components/pages/auth/reset";

const AuthRoutes = (props) => {

    return (
        <Routes>
            {!props.loggedIn && <Route path="/login" element={<Login />} />}
            {!props.loggedIn && <Route path="/signup" element={<Signup />} />}
            {!props.loggedIn && <Route path="/forget-password" element={<ForgetPassword />} />}
            <Route path="/reset-password" element={props.loggedIn ? <ResetPassword /> : <Navigate to="../login" replace />} />
        </Routes>
    )
}

export default AuthRoutes;