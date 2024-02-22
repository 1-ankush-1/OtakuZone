import { Link } from "react-router-dom";
import Button from "./button";

const Card = (props) => {
    return (
        <div className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 bg-white shadow-sm w-full aspect-square overflow-hidden card-container h-full p-4">
            <img
                alt={props.title}
                className="aspect-square object-cover object-center h-3/5 w-full"
                src={props.url}
            />
            <div className="flex flex-col items-center justify-between gap-1 p-1 w-full h-2/5 text-lg">
                <div className="space-y-1">
                    <Link className="font-bold line-clamp-1" href="#">
                        {props.title}
                    </Link>
                    <div className="font-bold">{`₹${props.price?.toFixed(2)}`}</div>
                </div>
                <Button type={"submit"} value={"Add To Cart"} />
            </div>
        </div>
    )
}

export default Card;