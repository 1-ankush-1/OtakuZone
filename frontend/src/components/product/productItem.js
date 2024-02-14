import Button from "../ui/button";
import Card from "../ui/card";

const ProductItem = (props) => {
    return (
        <Card>
            <div>
                <h3>{props.title}</h3>
            </div>
            <div>
                <img src={props.url} alt={props.title} />
            </div>
            <div>
                <p>{`$ ${props.price}`}</p>
                <Button type={"submit"} value={"Add To Cart"} />
            </div>
        </Card>
    )
}

export default ProductItem;