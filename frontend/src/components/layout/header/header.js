import CartButton from "../../cart/cartButton";
import HeaderItems from "./headerItems";
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#" >OtkuZone</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <HeaderItems />
                    <CartButton />
                </Navbar.Collapse >
            </Container>
        </Navbar>
    )
}

export default Header;