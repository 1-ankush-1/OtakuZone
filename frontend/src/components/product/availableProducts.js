import ProductItem from "./productItem";

const productsArr = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },

    {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }

]
const AvailableProducts = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-12 border-t">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Featured Products</h2>
                    <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Check out our hand-picked selection of featured products.
                    </p>
                </div>
                <ul className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-3 lg:gap-12">
                    {productsArr.map(prod => <ProductItem title={prod.title} price={prod.price} url={prod.imageUrl} />)}
                </ul>
            </div>
        </section>
    )
}

export default AvailableProducts;