import { Route, Routes } from "react-router-dom";
import Potrait from "../components/pages/store/potraits/potrait/potrait";
import AllPotraits from "../components/pages/store/potraits/allPotraits";

const PotraitRoutes = () => {
    return (
        <Routes>
            <Route path="/potrait/:potraitId" element={<Potrait />} />
            <Route path="/" element={<AllPotraits />} />
        </Routes>
    );
};

export default PotraitRoutes;