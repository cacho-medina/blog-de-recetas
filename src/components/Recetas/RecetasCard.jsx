import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import food from "../../assets/food.jpg";

function RecetasCard({ receta }) {
    return (
        <Card className="col px-0 col-sm-8 col-md-5 col-lg-3 rounded-4 max scale-effect">
            <Card.Img variant="top" src={food} className="img-fluid" />
            <Card.Body className="text-center d-flex flex-column justify-content-between">
                <Card.Title className="ff-nunito fw-bold fs-3">
                    {receta.nombreReceta}
                </Card.Title>
                <Link
                    to={`/receta/${receta.id}`}
                    className="btn btn-light-green fw-medium ff-nunito"
                >
                    Ver mas...
                </Link>
            </Card.Body>
        </Card>
    );
}

export default RecetasCard;
