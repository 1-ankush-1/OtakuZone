import { useCallback, useEffect, useState } from "react";
import ArrowLeftIcon from "../../../Icons/leftArrow";
import Button from "../../../ui/button";
import PotraitService from "../../../../services/potraitService";
import { useParams } from "react-router-dom";

const Potrait = () => {
    const [individualPotrait, setIndividualPotrait] = useState({});
    const params = useParams();

    console.log(params)
    useEffect(() => {
        getIndividualPotraitDetail();
    }, [params.potraitId])

    const getIndividualPotraitDetail = useCallback(async () => {
        const potraitDetails = await PotraitService.get(params.potraitId);
        setIndividualPotrait((prev) => {
            return { ...prev, potraitDetails };
        })
    }, [])

    console.log(individualPotrait);

    return (
        <div>   
            individual potrait
        </div>
    )
}

export default Potrait;