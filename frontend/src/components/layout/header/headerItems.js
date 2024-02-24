import HamBurger from "../../Icons/hamBurger";
import HeaderItem from "./headerItem";
import { useState } from "react";

const HeaderItems = (props) => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="lg:flex relative items-center gap-5">
            <ul className="lg:flex gap-5 hidden text-white">
                {props.items.map((item) => (
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
                    {props.items.map((item) => (
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
