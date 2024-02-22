import { useState } from "react";
import Input from "../components/ui/input";
import Button from "../components/ui/button";

const AddProductForm = () => {
    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
    });

    const handleProductChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const handleProductFormSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch("https://ecomm-dfca0-default-rtdb.asia-southeast1.firebasedatabase.app/potraits.json", {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            alert("Added data successfully");
        }
    };

    return (
        <form onSubmit={handleProductFormSubmit}>
            <Input
                label="Title"
                id="title"
                name="title"
                value={product.title}
                onChange={handleProductChange}
                type="text"
                placeholder="Enter your title"
            />
            <Input
                label="Price"
                id="price"
                name="price"
                value={product.price}
                onChange={handleProductChange}
                type="number"
                placeholder="Enter the price"
            />
            <Input
                label="Description"
                id="description"
                name="description"
                value={product.description}
                onChange={handleProductChange}
                type="text"
                placeholder="Enter the description"
            />
            <Input
                label="Category"
                id="category"
                name="category"
                value={product.category}
                onChange={handleProductChange}
                type="text"
                placeholder="Enter the category"
            />
            <Input
                label="Image"
                id="image"
                name="image"
                value={product.image}
                onChange={handleProductChange}
                type="text"
                placeholder="Enter the image URL"
            />
            <Button type="submit" value="Add Product" />
        </form>
    );
};

export default AddProductForm