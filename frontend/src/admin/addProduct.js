import AddPotraitForm from "./addProductForm";

const AddProduct = (props) => {
    console.log("AddProduct props:", props);
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <AddPotraitForm
                defaultPotrait={props.defaultPotrait}
                updateState={props.updateState}
                onClearUpdateFlag={props.onClearUpdateFlag}
                onAddPotrait={props.onAddPotrait}
                onUpdatePotrait={props.onUpdatePotrait}
            />
        </div>
    );
};

export default AddProduct;