import "../../styles/product.css";
import Carousel from "../ui/carousel";

const CarouselItemList = [
    { id: "1", title: "POSTERS", description: "Anime posters to decorate your room.", imgUrl: "./images/setPotrait.png", type: "poster", to: "/store/#posters" },
    { id: "2", title: "POTRAITS", description: "Anime character portraits for your collection.", imgUrl: "./images/setPotaitMain.png", type: "potrait", to: "/store/#potraits" },
    { id: "3", title: "KEYCHAINS", description: "Anime-themed keychains to show your love for your favorite characters.", imgUrl: "./images/setKeyChain.png", type: "accessories", to: "/store/#accessories" },
    { id: "4", title: "HOODIES", description: "Stylish hoodies featuring anime designs.", imgUrl: "./images/setHoddie.png", type: "clothing", to: "/store/#clothing" },
];

const ProductSummary = () => {
    return (
        <section className="product-summary pt-0.5">
            <Carousel items={CarouselItemList} />
        </section>
    );
};

export default ProductSummary;
