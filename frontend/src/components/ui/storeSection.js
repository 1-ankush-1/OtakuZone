import { Link } from "react-router-dom";
import Card from "./card";
import ArrowIcon from "../Icons/Arrow";

const StoreSection = (props) => {
    return (
        <section id={props.name} className="w-full py-8 md:py-16 lg:py-24 border-t">
            {props.seeMore && <div className="flex float-end pr-4">
                <Link to={props.seeMore} className="flex items-center justify-center gap-1 underline text-center">More<ArrowIcon className="w-4 h-4 rotate-180 mr-1.5" /></Link>
            </div>}
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                {props.header && <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">{props.header}</h2>
                </div>}
                <ul className="mx-auto grid max-w-7xl items-start gap-6 sm:grid-cols-3 lg:gap-12">
                    {props.products?.map(prod =>
                    (
                        <li key={prod.id}>
                            <Link to={props.navigateTo ? `${props.navigateTo}${prod.id}` : "../"}>
                                <Card
                                    title={prod.title}
                                    price={Number(prod.price)}
                                    url={prod.image}
                                    rating={prod?.rating?.rate | 0}
                                    usersRated={prod?.rating?.count | 0}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
                {props.products.length <= 0 && <p>{`No ${props.header} Found`}</p>}
            </div>
        </section>
    )
}

export default StoreSection;