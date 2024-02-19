import AvailableProducts from "./availableProducts";
import PopularCharacter from "./popularCharacters";
import ProductSummary from "./productSummary";
import Testimonials from "./testimonials";

const Products = () => {
    return (
        <>
            <ProductSummary />
            <AvailableProducts />
            <PopularCharacter />
            <Testimonials />
        </>
    )
}

export default Products;