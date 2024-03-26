import { deleteReceta, getRecetas } from "../../../helpers/queries";
import Options from "./Options";
import Swal from "sweetalert2";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

function ImgModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Imagen de {props.nombre}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-0 px-md-2">
                <img
                    src={props.img}
                    alt={`Imagen de ${props.nombre}`}
                    className="maxModal object-fit-cover"
                />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} variant="danger">
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

function ItemProd({ receta, setRecetas }) {
    const [modalShow, setModalShow] = useState(false);
    const {
        _id,
        nombreAutor,
        nombreReceta,
        descripcion,
        ingredientes,
        imagen,
    } = receta;
    const borrarReceta = () => {
        Swal.fire({
            title: "Estas seguro de eliminar la receta?",
            text: "Una vez hecho esto no se puede recuperar!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#b3c4c1",
            confirmButtonText: "Eliminar",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await deleteReceta(_id);
                if (res.status === 200) {
                    Swal.fire({
                        title: "Receta eliminada!",
                        text: `La receta "${nombreReceta}" fue eliminada correctamente`,
                        icon: "success",
                    });
                    const res = await getRecetas();
                    if (res.status === 200) {
                        const data = await res.json();
                        setRecetas(data);
                    }
                } else {
                    Swal.fire({
                        title: "ERROR!",
                        text: `La receta "${nombreReceta}" no se pudo eliminar`,
                        icon: "error",
                    });
                }
            }
        });
    };
    return (
        <>
            <ImgModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                nombre={nombreReceta}
                img={imagen}
            />
            <tr>
                <td>
                    <Button
                        variant=""
                        onClick={() => setModalShow(true)}
                        className="fw-medium text-decoration-underline"
                    >
                        Ver
                    </Button>
                </td>
                <td className="text-truncate" style={{ maxWidth: 120 }}>
                    {nombreReceta}
                </td>
                <td className="text-truncate">{nombreAutor}</td>
                <td className="text-truncate" style={{ maxWidth: 150 }}>
                    {descripcion}
                </td>
                <td className="text-truncate" style={{ maxWidth: 150 }}>
                    {ingredientes}
                </td>
                <td className="d-flex align-items-center justify-content-center gap-1">
                    <Options borrarReceta={borrarReceta} id={_id} />
                </td>
            </tr>
        </>
    );
}

export default ItemProd;
