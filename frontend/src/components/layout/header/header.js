import CartButton from "../../cart/cartButton";
import HeaderItems from "./headerItems";
import "../../../styles/header.css"

const Header = () => {
    return (
        <>
            <nav className="sticky top-0 bg-amber-950 p-4 z-10">
                <div className="container mx-auto">
                    <div className="lg:flex justify-between items-center lg:px-10">
                        <div className="lg:block text-white font-bold text-xl hidden">OtakuZone</div>
                        <div className="flex justify-between items-center lg:gap-6">
                            <HeaderItems />
                            <div className="lg:hidden text-white font-bold text-xl">OtakuZone</div>
                            <CartButton />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;