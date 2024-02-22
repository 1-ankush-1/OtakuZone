import { useEffect, useCallback, useReducer } from "react";
import AddProduct from "./addProduct";
import ShowProducts from "./showProducts";
import PotraitReducer, { initialPotraitState } from "./reducers/potraitReducer";
import potraitService from "./services/potraitService";

const ManagePotraits = () => {
    const [potraitState, dispatchPotraitAction] = useReducer(PotraitReducer, initialPotraitState);

    const fetchAllPotratis = useCallback(async () => {
        dispatchPotraitAction({ type: "FETCH_POTRAITS_REQUEST" });
        try {
            const potraits = await potraitService.getAll();
            let newpotraits = [];
            for (const key in potraits) {
                if (Object.hasOwnProperty.call(potraits, key)) {
                    newpotraits.push({
                        id: key,
                        title: potraits[key].title,
                        description: potraits[key].description,
                        price: potraits[key].price,
                        category: potraits[key].category,
                        image: potraits[key].image,
                    });
                }
            }
            dispatchPotraitAction({ type: "FETCH_POTRAITS_SUCCESS", payload: newpotraits });
        } catch (err) {
            console.log(err);
            dispatchPotraitAction({ type: "FETCH_POTRAITS_FAILURE", payload: err.message });
        }
    }, []);

    useEffect(() => {
        fetchAllPotratis();
    }, []);

    const handleAdd = async (potrait) => {
        const addedPotrait = await potraitService.post(potrait);
        potrait.id = addedPotrait.name;
        dispatchPotraitAction({ type: "ADD_POTRAIT", payload: potrait });
    };

    const handleUpdate = async (potrait) => {
        const updatedPotrait = await potraitService.update(potrait);
        dispatchPotraitAction({ type: "UPDATE_POTRAIT", payload: { id: updatedPotrait.id, updatedPotrait } });
    };

    const handleDelete = async (id) => {
        await potraitService.delete(id);
        dispatchPotraitAction({ type: "DELETE_POTRAIT", payload: id });
    };

    const { potraits, isLoading, error } = potraitState;
    console.log(potraitState)

    return (
        <div className="flex justify-center p-4 gap-2">
            <AddProduct
                onAddPotrait={handleAdd}
                onUpdatePotrait={handleUpdate}
            />
            <ShowProducts
                potraits={potraits}
                onDeletePotrait={handleDelete}
            />
        </div>
    );
};

export default ManagePotraits;