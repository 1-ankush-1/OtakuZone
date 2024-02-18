import CartButton from "../../cart/cartButton";
import HeaderItems from "./headerItems";
import "../../../styles/header.css"

const Header = () => {
    return (
        <>
            <nav className="sticky top-0 bg-amber-800 p-4">
                <div className="container mx-auto">
                    <div className="lg:flex justify-between items-center lg:px-6">
                        <div className="lg:block text-white font-bold text-xl hidden">OtakuZone</div>
                        <div className="flex justify-between items-center lg:gap-6">
                            <HeaderItems />
                            <div className="lg:hidden text-white font-bold text-xl">OtakuZone</div>
                            <CartButton />
                        </div>
                    </div>
                </div>
            </nav>
            {/* <NavBar/> */}
            <div className="main-img">
                <img src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png" alt="mainImage"></img>
            </div>
        </>
    )
}

export default Header;