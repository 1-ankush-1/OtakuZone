import { useEffect, useCallback, useReducer } from "react";
import AddProduct from "./addProduct";
import ShowProducts from "./showProducts";
import PotraitReducer, { initialPotraitState } from "./reducers/potraitReducer";
import potraitService from "../services/potraitService"

const ManagePotraits = () => {
    const [potraitState, dispatchPotraitAction] = useReducer(PotraitReducer, initialPotraitState);

    const fetchAllPotratis = useCallback(async () => {
        dispatchPotraitAction({ type: "FETCH_POTRAITS_REQUEST" });
        try {
            const response = await potraitService.getAll();
            console.log(response)
            if (response.error) {
                throw new Error(response.error);
            }
            let newpotraits = response.data;
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
        dispatchPotraitAction({ type: "ADD_POTRAIT", payload: addedPotrait.data });
    };

    const handleUpdate = async (potrait) => {
        const updatedPotrait = await potraitService.update(potrait);
        dispatchPotraitAction({ type: "UPDATE_POTRAIT", payload: { id: updatedPotrait.id, data: updatedPotrait.data } });
    };

    const handleDelete = async (id) => {
        await potraitService.delete(id);
        dispatchPotraitAction({ type: "DELETE_POTRAIT", payload: id });
    };

    const { potraits, isLoading, error } = potraitState;

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