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
        <section className="products lg:px-20 lg:py-4 px-2 py-2">
            <ul>
                {productsArr.map(prod => <ProductItem title={prod.title} price={prod.price} url={prod.imageUrl} />)}
            </ul>
        </section>
    )
}

export default AvailableProducts;