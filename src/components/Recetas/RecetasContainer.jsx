import { Container } from "react-bootstrap";
import RecetasCard from "./RecetasCard";

function RecetasContainer() {
    return (
        <Container className="py-3">
            <h2 className="display-3 text-center">Mis Recetas</h2>
            <div className="row flex-column align-items-center justify-content-center flex-md-row px-2 py-4 gap-4">
                <RecetasCard />
                <RecetasCard />
                <RecetasCard />
                <RecetasCard />
            </div>
        </Container>
    );
}

export default RecetasContainer;
