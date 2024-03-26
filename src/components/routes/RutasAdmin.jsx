import { Routes, Route } from "react-router-dom";
import Admin from "../pages/Administrador/Admin";
import CrearReceta from "../Recetas/CrearReceta";

function RutasAdmin() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Admin />} />
                <Route
                    exact
                    path="/crearReceta"
                    element={<CrearReceta title="Crear" editar={false} />}
                />
                <Route
                    exact
                    path="/editarReceta/:id"
                    element={<CrearReceta title="Editar" editar={true} />}
                />
            </Routes>
        </>
    );
}

export default RutasAdmin;
