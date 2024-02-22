import { Route, Routes } from "react-router-dom";
import ManagePotraits from "../admin/managePotraits";

const AdminRoutes = () => {
    <Routes>
        <Route path="/add-product" element={<ManagePotraits />} />
    </Routes>
}

export default AdminRoutes;