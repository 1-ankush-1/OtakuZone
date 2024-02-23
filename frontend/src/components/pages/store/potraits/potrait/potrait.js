import { useCallback, useEffect, useMemo, useState } from "react";
import PotraitService from "../../../../../services/potraitService";
import { useParams } from "react-router-dom";
import ProductCard from "../../../../ui/productCard";

const Potrait = () => {
    const [individualPotrait, setIndividualPotrait] = useState({});
    //read routes parameter
    const params = useParams();
    const potraitId = useMemo(() => params.potraitId, [params]);

    useEffect(() => {
        getIndividualPotraitDetail();
    }, [potraitId])

    const getIndividualPotraitDetail = useCallback(async () => {
        const potraitDetails = await PotraitService.get(potraitId);
        setIndividualPotrait(() => {
            return potraitDetails;
        })
    }, [])


    return (
        <ProductCard 
            item={individualPotrait}
            id={potraitId}
        />
    )
}
export default Potrait;