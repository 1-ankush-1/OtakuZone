import StoreSection from "../../../../ui/storeSection";
import { useCallback, useEffect, useState } from "react";
import PotraitService from "../../../../../services/potraitService";
import FilterProduct from "./filterPotraits";

const AllPotraits = () => {
    const [potraits, setPotraits] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchAllPotraits = useCallback(async () => {
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
        fetchAllPotraits();
    }, []);

    return (
        <div className="px-4 py-6 mx-auto max-w-6xl">
            <div className="sticky bg-gray-100">
                <FilterProduct
                    onChangeProducts={setPotraits}
                />
            </div>
            <div>
                {!isLoading && (
                    <StoreSection
                        name="potraits"
                        products={potraits}
                        navigateTo={"potrait/"}
                    />
                )}
                {isLoading && "Loading..."}
                {!isLoading && error && <p>{error}</p>}
            </div>
        </div>
    );
}

export default AllPotraits;