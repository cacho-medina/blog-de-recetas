import { Card, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecetaById } from "../../helpers/queries";
import Swal from "sweetalert2";

function DetalleReceta() {
    const { id } = useParams();
    const [receta, setReceta] = useState({});
    const obtenerReceta = async () => {
        const res = await getRecetaById(id);
        if (res.ok) {
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
        <motion.div
            className="container grow grid"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { duration: 1 },
            }}
            exit={{
                opacity: 0,
            }}
        >
            <Card className="flex-md-row shadow">
                <div className="col col-md-6">
                    <Card.Img
                        src={receta.imagen}
                        className="max object-fit-cover"
                    />
                </div>
                <Card.Body className="col col-md-6 d-flex flex-column">
                    <Card.Title className="display-6 fw-bolder text-center ff-nunito mb-0">
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
        </motion.div>
    );
}

export default DetalleReceta;
