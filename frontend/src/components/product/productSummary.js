import "../../styles/product.css"

const CarouselItemList = [
    { id: "1", title: "Slide One", description: "description", imgUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png" },
    { id: "2", title: "Slide Two", description: "description", imgUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png" },
]

const ProductSummary = () => {
    return (
        <section className="product-summary">
            {/* <Carousel>
                {CarouselItemList.map((item) => (
                    <Carousel.Item key={item.id} >
                        <img
                            className="d-block w-100"
                            src={item.imgUrl}
                            alt={item.title}
                        />
                        <Carousel.Caption>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel> */}
        </section>
    )
}

export default ProductSummary;
