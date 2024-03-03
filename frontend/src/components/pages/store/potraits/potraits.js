import { useCallback, useEffect, useState } from "react";
import Card from "../../../ui/card";
import { Link } from "react-router-dom";
import PotraitService from "../../../../services/potraitService";
import StoreSection from "../../../ui/storeSection";

const Potraits = () => {
    const [potratis, setPotraits] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchAllPotratis = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        const response = await PotraitService.getAll();
        if (response.error) {
            alert(response.error);
        }
        setPotraits([...response.data]);
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchAllPotratis();
    }, [])

    return (<>
        {!isLoading &&
            <StoreSection
                name="potraits"
                products={potratis.slice(0, 3)}
                navigateTo={"../potraits/potrait/"}
                seeMore={"../potraits"}
            />
        }
        {isLoading && "Loading..."}
        {!isLoading && error && <p>{error}</p>}
    </>
    )
}

export default Potraits;