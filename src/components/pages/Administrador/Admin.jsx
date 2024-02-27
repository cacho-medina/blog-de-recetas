import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Item from "./Item";
import { FiFilePlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { getRecetas } from "../../../helpers/queries";
import { useState, useEffect } from "react";

function Admin() {
    const [recetas, setRecetas] = useState([]);
    const obtenerRecetas = async () => {
        const res = await getRecetas();
        if (res.ok) {
            const data = await res.json();
            setRecetas(data);
        }
    };
    useEffect(() => {
        obtenerRecetas();
    }, []);
    return (
        <Container className="grow">
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="display-3 ff-nunito fw-bold text-orange">
                    Productos Disponibles
                </h1>
                <Link
                    to="/administrador/crearReceta"
                    className="btn btn-orange"
                >
                    <FiFilePlus /> Agregar
                </Link>
            </div>
            <hr />
            <Table
                hover
                responsive
                className="shadow overflow-x-hidden align-middle text-center"
            >
                <thead className="table-success">
                    <tr>
                        <th>imagen</th>
                        <th>Receta</th>
                        <th>Autor</th>
                        <th>Descripcion</th>
                        <th>ingredientes</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {!recetas.length ? (
                        <tr>
                            <td colSpan={6} className="text-danger">No hay recetas cargadas</td>
                        </tr>
                    ) : (
                        recetas.map((item) => {
                            return (
                                <Item
                                    receta={item}
                                    key={item.id}
                                    setRecetas={setRecetas}
                                />
                            );
                        })
                    )}
                </tbody>
            </Table>
        </Container>
    );
}

export default Admin;
