import { Nav } from "react-bootstrap";

const headerItemList = [{
    id: "1",
    title: "HOME",
    goto: "/home"
}, {
    id: "2",
    title: "STORE",
    goto: "/store"
}, {
    id: "3",
    title: "ABOUT",
    about: "/about"
}]

const HeaderItems = () => {
    return (
        <Nav className="me-auto">
            {headerItemList.map((item) => (
                <Nav.Link
                    key={item.id}
                    href={item.goto}
                >{item.title}
                </Nav.Link>
            ))}
        </Nav>
    )
}

export default HeaderItems;