import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { PiPencilLineFill } from "react-icons/pi";
import { FaHome } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useLocation } from "react-router-dom";

function NavBar() {
    const { pathname } = useLocation();
    return (
        <Navbar expand="md" bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand as={Link} to="/" className="rotate">
                    <img src={logo} alt="logo blog de recetas" height="80" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-center align-items-center gap-2 flex-row justify-content-center">
                        {pathname === "/" ? (
                            <NavLink
                                end
                                to="/administrador"
                                className="nav-link"
                            >
                                <span className="btn btn-warning text-light">
                                    <RiAdminFill />
                                    Admin
                                </span>
                            </NavLink>
                        ) : (
                            <NavLink end to="/" className="nav-link">
                                <span className="btn btn-outline-orange px-3">
                                    <FaHome />
                                    Inicio
                                </span>
                            </NavLink>
                        )}
                        {pathname === "/administrador" ||
                        pathname === "/" ||
                        pathname.includes("/receta") ? (
                            <NavLink
                                end
                                to="/administrador/crearReceta"
                                className="nav-link"
                            >
                                <span className="btn btn-green">
                                    <PiPencilLineFill />
                                    Crear
                                </span>
                            </NavLink>
                        ) : (
                            <NavLink
                                end
                                to="/administrador"
                                className="nav-link"
                            >
                                <span className="btn btn-secondary">
                                    <IoMdArrowRoundBack />
                                    Volver
                                </span>
                            </NavLink>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
