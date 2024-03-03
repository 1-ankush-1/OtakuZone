import ArrowIcon from "../Icons/Arrow";
import StarIcon from "../Icons/star";
import HeartIcon from "../Icons/heart";
import Button from "./button";
import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../stores/cartContext";
import { AuthContext } from "../../stores/authContext";

const ProductCard = (props) => {
    const authCtx = useContext(AuthContext);
    const cartCtx = useContext(CartContext);
    const [product, setProduct] = useState({
        productId: "",
        title: "",
        price: "",
        imageUrl: "",
        category: "",
        quantity: "1"
    })

    useEffect(() => {
        const { image, price, title, category } = props;
        // console.log(props)
        setProduct((prev) => {
            return {
                ...prev, productId: props.id, title, price, imageUrl: image || "https://prasadyash2411.github.io/ecom-website/img/Album%204.png", category
            };
        })
    }, [props.item])

    const handleProductInput = (e) => {
        setProduct((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const handleAddToCartAction = (e) => {
        e.preventDefault()
        cartCtx.addItem({ ...product, email: authCtx.email });
    }

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <>
            <div className="flex items-center gap-2 text-sm font-medium underline cursor-pointer" onClick={goBack}>
                <ArrowIcon className="w-4 h-4 mr-1.5" />
                Back
            </div>
            {/* <div className="flex p-4">
                <ArrowIcon className="w-5 h-5 mr-1.5" onClick={goBack} />
                Back
            </div> */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
                <div className="grid gap-3 items-start">
                    <div className="grid gap-4">
                        <ProductImage
                            mainImage={props.image}
                        />
                    </div>
                </div>
                {/* buy interaction */}
                <div className="grid gap-4 md:gap-10 items-start">
                    <div className="block md:flex items-start">
                        <Rating
                            title={props.title}
                            description={props.description}
                            price={props.price}
                            rate={props.rating.rate}
                            ratedBy={props.rating.count}
                        />
                    </div>
                    <form className="grid gap-4 md:gap-10">
                        {props?.colors && <Color />}
                        {props?.sizes && <Size />}
                        {<Quantity quantity={product.quantity} onQuantityChange={handleProductInput} />}
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button type="button" onHandleClick={handleAddToCartAction}>Add to cart</Button>
                            <Button>
                                <div className="flex items-center justify-center">
                                    <HeartIcon className="w-5 h-8 mr-2" />
                                    wishlist
                                </div>
                            </Button>
                        </div>
                    </form>
                    {/* About Product */}
                    {props?.item?.about && <AboutProduct />}
                </div>
            </div>
        </>
    )
}

export default ProductCard;

const ProductImage = (props) => {
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

    const handleZoomIn = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = (e.clientX - left) / width * 100;
        const y = (e.clientY - top) / height * 100;

        setZoomPosition({ x, y });
    };

    const handleZoomOut = () => {
        setZoomPosition({ x: 0, y: 0 });
    };

    return (
        <div className="relative">
            <img
                alt="Product Image"
                className={`aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800`}
                style={{
                    transform: `scale(${zoomPosition.x / 100 + 1}, ${zoomPosition.y / 100 + 1})`,
                    transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`
                }}
                src={props.mainImage}
                onClick={handleZoomIn}
            />
            <div className="hidden md:flex gap-4 items-start">
                {props?.images?.map((image, index) => (
                    <button
                        key={index}
                        className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50"
                    >
                        <img
                            alt={`Preview thumbnail ${index + 1}`}
                            className="aspect-square object-cover"
                            height={100}
                            src={image}
                            width={100}
                        />
                        <span className="sr-only">{`View Image ${index + 1}`}</span>
                    </button>
                ))}
            </div>
            {zoomPosition.x !== 0 && (
                <button
                    className="absolute z-1 top-0 right-0 bg-black text-white p-2  border-none rounded-xl"
                    onClick={handleZoomOut}
                >
                    zoomOut
                </button>
            )}
        </div>
    );
};


const Rating = React.memo((props) => {
    const starCount = props.rate;
    return (
        <div className="grid gap-4">
            <h1 className="font-bold text-2xl sm:text-3xl">{props.title}</h1>
            <div className="text-4xl font-bold">{`₹${props.price}`}</div>
            <div>
                <p>{props.description}.</p>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-0.5">
                    {[...Array(starCount)].map((_, index) => (
                        <StarIcon key={index} className="w-5 h-5 fill-primary" />
                    ))}
                    {[...Array(5 - starCount)].map((_, index) => (
                        <StarIcon key={index + starCount} className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    ))}
                </div>
            </div>
        </div>
    )
})
const AboutProduct = () => {
    return (
        <div className="grid gap-4 text-sm leading-loose">
            <p>
                Introducing the Acme Prism T-Shirt, a perfect blend of style and comfort for the modern individual. This tee
                is crafted with a meticulous composition of 60% combed ringspun cotton and 40% polyester jersey, ensuring a
                soft and breathable fabric that feels gentle against the skin.
            </p>
            <p>
                The design of the Acme Prism T-Shirt is as striking as it is comfortable. The shirt features a unique
                prism-inspired pattern that adds a modern and eye-catching touch to your ensemble.
            </p>
        </div>
    )
}

const Quantity = (props) => {
    // quantity={product.quantity} onQuantityChange
    return (
        <div className="grid gap-2">
            <label className="text-base" htmlFor="quantity">
                Quantity
            </label>
            <select name="quantity" id="quantity" className="w-24" value={props.quantity} onChange={props.onQuantityChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
    )
}

const Color = () => {
    return (
        <div className="grid gap-2">
            <label className="text-base" htmlFor="color">
                Color
            </label>
            <select id="color" className="w-24">
                <option value="black">Black</option>
                <option value="white">White</option>
                <option value="blue">Blue</option>
            </select>
        </div>
    )
}

const Size = () => {
    return (
        <div className="grid gap-2">
            <label className="text-base" htmlFor="size">
                Size
            </label>
            <select id="size" className="w-24">
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
        </div>
    )
}