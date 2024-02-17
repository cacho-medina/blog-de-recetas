import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import food from "../../assets/food.jpg";

function RecetasCard() {
    return (
        <Card className="col px-0 col-sm-8 col-md-5 col-lg-3 rounded-4">
            <Card.Img variant="top" src={food} className="img-fluid" />
            <Card.Body className="text-center">
                <Card.Title className="ff-nunito fw-bold fs-1">
                    Titulo
                </Card.Title>
                <Link
                    to="/receta/1"
                    className="btn btn-light-green fw-medium ff-nunito"
                >
                    Ver mas...
                </Link>
            </Card.Body>
        </Card>
    );
}

export default RecetasCard;
