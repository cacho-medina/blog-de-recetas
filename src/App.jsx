import "./App.css";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Error from "./components/pages/Error";
import CrearReceta from "./components/Recetas/CrearReceta";
import DetalleReceta from "./components/Recetas/DetalleReceta";
import Admin from "./components/pages/Administrador/Admin";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/receta/:id" element={<DetalleReceta />} />
                <Route exact path="/administrador" element={<Admin />} />
                <Route
                    exact
                    path="/administrador/crearReceta"
                    element={<CrearReceta title="Crear" editar={false} />}
                />
                <Route
                    exact
                    path="/administrador/editarReceta/:id"
                    element={<CrearReceta title="Editar" editar={true} />}
                />
                <Route
                    exact
                    path="/administrador/eliminarReceta/:id"
                    element={<CrearReceta />}
                />
                <Route exact path="/*" element={<Error />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
