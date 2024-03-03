import StoreSection from "../../../ui/storeSection"

const productsArr = [
    {
        id: 1,
        title: 'Colors',
        price: 100,
        image: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
        id: 2,
        title: 'Black and white Colors',
        price: 50,
        image: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
        id: 3,
        title: 'Yellow and Black Colors',
        price: 70,
        image: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
        id: 4,
        title: 'Blue Color',
        price: 100,
        image: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
]

const Accessories = () => {
    return (
        <StoreSection name="accessories" header={"Accessories"} products={productsArr} navigateTo={""} />
    )
}

export default Accessories