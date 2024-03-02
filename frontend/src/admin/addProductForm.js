import { useState } from "react";
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

    const handlePotraitChange = (e) => {
        const { name, value } = e.target;
        setPotrait((prevPotrait) => ({
            ...prevPotrait,
            [name]: value,
        }));
    };

    const handlePotraitFormSubmit = async (e) => {
        e.preventDefault();
        props.onAddPotrait(potrait)
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
                    className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:border-blue-500 min-h-[100px]"
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
            <div className="py-2 text-center">
                <Button type="submit" >Add</Button>
            </div>
        </form>
    );
};

export default AddPotraitForm