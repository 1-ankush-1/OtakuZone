import ProductSummary from "../../product/productSummary";
import Accessories from "./accessories/accessories";
import Clothing from "./clothing/clothing";
import Potraits from "./potraits/potraits";
import Posters from "./posters/posters";

const Store = () => {
    return (
        <div className="px-4 mx-auto max-w-6xl">
            <ProductSummary />
            <Clothing />
            <Potraits />
            <Posters />
            <Accessories />
        </div>
    )
}
export default Store;