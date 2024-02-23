import { Route, Routes } from "react-router-dom";
import ManagePotraits from "../admin/managePotraits";

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/add-product" element={<ManagePotraits />} />
            <Route path="/" element={"no route found"} />
        </Routes>
    )
}

export default AdminRoutes;