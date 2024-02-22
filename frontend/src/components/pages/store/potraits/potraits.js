import { useEffect, useState } from "react";
import Card from "../../../ui/card";

const Potraits = () => {
    const [potratis, setPotraits] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchAllPotratis = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch("https://fakestoreapi.com/products/category/jewelery");
            if (!response.ok) {
                throw new Error("Something went wrong")
            }
            const potrait = await response.json();
            setPotraits(potrait);
        } catch (err) {
            console.log(err);
            setError(err.message);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        fetchAllPotratis();
    }, [])

    return (
        <section id="potraits" className="w-full py-8 md:py-16 lg:py-24 border-t">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Potraits</h2>
                </div>
                <ul className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 lg:gap-12">
                    {!isLoading && potratis?.map(prod =>
                    (<Card
                        title={prod.title}
                        price={prod.price}
                        url={prod.image}
                        rating={prod.rating.rate}
                        usersRated={prod.rating.count}
                    />))}
                    {!isLoading && !error && potratis.length <= 0 && <p>no potarits found</p>}
                    {isLoading && "Loading..."}
                    {!isLoading && error && <p>{error}</p>}
                </ul>
            </div>
        </section>
    )
}

export default Potraits;