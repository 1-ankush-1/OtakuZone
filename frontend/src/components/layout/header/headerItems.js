import HamBurger from "../../Icons/hamBurger";
import HeaderItem from "./headerItem";
import { useState } from "react";

const headerItemList = [{
    id: "1",
    title: "HOME",
    goto: "/user"
}, {
    id: "2",
    title: "STORE",
    goto: "user/store"
}, {
    id: "3",
    title: "ABOUT",
    goto: "user/about"
}]

const HeaderItems = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="lg:flex relative items-center gap-5">
            <ul className="lg:flex gap-5 hidden text-white">
                {headerItemList.map((item) => (
                    <li key={item.id}>
                        <HeaderItem
                            href={item.goto}
                            title={item.title}
                            className={"hover:text-gray-300 text-lg"}
                        />
                    </li>
                ))}
            </ul>
            <div className="lg:hidden" onClick={toggleMenu}>
                <HamBurger />
            </div>
            {showMenu && (
                <ul className="lg:hidden absolute flex flex-col bg-white rounded-sm">
                    {headerItemList.map((item) => (
                        <li key={item.id}>
                            <HeaderItem
                                href={item.goto}
                                title={item.title}
                                className={"text-black hover:text-gray-400 p-3 text-sm"}
                                onClose={toggleMenu}
                            />
                            <hr />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
export default HeaderItems;
