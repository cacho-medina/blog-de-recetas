import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import trash from "../../assets/trash.svg";

function Error() {
    return (
        <Container className="grow py-3 text-center">
            <img src={trash} alt="imagen de basurero" className="max-img" />
            <h1 className="display-1 fw-bold text-danger mt-3 title">
                ERROR 404
            </h1>
            <Link className="btn btn-orange px-4" to="/">
                Volver a home
            </Link>
        </Container>
    );
}

export default Error;
