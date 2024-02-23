import { Route, Routes } from "react-router-dom";
import Potrait from "../components/pages/store/potraits/potrait";

const PotraitRoutes = () => {
    return (
        <Routes>
            <Route path="/potrait/:potraitId" element={<Potrait />} />
            <Route path="/" element={"allPotraits"} />
        </Routes>
    );
};

export default PotraitRoutes;