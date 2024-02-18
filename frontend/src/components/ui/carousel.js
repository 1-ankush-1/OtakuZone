import { useState, useEffect } from 'react';
import "../../styles/ui.css"

const Carousel = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => {
                if (current === items.length - 1) {
                    return 0;
                } else {
                    return current + 1;
                }
            });
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [items]);

    return (
        <div className="carousel">
            <div className='max-h-72 w-full object-cover lg:h-72 h-40'></div>
            {items.map((item, index) => (
                <div
                    key={item.id}
                    className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                >
                    <div key={item.id} className="relative h-full w-full">
                        <img
                            src={item.imgUrl}
                            alt={item.title}
                            className="w-full h-full lg:object-contain object-cover mix-blend-multiply"
                        />
                        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black opacity-50">
                            <div className="w-3/4 text-center md:w-2/4">
                                <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl text-white">
                                    {item.title}
                                </h1>
                                <p className="mb-12 white opacity-80">
                                    {item.description}
                                </p>
                                <div className="flex justify-center gap-2">
                                    <button className="py-2 px-4 bg-white text-black rounded-lg">
                                        Explore
                                    </button>
                                    <button className="py-2 px-4 bg-transparent text-white border border-white rounded-lg">
                                        Gallery
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default Carousel;