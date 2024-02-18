import { Container, Card, Badge, Button } from "react-bootstrap";
import foto from "../../assets/food.jpg";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecetaById } from "../../helpers/queries";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  }); */

function DetalleReceta() {
    const { id } = useParams();
    const [receta, setReceta] = useState({});
    useEffect(() => {
        getRecetaById(id, setReceta);
    }, []);
    return (
        <Container className="grow py-3">
            <div className="mb-4">
                <Button variant="danger">
                    <FaTrashAlt />
                    Borrar
                </Button>{" "}
                <Link to="/editarReceta" className="btn btn-info text-light">
                    <FiEdit />
                    Editar
                </Link>
            </div>
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
