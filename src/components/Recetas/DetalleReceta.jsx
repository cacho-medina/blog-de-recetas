import { Container, Card, Badge } from "react-bootstrap";
import foto from "../../assets/food.jpg";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecetaById } from "../../helpers/queries";
import Swal from "sweetalert2";

function DetalleReceta() {
    const { id } = useParams();
    const [receta, setReceta] = useState({});
    const obtenerReceta = async () => {
        const res = await getRecetaById(id);
        if (res.status === 200) {
            const data = await res.json();
            setReceta(data);
        } else {
            Swal.fire({
                title: "ERROR!",
                text: `La receta no existe!`,
                icon: "error",
            });
        }
    };
    useEffect(() => {
        obtenerReceta();
    }, []);
    return (
        <Container className="grow py-3">
            <Card className="flex-md-row shadow">
                <div className="col col-md-6">
                    <Card.Img
                        src={foto}
                        className="w-100 h-100 object-fit-cover"
                    />
                </div>
                <Card.Body className="col col-md-6 d-flex flex-column">
                    <Card.Title className="display-6 fw-bolder text-center ff-nunito">
                        {receta.nombreReceta}
                    </Card.Title>
                    <hr />
                    <Card.Text>{receta.descripcion}</Card.Text>
                    <Card.Text>
                        <b>Ingredientes:</b> {receta.ingredientes}
                    </Card.Text>
                    <Card.Text className="align-self-end">
                        <b>Autor:</b>{" "}
                        <Badge bg="" className="bg-orange">
                            {receta.nombreAutor}
                        </Badge>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default DetalleReceta;
