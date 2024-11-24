import { useState, useEffect } from "react";
import Input from "../components/ui/input";
import Button from "../components/ui/button";

const AddPotraitForm = (props) => {
    const [potrait, setPotrait] = useState({
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
    });

    useEffect(() => {
        setPotrait(props.defaultPotrait);
    }, [props.defaultPotrait]);

    const handlePotraitChange = (e) => {
        const { name, value } = e.target;
        setPotrait((prevPotrait) => ({
            ...prevPotrait,
            [name]: value,
        }));
    };

    const handlePotraitFormSubmit = async (e) => {
        e.preventDefault();
        if (!potrait.title || !potrait.price || !potrait.category ) {
            alert("Please fill all the fields");
            return;
        }

        if (props.updateState) {
            props.onUpdatePotrait(potrait);
            return;
        }

        props.onAddPotrait(potrait);
    };

    return (
        <form onSubmit={handlePotraitFormSubmit}>
            <Input
                label="Title"
                id="title"
                name="title"
                value={potrait.title}
                onChange={handlePotraitChange}
                type="text"
                placeholder="Enter your title"
            />
            <Input
                label="Price"
                id="price"
                name="price"
                value={potrait.price}
                onChange={handlePotraitChange}
                type="number"
                placeholder="Enter the price"
            />
            <div className="space-y-2">
                <label className="text-sm" htmlFor="description">
                    Description
                </label>
                <textarea
                    id="description"
                    name="description"
                    className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:border-blue-500 min-h-[100px] text-xs"
                    value={potrait.description}
                    onChange={handlePotraitChange}
                    type="text"
                    placeholder="Enter the description"
                ></textarea>
            </div>
            <Input
                label="Category"
                id="category"
                name="category"
                value={potrait.category}
                onChange={handlePotraitChange}
                type="text"
                placeholder="Enter the category"
            />
            <Input
                label="Image"
                id="image"
                name="image"
                value={potrait.image}
                onChange={handlePotraitChange}
                type="text"
                placeholder="Enter the image URL"
            />
            <div className="py-2 flex justify-center align-middle gap-2">
                {props.updateState && <Button type="button" onHandleClick={props.onClearUpdateFlag}>Clear</Button>}
                <Button type="submit">{props.updateState ? "Update" : "Add"}</Button>
            </div>
        </form>
    );
};

export default AddPotraitForm;