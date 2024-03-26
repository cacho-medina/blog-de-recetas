import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { HiOutlineLogout } from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

function NavBar({ userLogged, setUserLogged }) {
    const logout = () => {
        Swal.fire({
            title: "Estas seguro que deseas cerrar sesion?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Cerrar sesion",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Sesion cerrada",
                    icon: "info",
                });
                sessionStorage.removeItem("loginAdmin");
                setUserLogged("");
            }
        });
    };
    const { pathname } = useLocation();
    return (
        <Navbar expand="md" bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand as={Link} to="/" className="onTap">
                    <img src={logo} alt="logo blog de recetas" height="80" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-center align-items-center gap-2 flex-row justify-content-center">
                        {userLogged?.length > 0 ? (
                            <>
                                {pathname === "/" ? (
                                    <NavLink
                                        end
                                        to="/administrador"
                                        className="nav-link"
                                    >
                                        <span className="btn btn-warning text-light">
                                            <RiAdminFill />
                                            Dashboard
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
                                pathname === "/" ? (
                                    <button
                                        className="nav-link"
                                        onClick={logout}
                                    >
                                        <span className="btn btn-outline-danger">
                                            <HiOutlineLogout />
                                            logout
                                        </span>
                                    </button>
                                ) : (
                                    <NavLink
                                        end
                                        to="/administrador"
                                        className="nav-link"
                                    >
                                        <span className="btn btn-warning text-light">
                                            <RiAdminFill />
                                            Dashboard
                                        </span>
                                    </NavLink>
                                )}
                            </>
                        ) : (
                            <>
                                <NavLink
                                    end
                                    to="/register"
                                    className="nav-link"
                                >
                                    <span className="btn btn-orange">
                                        Sign up
                                    </span>
                                </NavLink>
                                <NavLink
                                    end
                                    to="/administrador"
                                    className="nav-link"
                                >
                                    <span className="btn btn-green">Login</span>
                                </NavLink>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
