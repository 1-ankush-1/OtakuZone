import React, { useCallback, useEffect, useMemo, useState } from "react";
import PotraitService from "../../../../../services/potraitService";
import { useParams } from "react-router-dom";
import ProductCard from "../../../../ui/productCard";

const Potrait = () => {
    const [individualPotrait, setIndividualPotrait] = useState({});
    //read routes parameter
    const params = useParams();
    const potraitId = useMemo(() => params.potraitId, [params]);

    const getIndividualPotraitDetail = useCallback(async () => {
        const potraitDetails = await PotraitService.get(potraitId);
        setIndividualPotrait(() => {
            return potraitDetails.data;
        })
    }, [])

    useEffect(() => {
        getIndividualPotraitDetail(potraitId);
    }, [potraitId])

    return (
        <div className="px-4 my-6 mx-auto max-w-6xl">
            {Object.keys(individualPotrait).length > 0 ?
                <ProductCard
                    key={potraitId}
                    category={individualPotrait.category}
                    description={individualPotrait.description}
                    image={individualPotrait.image}
                    price={individualPotrait.price}
                    title={individualPotrait.title}
                    rating={individualPotrait?.rating || { rate: 0, count: 0 }}
                    id={potraitId}
                /> : <p>"fetching product"</p>
            }
        </div>
    )
}
export default React.memo(Potrait);