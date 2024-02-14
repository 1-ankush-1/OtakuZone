import HeaderItem from "./headerItem";

const headerItemList = [{
    id: "1",
    title: "HOME",
    goto: "home"
}, {
    id: "2",
    title: "STORE",
    goto: "store"
}, {
    id: "3",
    title: "ABOUT",
    about: "about"
}]

const HeaderItems = () => {
    return (
        <ul>
            {headerItemList.map((item) => (
                <HeaderItem
                    key={item.id}
                    title={item.title}
                    goto={item.goto} />
            ))}
        </ul>
    )
}

export default HeaderItems;