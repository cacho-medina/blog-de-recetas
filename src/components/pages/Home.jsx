import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ImgAnimation from "../ImgAnimation";
import RecetasContainer from "../Recetas/RecetasContainer";
function Home() {
    return (
        <Container fluid className="px-0 grow">
            <section className="bg-light-blue text-center py-3 px-1">
                <div className="my-4">
                    <h1 className="title">
                        ¡Cocina con pasión
                        <br />y creatividad!
                    </h1>
                    <p className="subtitle text-secondary">
                        ¡Comparte tus propias recetas y conecta con otros
                        amantes de la cocina! Descubre miles de recetas
                        deliciosas y fáciles de preparar
                    </p>
                </div>
                <ImgAnimation />
            </section>
            <section className="bg-orange text-light text-center py-3">
                <h2 className="ff-nunito medium">Comparte tus recetas</h2>
                <Link className="btn btn-outline-light px-4" to="/crearReceta">
                    Aqui
                </Link>
            </section>
            <RecetasContainer />
        </Container>
    );
}

export default Home;
