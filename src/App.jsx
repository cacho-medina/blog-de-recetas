import "./App.css";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Error from "./components/pages/Error";
import DetalleReceta from "./components/Recetas/DetalleReceta";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import RutasAdmin from "./components/routes/RutasAdmin";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function App() {
    const { pathname } = useLocation();
    const usuario = JSON.parse(sessionStorage.getItem("loginAdmin")) || "";
    const [userLogged, setUserLogged] = useState(usuario);
    return (
        <>
            {pathname !== "/login" && pathname !== "/register" && (
                <NavBar userLogged={userLogged} setUserLogged={setUserLogged} />
            )}

            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/receta/:id" element={<DetalleReceta />} />
                <Route
                    exac
                    path="/login"
                    element={<Login setUserLogged={setUserLogged} />}
                />
                <Route exac path="/register" element={<Signup />} />
                <Route
                    exact
                    path="/administrador/*"
                    element={
                        <RutasProtegidas>
                            <RutasAdmin />
                        </RutasProtegidas>
                    }
                />
                <Route exact path="/*" element={<Error />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
