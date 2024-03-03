import AvailableProducts from "./availableProducts";
import PopularCharacter from "./popularCharacters";
import ProductSummary from "./productSummary";
import Testimonials from "./testimonials";

const Products = () => {
    return (
        <div className="px-4 mx-auto max-w-6xl">
            <ProductSummary />
            <AvailableProducts />
            <PopularCharacter />
            <Testimonials />
        </div>
    )
}

export default Products;