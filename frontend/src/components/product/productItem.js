import { Link } from "react-router-dom";
import Button from "../ui/button";
import Card from "../ui/card";

const ProductItem = (props) => {
    return (
        <Card>
            <img
                alt={props.title}
                className="aspect-square object-cover object-center h-3/5 w-full"
                src={props.url}
            />
            <div className="flex flex-col items-center justify-between gap-1 p-1 w-full h-2/5 text-lg">
                <div className="space-y-1">
                    <Link className="font-bold" href="#">
                        {props.title}
                    </Link>
                    <div className="font-bold">{`₹${props.price?.toFixed(2)}`}</div>
                </div>
                <Button type={"submit"} value={"Add To Cart"} />
            </div>
        </Card>
    )
}

export default ProductItem;