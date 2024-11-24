import { useEffect, useReducer, useState } from "react";
import AddProduct from "./addProduct";
import ShowProducts from "./showProducts";
import PotraitReducer, { initialPotraitState } from "./reducers/potraitReducer";
import potraitService from "../services/potraitService"
import db from "../firebase-setup";
import { collection, onSnapshot } from "firebase/firestore";

const ManagePotraits = () => {
    const [potraitState, dispatchPotraitAction] = useReducer(PotraitReducer, initialPotraitState);
    const [updateFlag, setUpdateFlag] = useState(false);
    const [defaultPotrait, setDefaultPotrait] = useState({
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
    });

    useEffect(() => {
        // Subscribe to database updates
        const unsubscribe = onSnapshot(collection(db, "potraits"), (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                console.log("snapshot:", change.type, change.doc);
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
        let {id,...rest } = potrait
        await potraitService.update(id,rest);
    };

    const handleDelete = async (id) => {
        await potraitService.delete(id);
    };

    const handleUpdateAction = async (id) => {
        let potrait = await potraitService.get(id);
        setDefaultPotrait({id,...potrait.data});
        setUpdateFlag(true);
    }

    const handleClearUpdateFlag = () => {
        setUpdateFlag(false);
        setDefaultPotrait({
            title: "",
            price: "",
            description: "",
            category: "",
            image: "",
        });
    };

    const { potraits, isLoading, error } = potraitState;

    return (
        <div className="sm:flex justify-center p-4 gap-2 mx-auto max-w-6xl">
            <div className="w-full sm:w-1/3">
                <AddProduct
                    defaultPotrait={defaultPotrait}
                    updateState={updateFlag}
                    onClearUpdateFlag={handleClearUpdateFlag}
                    onAddPotrait={handleAdd}
                    onUpdatePotrait={handleUpdate}
                />
            </div>
            <div className="w-full sm:w-2/3">
                {console.log("potraits;:", potraits)}
                <ShowProducts
                    potraits={potraits}
                    onDeletePotrait={handleDelete}
                    onUpdatePotrait={handleUpdateAction}
                />
            </div>
        </div>
    );
};

export default ManagePotraits;
