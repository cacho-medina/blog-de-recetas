import "./App.css";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Error from "./components/pages/Error";
import CrearReceta from "./components/Recetas/CrearReceta";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/crearReceta" element={<CrearReceta />} />
                <Route exact path="*" element={<Error />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
