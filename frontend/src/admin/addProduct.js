import AddPotraitForm from "./addProductForm";

const AddProduct = (props) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <AddPotraitForm
                onAddPotrait={props.onAddPotrait}
                onUpdatePotrait={props.onUpdatePotrait}
            />
        </div>
    )
}
export default AddProduct;