import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

function NavBar() {
    return (
        <Navbar expand="md" bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="logo blog de recetas" height="80" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-center align-items-center gap-2">
                        <NavLink end to="/" className="nav-link">
                            Inicio
                        </NavLink>
                        <NavLink end to="/crearReceta" className="nav-link">
                            <span className="btn btn-green">Crear</span>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
