import ProductSummary from "../../product/productSummary";
import Accessories from "./accessories/accessories";
import Clothing from "./clothing/clothing";
import Potraits from "./potraits/potraits";
import Posters from "./posters/posters";

const Store = () => {
    return (
        <>
            <ProductSummary />
            <Clothing />
            <Potraits />
            <Posters />
            <Accessories />
        </>
    )
}
export default Store;