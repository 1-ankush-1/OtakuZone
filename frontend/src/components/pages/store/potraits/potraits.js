import { useEffect, useState } from "react";
import Card from "../../../ui/card";

const Potraits = () => {
    const [potratis, setPotraits] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchAllPotratis = async () => {
        setIsLoading(true);
        const response = await fetch("https://fakestoreapi.com/products/category/jewelery");
        const potrait = await response.json();
        setPotraits((prev) => {
            return potrait
        })
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
                <ul className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-3 lg:gap-12">
                    {!isLoading && potratis?.map(prod => <Card title={prod.title} price={prod.price} url={prod.image} />)}
                    {!isLoading && potratis.length <= 0 && <p>no potarits found</p>}
                    {isLoading && "Loading..."}
                </ul>
            </div>
        </section>
    )
}

export default Potraits;