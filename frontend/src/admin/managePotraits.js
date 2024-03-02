import { useEffect, useCallback, useReducer } from "react";
import AddProduct from "./addProduct";
import ShowProducts from "./showProducts";
import PotraitReducer, { initialPotraitState } from "./reducers/potraitReducer";
import potraitService from "../services/potraitService"
import db from "../firebase-setup";
import { collection, onSnapshot } from "firebase/firestore";

const ManagePotraits = () => {
    const [potraitState, dispatchPotraitAction] = useReducer(PotraitReducer, initialPotraitState);

    useEffect(() => {
        // Subscribe to database updates
        const unsubscribe = onSnapshot(collection(db, "potraits"), (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    const addedPotrait = change.doc.data();
                    dispatchPotraitAction({ type: "ADD_POTRAIT", payload: { id: change.doc.id, ...addedPotrait } });
                } else if (change.type === "modified") {
                    const updatedPotrait = change.doc.data();
                    dispatchPotraitAction({ type: "UPDATE_POTRAIT", payload: { id: change.doc.id, ...updatedPotrait } });
                } else if (change.type === "removed") {
                    const deletedPotraitId = change.doc.id;
                    dispatchPotraitAction({ type: "DELETE_POTRAIT", payload: deletedPotraitId });
                }
            });
        });

        // Clean up subscription
        return () => {
            unsubscribe();
        };
    }, []);


    const handleAdd = async (potrait) => {
        await potraitService.post(potrait);
    };

    const handleUpdate = async (potrait) => {
        await potraitService.update(potrait);
    };

    const handleDelete = async (id) => {
        await potraitService.delete(id);
    };

    const { potraits, isLoading, error } = potraitState;

    return (
        <div className="sm:flex justify-center p-4 gap-2">
            <AddProduct
                onAddPotrait={handleAdd}
                onUpdatePotrait={handleUpdate}
            />
            {console.log(potraits)}
            <ShowProducts
                potraits={potraits}
                onDeletePotrait={handleDelete}
            />
        </div>
    );
};

export default ManagePotraits;
