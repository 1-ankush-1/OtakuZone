import "../../styles/product.css"
import Carousel from "../ui/carousel";

const CarouselItemList = [
    { id: "1", title: "Posters", description: "Anime posters to decorate your room.", imgUrl: "./images/setPotrait.png" },
    { id: "2", title: "Portraits", description: "Anime character portraits for your collection.", imgUrl: "./images/setPotaitMain.png" },
    { id: "3", title: "Keychains", description: "Anime-themed keychains to show your love for your favorite characters.", imgUrl: "./images/setKeyChain.png" },
    { id: "4", title: "Hoodies", description: "Stylish hoodies featuring anime designs.", imgUrl: "./images/setHoddie.png" },
]

const ProductSummary = () => {
    return (
        <section className="product-summary lg:px-20 lg:py-4 px-2 py-2">
            <Carousel items={CarouselItemList} />
        </section>
    );
};

export default ProductSummary;
